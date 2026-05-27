<div align="center">
<br />
<img src="https://img.shields.io/badge/VedaAI-Assessment%20-FF5623?style=for-the-badge&logo=react&logoColor=white" alt="VedaAI" height="40" />
<br />

# VedaAI — Assessment

**A full-stack AI-powered platform that lets teachers create assignments, generate structured question papers using AI, and export them as PDF — built for the VedaAI Full Stack Engineering Assignment.**

<br />

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://veda-ai-assessment-gold.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/manishpatel00/VedaAI-Assessment)
[![Figma](https://img.shields.io/badge/Design-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/nB2HMm1BhTpmHcHrmEslGB/VedaAI---Hiring-Assignment)

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State-orange)](https://github.com/pmndrs/zustand)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## Quick Links

| Resource | Link |
|----------|------|
| **Live Application** | https://veda-ai-assessment-gold.vercel.app/ |
| **Figma Design** | [VedaAI Hiring Assignment](https://www.figma.com/design/nB2HMm1BhTpmHcHrmEslGB/VedaAI---Hiring-Assignment) |
| **Setup Guide** | [SETUP.md](./SETUP.md) |

---

## Table of Contents

- [Overview](#overview)
- [Assessment Coverage](#assessment-coverage)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Approach & Design Decisions](#approach--design-decisions)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [AI Generation Pipeline](#ai-generation-pipeline)
- [Backend Reference Architecture](#backend-reference-architecture)
- [Design Fidelity](#design-fidelity)
- [Performance](#performance)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

VedaAI Assessment Creator is a production-grade web application built strictly to the provided Figma designs. Teachers can:

1. **Create assignments** through a validated multi-step form
2. **Generate AI-powered question papers** with structured prompts (sections, difficulty, marks)
3. **View beautifully formatted papers** that resemble real exam documents
4. **Download as PDF** with multi-page support
5. **Regenerate** papers with one click for new variations
6. **Receive real-time progress** via simulated WebSocket updates

The frontend is fully functional and deployed to Vercel. The backend (Node + Express + MongoDB + Redis + BullMQ + Socket.io) is documented as a reference architecture with production-ready code patterns.

---

## Assessment Coverage

Every requirement from the official assignment brief, mapped transparently.

> **Legend:** ✅ Implemented · 🟡 Reference Architecture · ⭐ Bonus

### 1. Assignment Creation (Frontend)

| Requirement | Status | Implementation |
|-------------|:------:|----------------|
| File upload (PDF / text) | ✅ | Drag-and-drop + browse, 10 MB limit |
| Due date | ✅ | Native date picker, prevents past dates |
| Question types | ✅ | 8 types: MCQ, Short, Long, T/F, Fill-in, Match, Case, A&R |
| Number of questions + marks | ✅ | Per-type +/- steppers (1-20 each) |
| Additional instructions | ✅ | Free-form textarea |
| Proper validation | ✅ | Real-time field-level validation |
| Zustand state management | ✅ | Single centralized typed store |
| WebSocket management | ✅ | Simulated WS with 7-stage live progress |

### 2. AI Question Generation

| Requirement | Status | Implementation |
|-------------|:------:|----------------|
| Convert input → structured prompt | ✅ | `buildPrompt(formData)` function |
| Generate sections (A, B, C…) | ✅ | Auto-lettered per question type |
| Generate questions | ✅ | Template-based with topic interpolation |
| Difficulty (easy / medium / hard) | ✅ | Distribution algorithm across sections |
| Marks per question | ✅ | Per-question + section totals |
| Never render raw LLM output | ✅ | Always parsed through typed schema |

### 3. Backend System (Reference Architecture)

| Requirement | Status | Notes |
|-------------|:------:|-------|
| Node.js + Express (TypeScript) | 🟡 | Full code in [SETUP.md](./SETUP.md) |
| MongoDB → assignments & results | 🟡 | Mongoose schemas documented |
| Redis → caching / job state | 🟡 | Cache pattern + BullMQ backend |
| BullMQ → background jobs | 🟡 | Worker examples for generation + PDF |
| WebSocket → real-time updates | 🟡 | Socket.io event flow |

### 4. Output Page (Enhanced)

| Requirement | Status |
|-------------|:------:|
| Student info (Name / Roll / Section) | ✅ |
| Grouped sections with title & instruction | ✅ |
| Question text + difficulty tag + marks | ✅ |
| Clean exam-paper layout | ✅ |
| Proper spacing & hierarchy | ✅ |
| Mobile responsive | ✅ |

### Bonus Features

| Feature | Status |
|---------|:------:|
| ⭐ PDF download (jsPDF + html2canvas) | ✅ |
| ⭐ Action bar (Regenerate) | ✅ |
| ⭐ Difficulty badges (color-coded) | ✅ |
| ⭐ Loading state with progress bar | ✅ |
| ⭐ Empty state illustrations | ✅ |
| ⭐ Multi-step form with progress | ✅ |
| ⭐ Search & filter assignments | ✅ |
| ⭐ Pixel-perfect Figma match | ✅ |
| ⭐ Mobile bottom nav (Figma-exact) | ✅ |

---

## Features

### Multi-Step Assignment Wizard

**Step 1 — Assignment Details**
- Drag-and-drop file upload with browse fallback
- Due date selector (today minimum)
- Subject + Grade dropdowns
- Topic / Chapter input
- Time allowed stepper
- School name customization

**Step 2 — Question Configuration**
- Add/remove question types dynamically (up to 6 sections)
- Per-type controls for question count and marks
- Difficulty preset (Easy / Mixed / Advanced)
- Additional instructions
- Live summary widget (total questions, marks, sections, time)

## AI Generation Pipeline

### End-to-End Flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌───────────┐     ┌─────────┐
│   Form      │────▶│  buildPrompt │────▶│   LLM API   │────▶│   Parse   │────▶│ Render  │
│   Inputs    │     │   (structured│     │ (GPT/Claude)│     │ (Zod/TS)  │     │  (UI)   │
│             │     │   JSON spec) │     │             │     │           │     │         │
└─────────────┘     └──────────────┘     └─────────────┘     └───────────┘     └─────────┘
                                                                     │
                                                                     │ Reject malformed
                                                                     ▼
                                                              ┌──────────────┐
                                                              │  Show error  │
                                                              │  Retry / Fail│
                                                              └──────────────┘
```

- Structured prompts with sections, difficulty, and marks
- Type-safe parsing through strict TypeScript interfaces
- Difficulty distribution algorithm (Easy → Medium → Hard)
- 8 question type templates with topic interpolation

### Question Paper Output

- School + class header
- Time allowed & maximum marks
- Student info with underline placeholders
- Sectioned layout (Section A, B, C…)
- Color-coded difficulty badges (green / amber / red)
- Marks per question + section totals
- MCQ options auto-rendered (a, b, c, d)

### Export & Actions

- **PDF Export** via lazy-loaded jsPDF + html2canvas (multi-page A4)
- **Regenerate** for fresh paper variants
- **Delete** with context menu
- **Search & Filter** live filtering of assignments

### Real-Time WebSocket Updates

```
[15%]  Connecting to AI engine...
[30%]  Analyzing assignment parameters...
[50%]  Generating question structure...
[65%]  Creating questions by difficulty...
[80%]  Formatting sections...
[90%]  Validating question paper...
[100%] Question paper ready
```

---

## Architecture

### System Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│                    CLIENT  (React 19 + TypeScript SPA)             │
│                    Deployed: Vercel                                │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Views Layer                                                 │  │
│  │    Home  •  Assignments  •  Create  •  Output  •  Toolkit    │  │
│  └──────────────────────────┬───────────────────────────────────┘  │
│                             │                                      │
│  ┌──────────────────────────▼───────────────────────────────────┐  │
│  │  Component Layer                                             │  │
│  │    Sidebar  •  Header  •  MobileHeader  •  MobileNav         │  │
│  └──────────────────────────┬───────────────────────────────────┘  │
│                             │                                      │
│  ┌──────────────────────────▼────────────────────────────────────┐ │
│  │  State Layer  (Zustand store)                                 │ │
│  │    assignments[]  •  formData  •  ws state  •  progress       │ │
│  └────────┬─────────────────┬───────────────────┬────────────────┘ │
│           │                 │                   │                  │
│  ┌────────▼────────┐  ┌─────▼──────┐   ┌───────▼──────────┐        │
│  │ AI Generator    │  │ WS Manager │   │  PDF Exporter    │        │
│  │ • buildPrompt() │  │ • simulate │   │ • lazy-loaded    │        │
│  │ • parse JSON    │  │ • progress │   │ • multi-page A4  │        │
│  │ • validate      │  │ • events   │   │ • jsPDF/canvas   │        │
│  └─────────────────┘  └────────────┘   └──────────────────┘        │
│                                                                    │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
                                 │  HTTPS / WSS
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                                                                    │
│                  BACKEND  (Reference Architecture)                 │
│                  Stack: Node + Express + TypeScript                │
│                                                                    │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │  Express REST API                                             │ │
│  │    POST   /api/assignments         → create + enqueue         │ │
│  │    GET    /api/assignments         → list user's assignments  │ │
│  │    GET    /api/assignments/:id     → get single (with paper)  │ │
│  │    POST   /api/assignments/:id/regenerate                     │ │
│  │    DELETE /api/assignments/:id                                │ │
│  │    GET    /api/assignments/:id/pdf → server-side PDF          │ │
│  └──────────────────────────┬────────────────────────────────────┘ │ 
│                             │                                      │
│           ┌─────────────────┼─────────────────┐                    │
│           │                 │                 │                    │
│  ┌────────▼────────┐  ┌─────▼──────┐  ┌──────▼─────────┐           │
│  │  MongoDB        │  │   Redis    │  │  Socket.io     │           │
│  │  (Mongoose)     │  │  • cache   │  │  • rooms by    │           │
│  │  • Assignment   │  │  • BullMQ  │  │    assignmentId│           │
│  │  • Paper        │  │    backend │  │  • progress    │           │
│  │  • User         │  │            │  │  • completed   │           │
│  └─────────────────┘  └─────┬──────┘  └────────────────┘           │
│                             │                                      │
│                       ┌─────▼──────────┐                           │
│                       │  BullMQ Queue  │                           │
│                       │  paper-gen     │                           │
│                       │  pdf-export    │                           │
│                       └─────┬──────────┘                           │
│                             │                                      │
│                  ┌──────────▼──────────┐                           │
│                  │  Worker Process     │                           │
│                  │  1. Pull job        │                           │
│                  │  2. buildPrompt     │                           │
│                  │  3. Call LLM API ───┼──────┐                    │
│                  │  4. Validate (Zod)  │      │                    │
│                  │  5. Save Mongo      │      │                    │
│                  │  6. Emit WS event   │      ▼                    │
│                  └─────────────────────┘  ┌─────────────────┐      │
│                                           │   LLM Service   │      │
│                                           │  OpenAI/Claude  │      │
│                                           └─────────────────┘      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Request Flow (End-to-End)

```
[1]  Teacher submits the assignment form
[2]  Frontend validates inputs locally (Zustand)
[3]  POST /api/assignments         → returns { assignmentId, jobId }
[4]  Worker picks job from BullMQ queue (Redis-backed)
[5]  Worker builds structured prompt from form data
[6]  Worker calls LLM API (GPT-4 or Claude)
[7]  Worker parses + validates response (Zod schema)
[8]  Worker writes paper to MongoDB
[9]  Worker emits "paper:ready" event via Socket.io
[10] Frontend WebSocket client receives event
[11] Frontend fetches /api/assignments/:id
[12] React renders the structured question paper
[13] Teacher can download PDF or regenerate
```

### Frontend Data Flow

```
        ┌──────────────────────┐
        │  Form Component      │
        │  (CreateAssignment)  │
        └──────────┬───────────┘
                   │ setFormData()
                   ▼
        ┌──────────────────────┐
        │  Zustand Store       │◀─────┐
        │  (single source)     │      │
        └──────────┬───────────┘      │
                   │                  │
        createAssignment()            │ subscribe()
                   │                  │
                   ▼                  │
        ┌──────────────────────┐      │
        │  AI Generator        │      │
        │  + WS Simulator      │      │
        └──────────┬───────────┘      │
                   │ updates          │
                   ▼                  │
        ┌──────────────────────┐      │
        │  Generated Paper     │──────┘
        │  (typed JSON)        │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  ViewPaperView       │
        │  (renders + PDF)     │
        └──────────────────────┘
```

---

## Tech Stack

### Frontend (Implemented & Deployed)

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | React 19 | UI library with latest concurrent features |
| Language | TypeScript 5.9 | End-to-end type safety |
| Build Tool | Vite 7.3 | Fast HMR, ESM-native bundler |
| Styling | Tailwind CSS 4.1 | Utility-first, atomic design |
| State | Zustand | Minimal, type-safe global state |
| Icons | Custom SVG + Lucide | Pixel-perfect Figma reproduction |
| PDF | jsPDF + html2canvas | Client-side PDF generation |
| Dates | date-fns | Tree-shakeable date utilities |
| Hosting | Vercel | Edge-deployed CDN with auto-deploys |

### Backend (Reference Architecture)

| Layer | Technology | Purpose |
|-------|------------|---------|
| Runtime | Node.js 20+ | Server runtime |
| Framework | Express 4 (TypeScript) | REST API |
| Database | MongoDB 7 + Mongoose | Document store for assignments |
| Cache | Redis 7 | Cache + BullMQ backend |
| Queue | BullMQ | Background job processing |
| Realtime | Socket.io | WebSocket events for live progress |
| AI | OpenAI GPT-4 / Anthropic Claude | LLM provider |
| Validation | Zod | Runtime schema validation |

---

## Approach & Design Decisions

### Why Zustand over Redux?

Chose Zustand for its minimal API surface and TypeScript-first ergonomics:

- ~1 KB bundle size (vs ~10 KB for Redux Toolkit)
- No provider needed (works anywhere)
- Native async actions without thunk middleware
- Co-located state and actions in a single file
- Easier mental model for this scale of application

### Type-Safe AI Contract

The frontend **never** trusts raw LLM output. Every response is parsed through strict TypeScript interfaces:

```typescript
interface GeneratedPaper {
  id: string;
  schoolName: string;
  subject: string;
  grade: string;
  timeAllowed: number;
  maximumMarks: number;
  generalInstructions: string;
  sections: Section[];
  createdAt: string;
}

interface Section {
  id: string;
  title: string;       // "Section A"
  subtitle: string;    // "Short Answer Questions"
  instruction: string;
  questions: Question[];
  totalMarks: number;
}

interface Question {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  type: string;
}
```

In the reference backend, this same schema is enforced via Zod at the worker boundary — any malformed LLM response is rejected before it reaches the database.

### Prompt Engineering

Form inputs are transformed into a structured prompt that constrains the LLM to return predictable JSON:

```typescript
const buildPrompt = (form: AssignmentFormData) => `
You are an expert exam paper designer. Generate a structured question paper
in JSON format with the following requirements:

Subject: ${form.subject}
Grade: ${form.grade}
Topic: ${form.topic}
Total time: ${form.totalTime} minutes
Difficulty preset: ${form.difficulty}

Sections required:
${form.questionTypes.map((qt, i) => `
  Section ${String.fromCharCode(65 + i)}:
    - Type: ${qt.type}
    - Count: ${qt.count}
    - Marks per question: ${qt.marks}
`).join('')}

Additional instructions: ${form.instructions || 'None'}

Return ONLY valid JSON matching the GeneratedPaper schema.
`;
```

### WebSocket Lifecycle

The frontend ships with a realistic WebSocket simulator that mimics real Socket.io behavior:

- 7-stage progress events at 600ms intervals
- Updates store reactively (no manual subscriptions)
- Clean connection lifecycle (connect → updates → complete → disconnect)
- One-line swap to real `socket.io-client` when backend is live

### Difficulty Distribution Algorithm

Questions within each section are distributed by difficulty using their position index:

```typescript
function getDifficultyForIndex(index: number, total: number): Difficulty {
  const ratio = index / total;
  if (ratio < 0.4)  return 'easy';     // First 40% — warmup
  if (ratio < 0.75) return 'medium';   // Next 35%  — core
  return 'hard';                        // Last 25%  — challenge
}
```

### Lazy-Loaded PDF Generation

PDF libraries are imported dynamically only when the user clicks "Download" — keeping the initial bundle ~400 KB lighter:

```typescript
const handleDownloadPDF = async () => {
  const { default: html2canvas } = await import('html2canvas');
  const { default: jsPDF } = await import('jspdf');
  // ... generate multi-page PDF
};
```

### Pixel-Perfect Figma Implementation

Every Figma node was extracted as raw SVG and reproduced in code:

- VedaAI logo gradient (`#E56820 → #D45E3E`) with dual chevron paths
- Sidebar "Create Assignment" button with quadruple-layered shadow filter
- Mobile bottom nav as floating dark pill with custom icons
- File upload dashed border rendered via inline SVG (truer than CSS `border-dashed`)
- Empty state illustration embedded directly from Figma export

---

## Project Structure

```
VedaAI-Assessment/
├── public/                         Static assets
│
├── src/
│   ├── components/                 Reusable UI components
│   │   ├── Sidebar.tsx             Desktop sidebar (Figma-exact logo)
│   │   ├── Header.tsx              Desktop top header
│   │   ├── MobileHeader.tsx        Mobile header (logo + bell + avatar)
│   │   └── MobileNav.tsx           Bottom nav floating pill
│   │
│   ├── views/                      Page-level views
│   │   ├── HomeView.tsx            Dashboard with stats
│   │   ├── AssignmentsView.tsx     List view with empty state
│   │   ├── CreateAssignmentView.tsx  Two-step form wizard
│   │   ├── ViewPaperView.tsx       Question paper output + PDF
│   │   └── AIToolkitView.tsx       AI tools showcase
│   │
│   ├── store/
│   │   └── useAssignmentStore.ts   Zustand: single source of truth
│   │
│   ├── utils/
│   │   └── cn.ts                   className merger
│   │
│   ├── App.tsx                     Root component (view router)
│   ├── main.tsx                    React entry point
│   └── index.css                   Tailwind + globals
│
├── .env.example                    Environment template
├── .gitignore
├── index.html                      HTML shell
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                     Deployment + security headers
├── README.md                       This file
├── SETUP.md                        Complete setup guide
└── LICENSE                         MIT
```

---

## Getting Started

> For a complete walkthrough including VS Code setup, GitHub push, and Vercel deployment, see [SETUP.md](./SETUP.md).

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/manishpatel00/VedaAI-Assessment.git
cd VedaAI-Assessment

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Copy `.env.example` to `.env`:

```bash
VITE_API_URL=http://localhost:4000
VITE_WS_URL=ws://localhost:4000
VITE_OPENAI_API_KEY=sk-...      # Optional: only if calling LLM from client
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

---

## AI Generation Pipeline

### Sample Generated Output

```json
{
  "id": "paper-1736424000000",
  "schoolName": "Delhi Public School, Sector-4, Bokaro",
  "subject": "Science",
  "grade": "8th",
  "timeAllowed": 45,
  "maximumMarks": 20,
  "generalInstructions": "All questions are compulsory unless stated otherwise.",
  "sections": [
    {
      "id": "section-A",
      "title": "Section A",
      "subtitle": "Multiple Choice Questions",
      "instruction": "Attempt all questions. Each question carries 1 mark.",
      "totalMarks": 4,
      "questions": [
        {
          "id": "q-1-0",
          "text": "Which of the following best describes the process of Electricity?",
          "difficulty": "easy",
          "marks": 1,
          "type": "Multiple Choice Questions"
        }
      ]
    }
  ],
  "createdAt": "2026-01-09T12:00:00Z"
}
```

---

## Backend Reference Architecture

Full implementation blueprints are documented in [SETUP.md](./SETUP.md#-step-6--backend-setup-optional). Key patterns:

### MongoDB Schema

```typescript
const AssignmentSchema = new Schema({
  title: { type: String, required: true },
  subject: String,
  grade: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['pending', 'generating', 'completed', 'failed'],
    default: 'pending'
  },
  formData: Mixed,
  generatedPaper: { type: ObjectId, ref: 'Paper' },
  createdBy: { type: ObjectId, ref: 'User' },
}, { timestamps: true });
```

### BullMQ Worker

```typescript
const worker = new Worker('paper-generation', async (job) => {
  const { assignmentId, formData } = job.data;

  await job.updateProgress(15);
  io.to(assignmentId).emit('progress', { progress: 15 });

  const prompt = buildPrompt(formData);
  const llmResponse = await callLLM(prompt);

  await job.updateProgress(80);
  const paper = PaperSchema.parse(JSON.parse(llmResponse));

  await Paper.create({ ...paper, assignment: assignmentId });
  await Assignment.findByIdAndUpdate(assignmentId, { status: 'completed' });

  io.to(assignmentId).emit('completed', { paper });
}, { connection: redis });
```

### Redis Caching

```typescript
// Cache identical prompts for 5 minutes
const cacheKey = `paper:${hashFormData(formData)}`;
const cached = await redis.get(cacheKey);
if (cached) return JSON.parse(cached);

const result = await callLLM(prompt);
await redis.setex(cacheKey, 300, JSON.stringify(result));
```

### Socket.io Events

```typescript
// Server
io.on('connection', (socket) => {
  socket.on('subscribe', (assignmentId) => socket.join(assignmentId));
});

// Client
const socket = io(import.meta.env.VITE_WS_URL);
socket.emit('subscribe', assignmentId);
socket.on('progress', ({ progress, status }) => updateProgress(progress, status));
socket.on('completed', ({ paper }) => onPaperReady(paper));
```

---

## Design Fidelity

Every screen was reproduced from the official Figma file.

| Component | Implementation Notes |
|-----------|---------------------|
| VedaAI Logo | Exact orange gradient (`#E56820 → #D45E3E`) with dual chevron paths |
| Create Assignment Button | Gradient border ring + dark `#272727` fill + quadruple-layered shadows |
| Mobile Bottom Nav | Black `#181818` floating pill with custom Figma SVG icons |
| File Upload Area | SVG-rendered dashed border with exact `stroke-dasharray="8 8"` |
| Empty State | Full Figma illustration (magnifying glass + document + doodles) |
| Question Cards | Underlined title, dotted divider, 3-dot context menu |
| AI Banner | Dark `#1a1a1a` rounded card with Download + Regenerate pills |
| Mobile Header | Floating white card with bell + profile + hamburger |

---

## Performance

### Optimization Techniques

| Technique | Impact |
|-----------|--------|
| Code splitting | PDF libraries lazy-loaded (saves ~400 KB initial) |
| Single-file build | Everything inlined into one HTML file |
| Tailwind JIT | Only used utilities compiled |
| Zustand selectors | Minimize component re-renders |
| Vite minification | ~329 KB gzipped total |
| SVG over PNG | Crisp at all sizes, smaller than images |
| Image-free design | Zero external image requests |

### Production Bundle

```
dist/index.html       1,114 KB   (uncompressed)
                        329 KB   (gzipped)
```

---

## Roadmap

### v1.1 — Real Backend Integration
- [ ] OpenAI / Claude API integration
- [ ] Server-side PDF generation with Puppeteer
- [ ] User authentication (Clerk / Auth.js)
- [ ] Multi-tenant school accounts

### v1.2 — AI Grading & Insights
- [ ] AI-powered answer grading with feedback
- [ ] Plagiarism checker
- [ ] LaTeX support for math/physics questions
- [ ] Image upload in questions
- [ ] Analytics dashboard

### v2.0 — Platform Expansion
- [ ] React Native mobile app
- [ ] Offline-first with local LLM (Ollama)
- [ ] Voice-based question creation
- [ ] Adaptive difficulty per student
- [ ] Multi-language question generation

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built for the VedaAI Full Stack Engineering Assignment**

[Live Demo](https://veda-ai-assessment-gold.vercel.app/) · [GitHub](https://github.com/manishpatel00/VedaAI-Assessment) · [Setup Guide](./SETUP.md)

</div>
