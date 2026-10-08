# Skill-Sathee website

The frontend is a Next.js app in this folder. Its separate NestJS backend is in the sibling `..\backend` folder and owns the `/api/contact` endpoint and Prisma database access.

## Run locally

1. Install frontend dependencies with `npm install` in this folder.
2. Install backend dependencies with `npm install` in the sibling `..\backend` folder.
3. In `..\backend`, copy `.env.example` to `.env` and set `DATABASE_URL` to your MySQL connection string.
4. Start the NestJS API in one terminal from this folder: `npm run backend:dev` (defaults to `http://localhost:4000`).
5. Start the Next.js site in another terminal from this folder: `npm run dev` (defaults to `http://localhost:3000`).

The contact form sends requests to `${NEXT_PUBLIC_BACKEND_URL}/api/contact`; it defaults to `http://localhost:4000`. Set `FRONTEND_URL` in the backend's `.env` to the frontend origin for CORS. In production, set `NEXT_PUBLIC_BACKEND_URL` to the deployed NestJS URL and deploy the two services separately.

## Backend commands

- `npm run backend:dev` builds and starts the separate NestJS service for local development.
- `npm run backend:build` compiles the NestJS service into `..\backend\dist`.
- `npm run backend:start` starts the compiled service.
- In `..\backend`, `npm run db:deploy` applies the Prisma migrations to the configured MySQL database.
- `npm run build` builds the Next.js frontend.

Prisma schema and migrations, NestJS database integration, contact input validation, rate limiting, persistence, and optional webhook delivery live in the sibling `..\backend` folder.

## Deploy

Deploy the frontend and NestJS backend as separate Node services. Provide the required environment variables to both services and allow the frontend origin through `FRONTEND_URL`. Run Prisma migrations against the production database before serving requests.

## Before launch

- Replace placeholder clients, testimonials, case studies, and product names in `lib/data.ts` with approved content.
- Replace footer/legal placeholder links with real pages.
- The current rate limiter is in memory and applies per backend instance. Use a shared store if running multiple API instances.
