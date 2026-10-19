# Ascendant Talent

Talent-sourcing research and career-opportunity platform for Ascendant Groups.

## Status: foundation only (not deployable yet)
Done: architecture and design plan (`docs/ARCHITECTURE.md`), database schema (`prisma/schema.prisma`), publication-eligibility rules with tests (`src/lib/publication.ts`), `.env.example`.
Not yet built: pages/routes (`src/app`), authentication, directory, enquiry forms, admin dashboard, email, storage, SEO, end-to-end tests.
A Vercel deploy will fail until `src/app` exists, because there is nothing for Next.js to build.

## Local setup
1. `cp .env.example .env` and fill in `DATABASE_URL` (PostgreSQL) and `SESSION_SECRET`.
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm test`

## Deploying on Vercel (once the app exists)
1. Push this repo to GitHub and import it in Vercel (framework: Next.js).
2. Create a hosted PostgreSQL database (e.g. Neon or Supabase) and add its URL as `DATABASE_URL`.
3. Add the other variables from `.env.example` in Vercel > Settings > Environment Variables. Use separate values for Preview and Production.
4. Run `npx prisma migrate deploy` against the production database.
