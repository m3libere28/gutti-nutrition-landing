param (
    [string]$InputFile = "assets/bg_decoration_raw.png",
    [string]$OutputFile = "assets/bg_decoration.png"
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $InputFile)) {
    Write-Error "Input file not found: $InputFile"
    exit 1
}

$bmp = [System.Drawing.Bitmap]::FromFile($InputFile)
# Create a new bitmap with transparency support
$newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graph = [System.Drawing.Graphics]::FromImage($newBmp)
$graph.DrawImage($bmp, 0, 0)

# Loop through pixels and make white ones transparent
# Using a threshold for "near white"
$threshold = 240

for ($x = 0; $x -lt $newBmp.Width; $x++) {
    for ($y = 0; $y -lt $newBmp.Height; $y++) {
        $pixel = $newBmp.GetPixel($x, $y)
        
        # Check if pixel is white or near white
        if ($pixel.R -ge $threshold -and $pixel.G -ge $threshold -and $pixel.B -ge $threshold) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$newBmp.Save($OutputFile, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$graph.Dispose()
$newBmp.Dispose()

Write-Host "Background removed and saved to $OutputFile"
