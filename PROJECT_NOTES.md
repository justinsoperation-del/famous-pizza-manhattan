# Project notes — read before deploying

## Fix pass (this update)

Customer-facing issues fixed, no architecture changes:

1. **Menu visual glitch** — root cause: every internal link (header nav,
   mobile drawer, logo, inline text links) rendered as a plain `<a>` tag,
   so every navigation — including clicking Menu — forced a full browser
   page reload. The whole header/footer/mobile bar unmounted and
   remounted from scratch on every click, which read as a layout flash,
   most visible on Menu because it has the most content reflowing back in
   (two-column sticky layout, extra food grid). Fixed by routing all
   internal navigation through `next/link`'s `<Link>` for real
   client-side transitions, while external links (tel:, the Slice
   ordering URL, Google Maps) correctly remain plain `<a>` tags. Verified
   by rebuilding, starting the production server, and confirming
   Next's client-router JS chunks are present and every route still
   returns 200.
2. **Home navigation** — the logo already linked to `/`; it now does so
   via `Link` instead of a plain `<a>`, removing the reload glitch there
   too. "Home" was already the first item in both the desktop nav and the
   mobile drawer.
3. **Bad/inconsistent images** — the hero image was requesting a
   distorted 900×1000 crop of a photo that's otherwise consistently
   served at a clean 720×720 crop elsewhere on the site; it now requests
   the same proven square crop (scaled to 1200×1200) instead. The one
   item without a verified photo (Extra Cheese Pizza) no longer uses an
   apologetic dashed-border "photo coming soon" placeholder — it's now a
   clean, intentional solid-panel text card that reads as a deliberate
   design choice, not a missing image.
4. **Ordering flow** — verified Home → Menu → Order Online already goes
   directly to the verified Slice URL at every step; the Order page
   already explained that Slice handles ordering and showed Order
   Online / Call / Directions, so no changes were needed there.
5. **Mobile QA** — removed a confirmed-dead block of CSS left over from
   the single-page version of this site (a hand-drawn CSS map, a
   promotional strip, a circular hero badge, and related unused
   selectors) that no page actually renders anymore. This was verified
   dead via an automated scan comparing every CSS class against every
   page/component file before removal — nothing dropped was in use.
6. **Verification performed**: real `npm run build` (all 5 pages +
   sitemap.xml + robots.txt statically prerendered, TypeScript clean),
   then `npm run start` with `curl` checks confirming all 5 routes
   return 200, the logo links to `/` on every page, the Order page's
   Order/Call/Directions links point at the correct verified
   destinations, and no broken or placeholder `<img>` markup remains.

Note: this sandbox has no headless browser available, so no pixel-level
visual/screenshot testing was possible — verification here is real
build output, real HTTP responses, and code-level review, not a visual
QA pass. A manual click-through on real devices is still worth doing
before presenting this as final.

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
