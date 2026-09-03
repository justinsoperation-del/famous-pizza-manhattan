"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/site-config";
import { track } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#order", label: "Order" },
  { href: "#visit", label: "Visit" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Famous Pizza home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-word">FAMOUS</span>
          <span className="brand-sub">PIZZA · MANHATTAN</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => track("navigation_click", { target: link.href })}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a
            className="button button-primary header-order"
            href={business.orderUrl}
            onClick={() => track("order_online_click", { source: "header" })}
          >
            Order online
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`nav-toggle-bars ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="mobile-nav-scrim"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        className={`mobile-nav-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setOpen(false);
                track("navigation_click", { target: link.href, source: "mobile_drawer" });
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className="button button-primary"
            href={business.orderUrl}
            onClick={() => track("order_online_click", { source: "mobile_drawer" })}
          >
            Order online
          </a>
        </nav>
      </div>
    </header>
  );
}
