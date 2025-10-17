# 🖼️ Vercel Image Deployment Guide

## Issue: Images Not Showing on Vercel (But Work Locally)

This is a common issue when deploying to Vercel. Here's the complete solution:

---

## ✅ What We've Already Done

1. ✅ Created `/public` folder in project root
2. ✅ Moved all images to `/public` folder
3. ✅ Updated vite.config.js with `publicDir: 'public'`
4. ✅ Changed image paths to `/imagename.png` format

---

## 🔧 Additional Vercel Configuration Required

### Step 1: Create `vercel.json` file

Create a file named `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "CI": "true"
  },
  "routes": [
    {
      "src": "/public/(.*)",
      "dest": "/public/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Step 2: Update `.gitignore` (CRITICAL!)

Make sure `/public/` is NOT in your `.gitignore`. Images must be committed to GitHub.

Check your `.gitignore` file:

```bash
# Make sure these lines are NOT present:
# public/
# /public
```

If they are, remove them and commit the change.

### Step 3: Verify `.gitignore`

View current `.gitignore`:

```bash
cat .gitignore
```

---

## 📁 Current File Structure (Should Look Like This)

```
Mumbai_Hacks/
├── public/                 ← Images folder
│   ├── nikhil.png
│   ├── eswar.jpg
│   ├── siva.jpeg
│   ├── likith.png
│   └── gopi.png           ← (can be deleted if not in team)
├── src/
│   ├── pages/
│   │   └── LandingPage.jsx ← Contains: image: '/nikhil.png'
│   └── ...
├── vite.config.js         ← Contains: publicDir: 'public'
├── package.json
├── vercel.json            ← NEW: Create this
└── index.html
```

---

## 🚀 Deployment Steps

### Option A: Redeploy from Vercel Dashboard

1. Go to https://vercel.com
2. Select your project
3. Click "Redeploy" button
4. Wait for build to complete
5. Check your site

### Option B: Use Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

---

## 🔍 Troubleshooting Checklist

- [ ] `/public/` folder exists in project root
- [ ] Image files exist in `/public/` (nikhil.png, eswar.jpg, siva.jpeg, likith.png)
- [ ] LandingPage.jsx uses `/imagename.png` paths (with leading slash)
- [ ] `vite.config.js` contains `publicDir: 'public'`
- [ ] `vercel.json` exists in project root
- [ ] `/public/` is NOT in `.gitignore`
- [ ] Images are committed to GitHub (`git add public/`, then `git commit`)
- [ ] Latest code is pushed to main branch

---

## 📝 Image Path Format Reference

### ✅ CORRECT (For Vercel)
```jsx
image: '/nikhil.png'        // Absolute path with leading slash
image: '/eswar.jpg'
image: '/siva.jpeg'
image: '/likith.png'
```

### ❌ INCORRECT (Won't Work)
```jsx
image: 'nikhil.png'          // Relative path
image: './nikhil.png'        // Current directory
image: 'src/data/nikhil.png' // Source folder path
image: 'public/nikhil.png'   // Don't include 'public/'
```

---

## 💡 Why This Works

- **Local Development**: Vite serves from `/public` automatically
- **Vercel Build**: `publicDir: 'public'` tells Vite to copy `/public` contents to `/dist`
- **Vercel Deploy**: Static files from `/dist` are served at root `/`
- **Result**: Images at `/public/nikhil.png` → served as `/nikhil.png`

---

## 🎯 Next Steps

1. Commit `vercel.json` file
2. Ensure images are tracked in Git
3. Push to GitHub
4. Redeploy on Vercel

```bash
git add vercel.json
git add public/
git commit -m "Add vercel.json config and ensure images are tracked"
git push origin main
```

Then visit your Vercel dashboard and manually redeploy.

---

## 📞 Still Having Issues?

Check the Vercel deployment logs:
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments" tab
4. Find latest deployment
5. Click "View Build Logs"
6. Look for errors related to images or public folder

Common errors:
- `Module not found: Cannot find module 'public/image.png'` → Check publicDir config
- `404: Image not found` → Check image paths have leading slash `/`
- `ENOENT: no such file or directory` → Image file missing or not committed

