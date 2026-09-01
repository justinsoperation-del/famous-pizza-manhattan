# Project notes — read before deploying

## What this is

A standalone, plain Next.js (App Router) project containing the Famous Pizza
Manhattan multi-page site: Home, Menu, Order, Location & Hours, and Contact,
plus sitemap.xml, robots.txt, Restaurant JSON-LD, an inert analytics layer,
and a mobile Call/Order/Directions action bar.

Verified in this exact package before zipping:
- `npm install` completed successfully
- `npm run build` completed successfully (all 5 pages + sitemap.xml +
  robots.txt statically prerendered)
- `npm run start` served real HTTP responses on `/`, `/menu`, `/contact`,
  and `/robots.txt`, checked with `curl`

## What changed from the original project source, and why

The original project was scaffolded for a specific hosting platform
("ChatGPT Sites") running on Cloudflare Workers via a framework called
`vinext`. That original `package.json` had `build`/`dev` scripts that called
`scripts/build-verified.sh`, `scripts/sites-env.sh`, and `vite.config.ts`
imported `./.openai/hosting.json` and `./build/sites-vite-plugin`.

**None of those files' contents were ever provided** — only their existence
was referenced in the original source. They appear to be injected
automatically by that hosting platform at deploy time. Because of that, this
package does **not** include:

- `worker/index.ts`, `app/chatgpt-auth.ts`, `vite.config.ts` — all
  Cloudflare Workers/ChatGPT-sign-in specific, and non-functional outside
  that platform's infrastructure.
- The `vendor/shadcn-tailwind-4.13.0.css` stylesheet import (never provided,
  and unused — no page in this project uses shadcn/ui components).
- The large shadcn/Radix/Drizzle/Cloudflare dependency list from the
  original `package.json` — none of it is imported anywhere in this
  project's actual pages, so it was dropped rather than left as unused
  dead weight.

Instead, `package.json`, `next.config.ts`, and `tsconfig.json` here are a
plain, standard Next.js 16 setup with real `next dev` / `next build` /
`next start` scripts — the same three you'd get from `create-next-app`.

## Known open items (carried over from earlier review, not fixed by packaging)

- `lib/site.ts`'s `SITE_ORIGIN` currently points at the site's live
  *preview* URL, not a final branded domain — none has been approved yet.
  Update it once one is, and `sitemap.ts`/`robots.ts` regenerate
  automatically.
- Weekly hours are intentionally **not** hardcoded anywhere (Location &
  Hours, Contact, and JSON-LD all link out to the live Slice listing
  instead) because the owner has not confirmed a schedule.
- Menu prices/descriptions/badges were carried over from the site's
  existing content, not independently re-verified against the live Slice
  listing — see the comments in `lib/site.ts`.
- Analytics (`lib/analytics.ts`) is a real, working event dispatcher that
  is inert until `NEXT_PUBLIC_ANALYTICS_ID` is set — see that file's
  header comment for exact activation steps.
