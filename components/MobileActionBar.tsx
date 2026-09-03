"use client";

import { business } from "@/lib/site-config";
import { track } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <a
        href={business.orderUrl}
        className="mab-item mab-item--primary"
        onClick={() => track("order_online_click", { source: "mobile_action_bar" })}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 3h15l-1.5 9h-13z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="9" cy="19" r="1.5" fill="currentColor"/><circle cx="17" cy="19" r="1.5" fill="currentColor"/><path d="M6 3 5 1H2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        <span>Order</span>
      </a>
      <a
        href={business.phone.href}
        className="mab-item"
        onClick={() => track("call_click", { source: "mobile_action_bar" })}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5c0-1 1-2 2-2h2l2 5-2 2c1 3 3 5 6 6l2-2 5 2v2c0 1-1 2-2 2C10 20 4 14 4 5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
        <span>Call</span>
      </a>
      <a
        href={business.directionsUrl}
        className="mab-item"
        onClick={() => track("directions_click", { source: "mobile_action_bar" })}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        <span>Directions</span>
      </a>
    </nav>
  );
}
