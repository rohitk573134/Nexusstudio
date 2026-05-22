# Naidu Andaman Travels — Premium Website (Next.js)

## Stack
- Next.js 14 (App Router)
- React + Tailwind CSS
- Framer Motion
- Prisma + PostgreSQL

## Setup
```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

## Features Delivered
- Cinematic luxury homepage with conversion CTAs
- Services and featured package sections
- Sticky WhatsApp CTA + phone CTAs (`+91 96795 73134`)
- Admin dashboard scaffold for managing content modules
- API routes for packages and inquiries
- Prisma models for packages, inquiries, admin users
- SEO essentials: metadata, OpenGraph, sitemap, robots

## Next Implementation Steps
- Add authentication (NextAuth or custom JWT) for `/admin`
- Connect every admin module to dedicated CRUD APIs
- Integrate Cloudinary upload widget for gallery/media management
- Add analytics dashboard widgets and inquiry pipeline status tracking


## Agency Agents Workflow
This project uses an **agency-agent operating model** for execution planning and delivery. See:
- `AGENCY_AGENTS_SKILL_PLAN.md`
- `WEBSITE_EXECUTION_SPEC.md`
- `AGENCY_EXECUTION_MATRIX.md`

These documents map strategic, UX, engineering, SEO, and operations responsibilities to specialized agent roles.

