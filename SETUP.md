<div align="center">

# ⚙️ VedaAI — Complete Setup Guide

### *From Zero to Deployed — Step-by-Step*

[![VS Code](https://img.shields.io/badge/VS_Code-0078D4?logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

**[⬅ Back to README](./README.md)**

</div>

---

## 📑 Table of Contents

1. [🎯 What You'll Accomplish](#-what-youll-accomplish)
2. [✅ Prerequisites](#-prerequisites)
3. [💻 VS Code Setup](#-vs-code-setup)
4. [📦 Step 1 — Clone & Install](#-step-1--clone--install)
5. [⚡ Step 2 — Run Locally](#-step-2--run-locally)
6. [🔧 Step 3 — Environment Variables](#-step-3--environment-variables)
7. [📤 Step 4 — Push to GitHub](#-step-4--push-to-github)
8. [🚀 Step 5 — Deploy to Vercel](#-step-5--deploy-to-vercel)
9. [🔌 Step 6 — Backend Setup (Optional)](#-step-6--backend-setup-optional)
10. [🐳 Step 7 — Docker Setup (Optional)](#-step-7--docker-setup-optional)
11. [🧪 Step 8 — Testing the Build](#-step-8--testing-the-build)
12. [🐛 Troubleshooting](#-troubleshooting)
13. [🎓 Pro Tips](#-pro-tips)

---

## 🎯 What You'll Accomplish

By the end of this guide, you will have:

- ✅ A **fully working** VedaAI app on your local machine
- ✅ VS Code configured with recommended extensions
- ✅ Code pushed to your **GitHub repository**
- ✅ A **live deployment on Vercel** with a public URL
- ✅ Understanding of the optional **backend setup** (Node + Mongo + Redis + BullMQ)
- ✅ CI/CD pipeline ready for future updates

**Estimated total time: 15–30 minutes** ⏱️

---

## ✅ Prerequisites

### Required Software

| Tool | Minimum Version | Download |
|------|-----------------|----------|
| **Node.js** | 18.0.0 | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.0.0 | (comes with Node) |
| **Git** | 2.30+ | [git-scm.com](https://git-scm.com/) |
| **VS Code** | latest | [code.visualstudio.com](https://code.visualstudio.com/) |

### Required Accounts

| Service | Purpose | Sign Up |
|---------|---------|---------|
| **GitHub** | Code hosting | [github.com](https://github.com/signup) |
| **Vercel** | Deployment | [vercel.com/signup](https://vercel.com/signup) |
| **OpenAI** (optional) | LLM API for AI generation | [platform.openai.com](https://platform.openai.com/) |
| **MongoDB Atlas** (optional) | Cloud database | [mongodb.com/atlas](https://www.mongodb.com/atlas) |

### Verify Your Setup

Open a terminal and run:

```bash
node --version    # Should print v18.0.0 or higher
npm --version     # Should print 9.0.0 or higher
git --version     # Should print 2.30 or higher
code --version    # Should print 1.80+ (or whatever VS Code version)
```

If any command fails, install the missing tool from the links above.

---

## 💻 VS Code Setup

### Install Recommended Extensions

Open VS Code → press `Ctrl/Cmd + Shift + X` → install these:

| Extension | Purpose | ID |
|-----------|---------|-----|
| **ES7+ React/Redux/React-Native snippets** | React snippets | `dsznajder.es7-react-js-snippets` |
| **Tailwind CSS IntelliSense** | Tailwind autocomplete | `bradlc.vscode-tailwindcss` |
| **TypeScript Vue Plugin** | TS support | `Vue.vscode-typescript-vue-plugin` |
| **ESLint** | Linting | `dbaeumer.vscode-eslint` |
| **Prettier** | Code formatting | `esbenp.prettier-vscode` |
| **GitLens** | Git superpowers | `eamodio.gitlens` |
| **Auto Rename Tag** | HTML/JSX tag rename | `formulahendry.auto-rename-tag` |
| **Path Intellisense** | File path autocomplete | `christian-kohler.path-intellisense` |
| **Error Lens** | Inline error display | `usernamehw.errorlens` |
| **GitHub Pull Requests** | PR management | `GitHub.vscode-pull-request-github` |

#### Quick Install (One Command)

Paste this in your terminal:

```bash
code --install-extension dsznajder.es7-react-js-snippets \
  --install-extension bradlc.vscode-tailwindcss \
  --install-extension dbaeumer.vscode-eslint \
  --install-extension esbenp.prettier-vscode \
  --install-extension eamodio.gitlens \
  --install-extension formulahendry.auto-rename-tag \
  --install-extension christian-kohler.path-intellisense \
  --install-extension usernamehw.errorlens \
  --install-extension GitHub.vscode-pull-request-github
```

### VS Code Workspace Settings

Create `.vscode/settings.json` in the project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

---

## 📦 Step 1 — Clone & Install

### Option A: Clone from GitHub (if you have the repo)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/VedaAI-Assessment.git

# Navigate into the project
cd VedaAI-Assessment

# Open in VS Code
code .
```

### Option B: Start Fresh

```bash
# Create a new directory
mkdir VedaAI-Assessment
cd VedaAI-Assessment

# Initialize git
git init

# Open in VS Code
code .

# (Now copy all project files into this directory)
```

### Install Dependencies

In the VS Code terminal (`` Ctrl/Cmd + ` ``):

```bash
npm install
```

You should see:

```
added 290 packages, and audited 291 packages in 12s
found 0 vulnerabilities
```

---

## ⚡ Step 2 — Run Locally

### Start the Dev Server

```bash
npm run dev
```

You'll see output like:

```
  VITE v7.3.2  ready in 423 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Open in Your Browser

- Visit **http://localhost:5173**
- You should see the VedaAI assignments list with sample data
- Try the **Create Assignment** flow end-to-end
- Test the **mobile view** by resizing your browser or using DevTools

### Hot Module Replacement (HMR)

- Edit any file in `src/` and save
- Browser updates **instantly** — no full reload!

---

## 🔧 Step 3 — Environment Variables

### Create `.env` File

In the project root, create a file named `.env`:

```bash
# Vite frontend variables (MUST be prefixed with VITE_)
VITE_API_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000

# Optional — only if calling OpenAI from client
VITE_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# App metadata
VITE_APP_NAME=VedaAI Assessment
VITE_APP_VERSION=1.0.0
```

### Create `.env.example` (for sharing)

```bash
VITE_API_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000
VITE_OPENAI_API_KEY=your_openai_key_here
VITE_APP_NAME=VedaAI Assessment
VITE_APP_VERSION=1.0.0
```

### Add `.env` to `.gitignore`

Ensure your `.gitignore` includes:

```
# Environment variables
.env
.env.local
.env.*.local

# Dependencies
node_modules/

# Build output
dist/
build/

# Logs
*.log
npm-debug.log*

# Editor
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
.idea/

# OS
.DS_Store
Thumbs.db
```

---

## 📤 Step 4 — Push to GitHub

### 4.1 — Create a New GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Repository name: **`VedaAI-Assessment`**
3. Description: `AI-powered assessment creator built for VedaAI`
4. Choose **Public** (for portfolio visibility)
5. **DO NOT** initialize with README/gitignore (we already have them)
6. Click **Create repository**

### 4.2 — Configure Git Locally

```bash
# Set your identity (only needed once globally)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Verify
git config --list
```

### 4.3 — Initial Commit & Push

```bash
# Initialize git (skip if already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial VedaAI assessment creator implementation"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/VedaAI-Assessment.git

# Push to main branch
git branch -M main
git push -u origin main
```

If prompted for authentication, use a **Personal Access Token (PAT)**:
- Go to [github.com/settings/tokens](https://github.com/settings/tokens)
- Click **Generate new token (classic)**
- Select scopes: `repo`, `workflow`
- Copy the token and use it as your password

### 4.4 — Verify on GitHub

Visit **https://github.com/YOUR_USERNAME/VedaAI-Assessment** and confirm all files are uploaded.

### 4.5 — Future Updates

```bash
# After making changes
git add .
git commit -m "feat: describe your change"
git push
```

### 4.6 — Git Best Practices

#### Conventional Commits

```bash
git commit -m "feat: add PDF download feature"
git commit -m "fix: correct mobile nav overflow"
git commit -m "docs: update setup instructions"
git commit -m "style: format with prettier"
git commit -m "refactor: simplify Zustand store"
git commit -m "test: add unit tests for assignment store"
git commit -m "chore: bump dependencies"
```

#### Branch Strategy

```bash
# Create feature branch
git checkout -b feat/pdf-export

# Work on it, commit
git add . && git commit -m "feat: add PDF export"

# Push and create PR
git push -u origin feat/pdf-export
```

---

## 🚀 Step 5 — Deploy to Vercel

### Method A: One-Click Deploy (Easiest)

1. Push your code to GitHub (Step 4 above)
2. Visit **[vercel.com/new](https://vercel.com/new)**
3. Click **Import Git Repository**
4. Connect your GitHub account (first time only)
5. Find **`VedaAI-Assessment`** → click **Import**
6. Vercel auto-detects Vite. Confirm settings:

   | Setting | Value |
   |---------|-------|
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |

7. Add **Environment Variables** (click "Add"):

   ```
   VITE_API_URL = https://your-backend.com
   VITE_WS_URL  = wss://your-backend.com
   ```

8. Click **Deploy** 🚀

After ~60 seconds, you'll get a live URL like:
```
https://VedaAI-Assessment.vercel.app
```

### Method B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login (opens browser)
vercel login

# From your project directory
vercel

# Follow the prompts:
# ? Set up and deploy "VedaAI-Assessment"? Y
# ? Which scope? Your Account
# ? Link to existing project? N
# ? What's your project's name? VedaAI-Assessment
# ? In which directory is your code located? ./
# ? Want to modify these settings? N
```

For **production deployment**:

```bash
vercel --prod
```

### Auto-Deploy on Every Push

Once connected, Vercel automatically:
- ✅ Deploys **previews** for every PR
- ✅ Deploys **production** on every push to `main`
- ✅ Comments on PRs with preview URLs
- ✅ Tracks deployment history

### Custom Domain (Optional)

1. Go to your Vercel project → **Settings** → **Domains**
2. Click **Add** → enter your domain (e.g., `vedaai.yourdomain.com`)
3. Add the DNS records shown by Vercel
4. Wait ~5 minutes for DNS propagation
5. SSL certificate is **automatic** ✨

### Vercel Configuration File (Optional)

Create `vercel.json` in the project root for advanced control:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 🔌 Step 6 — Backend Setup (Optional)

> If you only want the frontend deployed, **skip this section**.
> The frontend works standalone with a simulated WebSocket.

### 6.1 — Create Backend Directory

```bash
mkdir vedaai-backend
cd vedaai-backend
npm init -y
```

### 6.2 — Install Dependencies

```bash
npm install express mongoose redis bullmq socket.io \
  openai zod cors dotenv helmet morgan

npm install -D typescript @types/node @types/express \
  @types/cors @types/morgan ts-node nodemon
```

### 6.3 — Initialize TypeScript

```bash
npx tsc --init
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 6.4 — Create Folder Structure

```bash
mkdir -p src/{routes,models,workers,services,middleware,utils}
touch src/index.ts src/queue.ts
```

### 6.5 — Sample `src/index.ts`

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import assignmentRoutes from './routes/assignments';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: process.env.FRONTEND_URL || '*' }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/assignments', assignmentRoutes(io));
app.get('/health', (_, res) => res.json({ status: 'ok' }));

// WebSocket
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  socket.on('subscribe', (assignmentId) => socket.join(assignmentId));
  socket.on('disconnect', () => console.log('Client disconnected:', socket.id));
});

// Database
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(console.error);

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

### 6.6 — Backend `.env`

```bash
PORT=4000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/vedaai
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
```

### 6.7 — Run Backend Locally

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

Start it:

```bash
npm run dev
```

### 6.8 — Deploy Backend Options

| Platform | Best For | Free Tier |
|----------|----------|-----------|
| **Railway** | Easy Node + DB setup | $5/mo credit |
| **Render** | Auto-deploy from GitHub | Yes (with sleep) |
| **Fly.io** | Global edge deployment | Yes |
| **Heroku** | Classic Node hosting | Paid |
| **DigitalOcean App Platform** | Production-grade | $5/mo |

---

## 🐳 Step 7 — Docker Setup (Optional)

For backend + Redis + Mongo locally:

### `docker-compose.yml`

```yaml
version: '3.9'

services:
  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    environment:
      MONGO_INITDB_DATABASE: vedaai

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

  backend:
    build: ./vedaai-backend
    ports:
      - "4000:4000"
    depends_on:
      - mongodb
      - redis
    environment:
      MONGODB_URI: mongodb://mongodb:27017/vedaai
      REDIS_URL: redis://redis:6379
      PORT: 4000

volumes:
  mongo-data:
  redis-data:
```

### Run with Docker

```bash
docker-compose up -d        # Start
docker-compose logs -f      # View logs
docker-compose down         # Stop
```

---

## 🧪 Step 8 — Testing the Build

### Local Production Build

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

Visit **http://localhost:4173** to test the production build locally.

### Verify Build Output

```bash
ls -lh dist/
# Should show:
# index.html (~1 MB, everything inlined as a single file)
```

### Pre-Deploy Checklist

- [ ] `npm run build` completes without errors
- [ ] No console errors in browser
- [ ] All views work (Home, Assignments, Create, View Paper)
- [ ] PDF download works
- [ ] Mobile view tested at 375px, 768px, 1024px
- [ ] Lighthouse score > 90 (Performance, Accessibility)
- [ ] `.env` is in `.gitignore`
- [ ] No API keys committed to git

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: Port 5173 already in use

```bash
# macOS/Linux
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Issue: Build fails with TypeScript errors

```bash
# Run TypeScript check
npx tsc --noEmit

# Common fix: restart TS server in VS Code
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Issue: Vercel deployment fails

1. Check **Build Logs** in Vercel dashboard
2. Ensure `package.json` has correct `build` script
3. Verify Node version: add to `package.json`:
   ```json
   { "engines": { "node": ">=18" } }
   ```

### Issue: Git push rejected

```bash
# Pull first, then push
git pull origin main --rebase
git push
```

### Issue: GitHub asks for password (deprecated)

Use **Personal Access Token** instead:
- Visit [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
- Generate with `repo` scope
- Use token in place of password

### Issue: Tailwind classes not working

```bash
# Restart dev server
# Cmd/Ctrl + C in terminal, then:
npm run dev
```

### Issue: WebSocket connection fails in production

Make sure your backend supports `wss://` (secure WebSocket) for HTTPS sites.

---

## 🎓 Pro Tips

### 💡 Tip 1 — Use GitHub CLI

```bash
# Install
brew install gh        # macOS
winget install GitHub.cli  # Windows

# Authenticate
gh auth login

# Create repo + push in one command
gh repo create VedaAI-Assessment --public --source=. --push
```

### 💡 Tip 2 — Vercel CLI for Quick Deploys

```bash
# Set env vars from CLI
vercel env add VITE_API_URL

# Deploy preview
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

### 💡 Tip 3 — Git Hooks with Husky

```bash
npm install -D husky lint-staged
npx husky init
echo "npm run build" > .husky/pre-push
```

Now every `git push` runs the build first to catch errors!

### 💡 Tip 4 — GitHub Actions CI/CD

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
```

### 💡 Tip 5 — README Badges

Add to top of README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/VedaAI-Assessment)
```

### 💡 Tip 6 — Quick Status Check

```bash
# Check git status with branch info
git status -sb

# View commit graph
git log --oneline --graph --decorate --all

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### 💡 Tip 7 — VS Code Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + P` | Quick file open |
| `Cmd/Ctrl + Shift + P` | Command palette |
| `Cmd/Ctrl + B` | Toggle sidebar |
| `Cmd/Ctrl + ` `` | Toggle terminal |
| `Cmd/Ctrl + D` | Select next occurrence |
| `Cmd/Ctrl + Shift + L` | Select all occurrences |
| `Option + Up/Down` | Move line up/down |
| `Shift + Option + Down` | Duplicate line |
| `Cmd/Ctrl + /` | Toggle comment |
| `F2` | Rename symbol |

---

## ✅ Final Checklist

After completing this guide, you should have:

- [x] ✅ App running at `http://localhost:5173`
- [x] ✅ Code pushed to GitHub
- [x] ✅ Live deployment on Vercel (with HTTPS URL)
- [x] ✅ Auto-deploy on every push to `main`
- [x] ✅ Environment variables configured
- [x] ✅ Custom domain (optional)
- [x] ✅ README + SETUP documentation

---

## 🆘 Need Help?

| Resource | Link |
|----------|------|
| 📖 **Project README** | [README.md](./README.md) |
| 🐛 **Report Bug** | [GitHub Issues](https://github.com/YOUR_USERNAME/VedaAI-Assessment/issues) |
| 💬 **Vite Docs** | [vitejs.dev](https://vitejs.dev/) |
| 💬 **Vercel Docs** | [vercel.com/docs](https://vercel.com/docs) |
| 💬 **React Docs** | [react.dev](https://react.dev/) |
| 💬 **Tailwind Docs** | [tailwindcss.com](https://tailwindcss.com/docs) |

---

<div align="center">

### 🎉 You're All Set!

You now have a **production-ready VedaAI Assessment Creator** deployed live.

**[⬆ Back to Top](#-vedaai--complete-setup-guide)** · **[📖 README](./README.md)**

---

Made with ❤️ for the **VedaAI Full Stack Engineering Assignment**

⭐ Don't forget to star the repo!

</div>
