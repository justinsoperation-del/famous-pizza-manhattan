import Link from "next/link";
import { MENU, SITE } from "@/lib/site";

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">MIDTOWN MANHATTAN · OPEN LATE</div>
          <h1>New York pizza,<br/><em>without the runaround.</em></h1>
          <p className="hero-lede">Famous Pizza on E 28th St. Browse a clean menu, order online, call the shop, or get directions in a couple taps.</p>
          <div className="hero-meta"><span>{SITE.rating} ★ on Google</span><span>•</span><span>{SITE.shortAddress}</span></div>
          <div className="button-row">
            <a className="button button-red" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online ↗</a>
            <Link className="button button-outline" href="/menu">View Menu</Link>
          </div>
          <p className="fine-print">Online ordering is securely handled by Slice.</p>
        </div>
        <div className="hero-media">
          <img src={SITE.heroImage} alt="Famous Pizza cheese pizza" />
          <div className="hero-stamp"><b>NYC</b><span>PIZZA</span></div>
        </div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="shell split-heading"><div><div className="eyebrow eyebrow-light">QUICK & SIMPLE</div><h2>Pizza when you want it.</h2></div><p>One website for the essentials—menu, ordering, phone, directions, and location information.</p></div>
      <div className="shell feature-grid">
        <article className="feature-card"><span>01</span><h3>Browse first</h3><p>See prices and popular choices without entering an ordering checkout.</p><Link href="/menu">Browse menu →</Link></article>
        <article className="feature-card"><span>02</span><h3>Order when ready</h3><p>One clear button opens Famous Pizza’s verified Slice ordering page.</p><a href={SITE.orderUrl} target="_blank" rel="noreferrer">Order online →</a></article>
        <article className="feature-card"><span>03</span><h3>Find the shop</h3><p>Call or get directions to the correct Midtown location at 1 E 28th St.</p><Link href="/location-hours">Location & hours →</Link></article>
      </div>
    </section>

    <section className="section">
      <div className="shell menu-preview-head"><div><div className="eyebrow">CURRENT FAVORITES</div><h2>Start with the classics.</h2></div><Link href="/menu" className="text-link">See full menu →</Link></div>
      <div className="shell preview-list">
        {[MENU.pizza[0], MENU.specialty[0], MENU.appetizers[0]].map((item, i) => <article className="preview-row" key={item.name}><span className="preview-number">0{i+1}</span><div><h3>{item.name}</h3><p>{item.desc}</p></div><strong>{item.price}</strong></article>)}
      </div>
      <div className="shell center-cta"><a className="button button-red" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online on Slice ↗</a></div>
    </section>

    <section className="section location-band">
      <div className="shell location-band-grid"><div><div className="eyebrow">E 28TH STREET</div><h2>Right in Midtown.</h2><p>One block from Madison Square Park. Dine in, grab takeout, or order online.</p></div><div className="location-card"><strong>{SITE.address}</strong><a href={SITE.tel}>{SITE.phone}</a><div className="button-row"><a className="button button-dark" href={SITE.directionsUrl} target="_blank" rel="noreferrer">Get Directions ↗</a><a className="button button-outline" href={SITE.tel}>Call Now</a></div></div></div>
    </section>
  </>;
}
