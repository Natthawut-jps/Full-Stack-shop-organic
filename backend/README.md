# API-ShopOrganic Backend (NestJS + legacy Express routes)

## Setup

1. Install dependencies: `npm install`
2. Configure `.env.local` (same keys as legacy backend)
3. Build: `npm run build`
4. Run development: `npm run dev`
5. Run production: `npm run start`

> Note: Existing Express routes are mounted through a NestJS bootstrap (`src/main.ts`) to support incremental migration.
