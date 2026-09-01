import type { Metadata } from "next";
import MenuList from "@/components/MenuList";
import { MENU, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Menu", description: "Browse Famous Pizza menu items and current prices at 1 E 28th St in Manhattan." };
export default function MenuPage() {
  return <>
    <section className="page-hero compact-hero"><div className="shell page-hero-grid"><div><div className="eyebrow">FAMOUS PIZZA MENU</div><h1>Browse now.<br/>Order when ready.</h1><p>Clean, readable menu first. No fake checkout and no misleading product cards.</p></div><div className="page-hero-actions"><a className="button button-red" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online on Slice ↗</a><span>Prices shown from the current online menu and can change.</span></div></div></section>
    <section className="section menu-page"><div className="shell menu-layout">
      <aside className="menu-aside"><div className="menu-aside-inner"><div className="footer-label">Jump to</div><a href="#specials">Deals & specials</a><a href="#pizza">Pizza</a><a href="#specialty">Specialty pizza</a><a href="#appetizers">Appetizers</a><a href="#beverages">Beverages</a><a className="button button-red aside-order" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online ↗</a></div></aside>
      <div className="menu-content"><div id="specials"><MenuList title="Deals & Specials" eyebrow="ONLINE DEALS" items={MENU.specials}/></div><div id="pizza"><MenuList title="Pizza" items={MENU.pizza}/></div><div id="specialty"><MenuList title="Specialty Pizza" items={MENU.specialty}/></div><div id="appetizers"><MenuList title="Appetizers" items={MENU.appetizers}/></div><div id="beverages"><MenuList title="Beverages" items={MENU.beverages}/></div><div className="menu-end"><h2>Ready to order?</h2><p>Ordering opens Famous Pizza’s verified Slice page in a new tab.</p><a className="button button-red" href={SITE.orderUrl} target="_blank" rel="noreferrer">Order Online on Slice ↗</a></div></div>
    </div></section>
  </>;
}
