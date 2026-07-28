# AEIM Wealth Management

A premium wealth management website built with React 19, Vite, and Tailwind CSS 4.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy on Vercel

1. Import this repository into Vercel
2. Framework preset: **Vite**
3. Build command: `pnpm build` (auto-detected)
4. Output directory: `dist/public` (auto-detected)
5. Deploy

The `vercel.json` file handles SPA routing rewrites so all client-side routes work correctly.

## Project Structure

```
client/
  public/
    images/       ← All images served statically
  src/
    pages/        ← 18 page components
    components/   ← Reusable UI + shared components
    lib/          ← Site data, SEO helpers, utilities
    index.css     ← Design tokens (navy/gold palette)
    App.tsx       ← Routes & top-level layout
```

## Tech Stack

- React 19 + Wouter (client-side routing)
- Vite 7 (build tool)
- Tailwind CSS 4 (styling)
- shadcn/ui (component primitives)
- Framer Motion (animations)
