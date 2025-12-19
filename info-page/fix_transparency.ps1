param (
    [string]$ImagePath
)

Add-Type -AssemblyName System.Drawing

$fullpath = Resolve-Path $ImagePath
Write-Host "Processing: $fullpath"

if (-not (Test-Path $fullpath)) {
    Write-Error "File not found!"
    exit 1
}

$bmp = [System.Drawing.Bitmap]::FromFile($fullpath)
$width = $bmp.Width
$height = $bmp.Height

# Create a new bitmap for the output
$newBmp = New-Object System.Drawing.Bitmap($width, $height)

for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -lt $height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        # Check for White or Light Gray (Checkerboard)
        # R, G, B all high (> 200)
        if ($pixel.R -gt 200 -and $pixel.G -gt 200 -and $pixel.B -gt 200) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
        else {
            $newBmp.SetPixel($x, $y, $pixel)
        }
    }
}

$bmp.Dispose()

# Save over the original (need to release handle first, which Dispose does)
# But we can't save to same file while locked? 
# Save to temp, then move.
$tempPath = "$fullpath.temp.png"
$newBmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()

Move-Item -Force $tempPath $fullpath
Write-Host "Done! Saved to $fullpath"
