"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Famous Pizza home" onClick={() => setOpen(false)}>
          <span className="brand-mark">F</span>
          <span className="brand-copy"><strong>FAMOUS</strong><small>PIZZA · MANHATTAN</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="button button-red header-order" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online ↗</a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          <div className="shell mobile-menu-inner">
            {NAV.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <a className="button button-red" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}
