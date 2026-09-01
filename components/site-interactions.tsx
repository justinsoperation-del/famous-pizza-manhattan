"use client";

import { useEffect, useRef, useState } from "react";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { Phone, ShoppingBag, MapPin } from "lucide-react";
import { BUSINESS, SITE_NAV_LINKS } from "@/lib/site";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

/* ---------------------------------------------------------------------- */
/* TrackedLink — a plain anchor that fires one analytics event on click.  */
/* ---------------------------------------------------------------------- */

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  eventParams?: Record<string, string>;
};

export function TrackedLink(props: TrackedLinkProps) {
  const { event, eventParams, onClick, children, ...rest } = props;

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackEvent(event, eventParams);
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}

/* ---------------------------------------------------------------------- */
/* OrderButton — styled TrackedLink pinned to the verified Slice URL.     */
/* ---------------------------------------------------------------------- */

export function OrderButton(props: {
  className?: string;
  location: string;
  children?: React.ReactNode;
}) {
  const className = props.className ?? "";
  const label = props.children ?? "Order Online";

  return (
    <TrackedLink
      className={"button button-primary " + className}
      href={BUSINESS.orderUrl}
      event="order_online_click"
      eventParams={{ location: props.location }}
    >
      {label} <span aria-hidden="true">↗</span>
    </TrackedLink>
  );
}

/* ---------------------------------------------------------------------- */
/* MobileNav — accessible hamburger + drawer with a real Tab focus trap.  */
/* ---------------------------------------------------------------------- */

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const panelId = "mobile-nav-panel";

  function closeAndReturnFocus() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeAndReturnFocus();
        return;
      }

      if (e.key !== "Tab" || focusables.length === 0) return;

      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleLinkClick(event: "menu_view" | "navigation_click", label: string) {
    trackEvent(event, { source: "mobile_nav", target: label });
    setOpen(false);
  }

  return (
    <div className="mobile-nav">
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mobile-nav-toggle-bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="mobile-nav-overlay"
            aria-label="Close menu"
            onClick={closeAndReturnFocus}
            tabIndex={-1}
          ></button>
          <nav
            id={panelId}
            ref={panelRef}
            className="mobile-nav-panel"
            aria-label="Mobile navigation"
          >
            {SITE_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.event, link.label)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* MobileActionBar — persistent Call / Order / Directions bar.           */
/* ---------------------------------------------------------------------- */

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <a
        href={BUSINESS.phoneHref}
        onClick={() => trackEvent("call_click", { location: "mobile_bar" })}
        className="mobile-action-bar-item"
      >
        <Phone aria-hidden="true" size={20}></Phone>
        <span>Call</span>
      </a>
      <a
        href={BUSINESS.orderUrl}
        onClick={() => trackEvent("order_online_click", { location: "mobile_bar" })}
        className="mobile-action-bar-item mobile-action-bar-item-primary"
      >
        <ShoppingBag aria-hidden="true" size={20}></ShoppingBag>
        <span>Order</span>
      </a>
      <a
        href={BUSINESS.directionsUrl}
        onClick={() => trackEvent("directions_click", { location: "mobile_bar" })}
        className="mobile-action-bar-item"
      >
        <MapPin aria-hidden="true" size={20}></MapPin>
        <span>Directions</span>
      </a>
    </nav>
  );
}
