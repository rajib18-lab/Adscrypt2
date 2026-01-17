# Setup Instructions for ADSCRYPT React Project

## Problem: npm is not recognized

This means Node.js (which includes npm) is not installed on your system.

## Solution: Install Node.js

### Step 1: Download Node.js
1. Go to **https://nodejs.org/**
2. Download the **LTS (Long Term Support)** version for Windows
3. This will download an installer file (e.g., `node-v20.x.x-x64.msi`)

### Step 2: Install Node.js
1. Run the downloaded installer
2. Click "Next" through the installation wizard
3. **IMPORTANT**: Make sure "Add to PATH" option is checked (it usually is by default)
4. Complete the installation

### Step 3: Restart Your Terminal/IDE
- **Close and reopen** your PowerShell terminal or VS Code/Cursor
- This is required for the PATH changes to take effect

### Step 4: Verify Installation
Run these commands in your terminal:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., `v20.10.0` and `10.2.3`)

### Step 5: Install Dependencies
Once Node.js is installed, run:
```powershell
npm install
```

### Step 6: Start Development Server
```powershell
npm run dev
```

The server will start and you'll see a URL like:
```
➜  Local:   http://localhost:5173/
```

Open that URL in your browser!

---

## Alternative: Use the Standalone HTML File

If you don't want to install Node.js right now, you can use the standalone version:

**Just double-click `index-standalone.html`** - it works immediately without any installation!

---

## Troubleshooting

### If npm is still not recognized after installation:
1. Restart your computer (sometimes required)
2. Check if Node.js is installed:
   - Open File Explorer
   - Go to `C:\Program Files\nodejs\`
   - If this folder exists, Node.js is installed but PATH might be wrong
3. Manually add to PATH:
   - Search "Environment Variables" in Windows
   - Edit "Path" variable
   - Add: `C:\Program Files\nodejs\`
   - Restart terminal

### If you get errors during npm install:
- Make sure you're in the project directory: `cd C:\Users\RAJIB\OneDrive\Desktop\Adscrypt`
- Try: `npm install --legacy-peer-deps`
- Check your internet connection

