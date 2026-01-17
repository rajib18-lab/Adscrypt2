# Fix PATH for Node.js - Run this script if npm is not recognized
# This adds Node.js to your PATH for the current PowerShell session

$nodePath = "C:\Program Files\nodejs"

if (Test-Path $nodePath) {
    $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
    
    if ($currentPath -notlike "*$nodePath*") {
        [Environment]::SetEnvironmentVariable("Path", "$currentPath;$nodePath", "User")
        Write-Host "✅ Node.js path added to User PATH permanently!" -ForegroundColor Green
        Write-Host "Please restart your terminal/IDE for changes to take effect." -ForegroundColor Yellow
    } else {
        Write-Host "✅ Node.js is already in PATH!" -ForegroundColor Green
    }
    
    # Add to current session
    $env:PATH += ";$nodePath"
    Write-Host "✅ Node.js added to current session PATH" -ForegroundColor Green
    
    Write-Host "`nVerifying installation..." -ForegroundColor Cyan
    node --version
    npm --version
} else {
    Write-Host "❌ Node.js not found at $nodePath" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
}

