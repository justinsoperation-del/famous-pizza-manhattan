"use client";

/**
 * ANALYTICS EVENT LAYER
 *
 * This module centralizes every trackable interaction on the site. It is INACTIVE
 * by default — calling track() is always safe and never throws, even with no
 * provider configured. It currently only logs to the console in development so the
 * event wiring can be verified before a real provider is connected.
 *
 * TO ACTIVATE (do this later, not now):
 *   1. Choose a provider (GA4, Plausible, or similar).
 *   2. Set NEXT_PUBLIC_ANALYTICS_PROVIDER and NEXT_PUBLIC_ANALYTICS_ID as real
 *      environment variables in the hosting dashboard — never hard-code an ID in source.
 *   3. Implement the provider-specific send in `dispatch()` below (e.g. call
 *      window.gtag(...) for GA4, or window.plausible(...) for Plausible).
 *
 * IMPORTANT SCOPE NOTE: this layer can only observe on-site clicks (e.g. tapping
 * "Order Online"). It cannot see whether that click became a completed Slice order,
 * a delivery, or revenue — that data lives in Slice's own merchant dashboard. Do not
 * present anything from this layer as order or revenue tracking.
 */

export type AnalyticsEventName =
  | "order_online_click"
  | "menu_view"
  | "menu_item_click"
  | "call_click"
  | "directions_click"
  | "hours_click"
  | "navigation_click"
  | "device_type";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

const PROVIDER = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? null;
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? null;

export const isAnalyticsConfigured = Boolean(PROVIDER && MEASUREMENT_ID);

function dispatch(event: AnalyticsEventName, payload: AnalyticsPayload) {
  if (!isAnalyticsConfigured) return;

  try {
    // Provider-specific send goes here once configured, e.g.:
    // if (PROVIDER === "ga4" && typeof window !== "undefined" && "gtag" in window) {
    //   (window as any).gtag("event", event, payload);
    // }
    // if (PROVIDER === "plausible" && typeof window !== "undefined" && "plausible" in window) {
    //   (window as any).plausible(event, { props: payload });
    // }
  } catch {
    // Analytics must never break the customer experience.
  }
}

export function track(event: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  if (!isAnalyticsConfigured) {
    if (process.env.NODE_ENV !== "production") {
      // Dev-only visibility so the event wiring can be verified before go-live.
      // eslint-disable-next-line no-console
      console.debug("[analytics:inactive]", event, payload);
    }
    return;
  }

  dispatch(event, payload);
}

export function trackDeviceType() {
  if (typeof window === "undefined") return;
  const isMobile = window.matchMedia("(max-width: 680px)").matches;
  track("device_type", { device: isMobile ? "mobile" : "desktop" });
}
