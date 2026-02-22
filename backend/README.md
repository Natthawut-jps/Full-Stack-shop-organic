# API-ShopOrganic Backend (NestJS + TypeORM)

## Architecture

- `src/main.ts` boots Nest app
- `src/auth/*` provides Nest JWT strategies + guards
- `src/database/*` configures TypeORM connection via DI
- `src/public-catalog/*` and `src/public-access/*` are Nest Controller/Service/Module domains with TypeORM entities
- `model/*` and `model/admin/*` are now TypeORM entity-class definitions (legacy Sequelize definitions removed)
- `src/legacy-bridge/*` keeps non-migrated route handlers reachable via Nest controllers

## Setup

1. `npm install`
2. Configure `.env.local`
3. `npm run build`
4. `npm run dev`
5. `npm run start`
