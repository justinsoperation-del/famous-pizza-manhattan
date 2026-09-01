import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">Famous Pizza</div>
          <p>{SITE.address}</p>
          <a href={SITE.tel}>{SITE.phone}</a>
        </div>
        <div>
          <div className="footer-label">Explore</div>
          <div className="footer-links">{NAV.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </div>
        <div>
          <div className="footer-label">Order & Visit</div>
          <div className="footer-links">
            <a href={SITE.orderUrl} target="_blank" rel="noreferrer">Order on Slice ↗</a>
            <a href={SITE.directionsUrl} target="_blank" rel="noreferrer">Get Directions ↗</a>
            <a href={SITE.tel}>Call {SITE.phone}</a>
          </div>
        </div>
      </div>
      <div className="shell demo-note"><strong>Demonstration website.</strong> Not the restaurant’s official website until approved. Ordering opens a third-party service; this site does not process payments or transmit orders.</div>
    </footer>
  );
}
