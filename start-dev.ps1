# Quick start script for development server
# This script fixes PATH and starts the dev server

Write-Host "🚀 Starting ADSCRYPT Development Server..." -ForegroundColor Cyan

# Add Node.js to PATH if not already there
$nodePath = "C:\Program Files\nodejs"
if (Test-Path $nodePath) {
    if ($env:PATH -notlike "*$nodePath*") {
        $env:PATH += ";$nodePath"
        Write-Host "✅ Added Node.js to PATH" -ForegroundColor Green
    }
} else {
    Write-Host "❌ Node.js not found! Please install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start dev server
Write-Host "`n🌐 Starting Vite dev server..." -ForegroundColor Cyan
Write-Host "The website will open at http://localhost:5173" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Yellow

npm run dev

