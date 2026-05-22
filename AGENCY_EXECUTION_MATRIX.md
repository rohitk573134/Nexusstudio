# Agency Agents Execution Matrix — Naidu Andaman Travels

This matrix operationalizes the `msitarzewski/agency-agents` approach directly in delivery.

## Discovery & Strategy
- **Product Manager**: goals, sitemap, KPI definitions
- **Behavioral Nudge Engine**: trust and CTA psychology map
- **Trend Researcher**: competitor benchmarking and offer positioning

## Brand, UX & UI
- **Brand Guardian**: visual language and voice consistency
- **UX Architect**: page flows, conversion paths, and IA
- **UI Designer**: luxury component library and visual polish
- **Visual Storyteller**: destination storytelling content blocks

## Engineering
- **Frontend Developer**: Next.js app shell, responsive sections, animations
- **Backend Architect**: API design and data contracts
- **CMS Developer**: admin module structure and content models
- **Security Engineer**: validation and secure-by-default API handling
- **Code Reviewer**: code quality and maintainability checks

## Growth & Marketing
- **SEO Specialist**: metadata, schema, sitemap/robots strategy
- **Content Creator**: package copy and traveler intent messaging
- **Instagram Curator**: social-to-landing-page continuity
- **Growth Hacker**: experimentation backlog and CRO priorities
- **Tracking Specialist**: event plan and conversion analytics definitions

## Operations
- **Studio Producer**: project sequencing and milestone governance
- **Experiment Tracker**: post-launch testing cadence
- **Incident Response Commander**: launch-day contingency planning

## How this maps to current codebase
- Marketing UX and premium visual structure are implemented in `src/components/site.tsx`.
- SEO baseline is implemented in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `public/robots.txt`.
- Backend and data foundations are implemented in `src/app/api/*` and `prisma/schema.prisma`.
- Admin control surface scaffold is implemented in `src/app/admin/page.tsx`.
