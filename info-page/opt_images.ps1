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
        Write-Host "Optimizing $imgName..."
        
        $bmp = [System.Drawing.Bitmap]::FromFile($fullPath)
        
        # Calculate new dimensions (Max 500px)
        $ratio = $bmp.Width / $bmp.Height
        $newWidth = 500
        $newHeight = 500
        
        if ($bmp.Width -gt $bmp.Height) {
            $newHeight = [int]($newWidth / $ratio)
        }
        else {
            $newWidth = [int]($newHeight * $ratio)
        }

        if ($bmp.Width -le 500 -and $bmp.Height -le 500) {
            Write-Host " - Already small enough. Skipping."
            $bmp.Dispose()
            continue
        }

        $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($newBmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($bmp, 0, 0, $newWidth, $newHeight)
        
        $bmp.Dispose() # Release file lock
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
Write-Host "Optimization Complete."
