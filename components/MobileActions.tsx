import { SITE } from "@/lib/site";
export default function MobileActions() {
  return <div className="mobile-actions">
    <a href={SITE.tel}><span>☎</span>Call</a>
    <a className="mobile-order" href={SITE.orderUrl} target="_blank" rel="noreferrer"><span>🍕</span>Order</a>
    <a href={SITE.directionsUrl} target="_blank" rel="noreferrer"><span>↗</span>Directions</a>
  </div>;
}
