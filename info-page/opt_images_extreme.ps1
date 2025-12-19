param (
    [string]$TargetFolder = "assets"
)

Add-Type -AssemblyName System.Drawing

$images = @(
    "guttie_selfie_v2.png",
    "guttie_singing_v2.png",
    "guttie_char3.png",
    "guttie_running.png",
    "guttie_swimming.png",
    "guttie_jumprope_v3.png",
    "guttie_lifting.png",
    "guttie_spaghetti.png"
)

foreach ($imgName in $images) {
    $fullPath = Join-Path $TargetFolder $imgName
    if (Test-Path $fullPath) {
        Write-Host "Shrinking $imgName..."
        
        $bmp = [System.Drawing.Bitmap]::FromFile($fullPath)
        
        # Calculate new dimensions (Max 250px)
        $ratio = $bmp.Width / $bmp.Height
        $newWidth = 250
        $newHeight = 250
        
        if ($bmp.Width -gt $bmp.Height) {
            $newHeight = [int]($newWidth / $ratio)
        }
        else {
            $newWidth = [int]($newHeight * $ratio)
        }

        # If already small, skip
        if ($bmp.Width -le 250 -and $bmp.Height -le 250) {
            Write-Host " - Already tiny. Skipping."
            $bmp.Dispose()
            continue
        }

        $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($newBmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($bmp, 0, 0, $newWidth, $newHeight)
        
        $bmp.Dispose()
        $graph.Dispose()

        # Save back
        $tempPath = "$fullPath.temp.png"
        $newBmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $newBmp.Dispose()

        Move-Item -Force $tempPath $fullPath
        Write-Host " - Resized to ${newWidth}x${newHeight}"
    }
    else {
        Write-Host "Warning: $imgName not found."
    }
}

# Optimize Background (JPG)
$bgName = "mobile_pattern_bg.jpg"
$bgPath = Join-Path $TargetFolder $bgName
if (Test-Path $bgPath) {
    Write-Host "Optimizing Background..."
    $bmp = [System.Drawing.Bitmap]::FromFile($bgPath)
    
    # Cap BG at 800px width (it is tiled, so smaller is fine if seamless, but let's just reduce quality/size)
    # Actually, if it's 250KB, simple re-save with lower quality might help, or resize if it's huge dimensions.
    # Let's check dimensions check implicitly by resizing to max 800 if larger.
    
    $bgWidth = 800
    if ($bmp.Width -gt $bgWidth) {
        $ratio = $bmp.Width / $bmp.Height
        $bgHeight = [int]($bgWidth / $ratio)
         
        $newBmp = New-Object System.Drawing.Bitmap($bgWidth, $bgHeight)
        $graph = [System.Drawing.Graphics]::FromImage($newBmp)
        $graph.DrawImage($bmp, 0, 0, $bgWidth, $bgHeight)
        $bmp.Dispose()
        $graph.Dispose()
         
        # Save as JPG with compression? System.Drawing defaults are okay-ish.
        $newBmp.Save($bgPath + ".temp.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $newBmp.Dispose()
         
        Move-Item -Force ($bgPath + ".temp.jpg") $bgPath
        Write-Host " - Background resized to $bgWidth width"
    }
    else {
        $bmp.Dispose()
        Write-Host " - Background small enough."
    }
}

Write-Host "Optimization Complete."
