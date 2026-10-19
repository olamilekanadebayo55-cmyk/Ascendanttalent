# Ascendant Talent

Talent-sourcing research and career-opportunity platform for Ascendant Groups.

## Status: public shell, deployable on Vercel
Built and checked: homepage, `/opportunities` (empty state), `robots.txt`, `sitemap.xml`, security headers,
fonts (self-hosted), publication rules with tests, architecture notes, database schema.
Not built yet: authentication, listings directory, enquiry forms, admin dashboard, email, storage, end-to-end tests.
The database is **not needed** for the current site; it is only needed once auth and the directory are added.

## Run locally
```
npm install
npm run dev        # http://localhost:3000
npm test           # publication rules
npm run build      # production build
```

## Deploy on Vercel
1. Upload the contents of this folder to the root of a GitHub repo (`package.json` must be at the top level).
2. In Vercel: Add New > Project > import the repo. Framework is detected as Next.js. Leave build settings at defaults.
3. Optional now: add `NEXT_PUBLIC_SITE_URL` (your live URL) under Settings > Environment Variables, then redeploy.
4. Database variables from `.env.example` are needed only when the next phases land (Neon or Supabase Postgres).

## Notes
- `prisma/schema.prisma` is kept for the next phases. `@prisma/client`, argon2, S3 and Resend packages will be added when they are used.
- Colour and type tokens are in `src/app/globals.css`. Footer and legal copy are placeholders pending client approval.
