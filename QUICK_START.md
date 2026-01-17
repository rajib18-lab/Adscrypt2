# 🚀 Quick Start Guide

## ✅ Problem Fixed!

**Issue**: Node.js was installed but not in PATH, so npm commands weren't recognized.

**Solution**: Added Node.js to PATH and started the development server.

## 🌐 Access Your Website

The development server should now be running at:
**http://localhost:5173**

If your browser didn't open automatically:
1. Open your browser
2. Go to: `http://localhost:5173`

## 📝 For Future Sessions

### Option 1: Use the Quick Start Script (Easiest)
```powershell
.\start-dev.ps1
```

### Option 2: Manual Start
1. First, add Node.js to PATH (if needed):
   ```powershell
   $env:PATH += ";C:\Program Files\nodejs"
   ```

2. Install dependencies (first time only):
   ```powershell
   npm install
   ```

3. Start the server:
   ```powershell
   npm run dev
   ```

### Option 3: Fix PATH Permanently
Run this once to add Node.js to your PATH permanently:
```powershell
.\fix-path.ps1
```
Then restart your terminal/IDE.

## 🛠️ Troubleshooting

### If npm is not recognized:
1. Run: `.\fix-path.ps1`
2. Restart your terminal/IDE
3. Or manually add to PATH: `C:\Program Files\nodejs`

### If port 5173 is already in use:
- The server will automatically use the next available port (e.g., 5174)
- Check the terminal output for the actual URL

### To stop the server:
- Press `Ctrl + C` in the terminal where it's running

## 📁 Project Files

- **React Version**: `src/` folder (requires npm)
- **Standalone Version**: `index-standalone.html` (works without npm - just double-click!)

## ✨ Features

✅ Fully responsive design
✅ Smooth animations and hover effects
✅ Mobile menu
✅ Portfolio filtering
✅ All sections: Header, Hero, Services, Portfolio, Testimonials, Footer

Enjoy your website! 🎉

