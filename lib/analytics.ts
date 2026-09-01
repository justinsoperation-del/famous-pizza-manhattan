/**
 * Analytics event abstraction.
 *
 * Inactive by default: if NEXT_PUBLIC_ANALYTICS_ID is not set, trackEvent
 * is a guaranteed no-op — nothing is collected, queued, or transmitted.
 *
 * Once configured, it pushes a plain event object to `window.dataLayer`,
 * the same queue GA4's gtag.js reads from. This is a real, working
 * dispatch — not just a comment — but it still does nothing until BOTH:
 *   (a) NEXT_PUBLIC_ANALYTICS_ID is set, AND
 *   (b) the provider's script is actually loaded in app/layout.tsx.
 *
 * -----------------------------------------------------------------------
 * HOW TO ACTIVATE (only after the owner approves a provider):
 *
 * 1. Choose a provider (GA4 or Plausible) and obtain its ID/domain.
 * 2. Set NEXT_PUBLIC_ANALYTICS_ID in the deploy environment (never
 *    hardcode it in source).
 * 3. In app/layout.tsx, conditionally load the provider's script tag,
 *    guarded by the same env var check used here, so nothing is injected
 *    in an unconfigured build.
 *      - GA4: load https://www.googletagmanager.com/gtag/js?id=<ID> and
 *        initialize gtag() against window.dataLayer (already populated by
 *        this file).
 *      - Plausible: swap the dataLayer.push call below for
 *        window.plausible?.(event, { props: params }) instead, and load
 *        the Plausible script tag with the site's domain.
 *
 * IMPORTANT: this layer can only ever report on-site *interactions*
 * (button clicks, nav clicks). It cannot and does not report completed
 * Slice orders or revenue — that lives in Slice's own merchant reporting,
 * a separate, owner-controlled access grant.
 * -----------------------------------------------------------------------
 */

export type AnalyticsEvent =
  | "order_online_click"
  | "call_click"
  | "directions_click"
  | "menu_view"
  | "menu_item_click"
  | "navigation_click";

type AnalyticsParams = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function getAnalyticsId(): string | undefined {
  // Only ever read from an environment variable. Never hardcode a
  // provider ID or key directly in this file.
  return process.env.NEXT_PUBLIC_ANALYTICS_ID;
}

export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const analyticsId = getAnalyticsId();
  if (!analyticsId) {
    // No provider configured — no-op by design.
    return;
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    // Never let analytics failures affect the customer experience.
  }
}
