"use client";

import type { AnchorHTMLAttributes } from "react";
import { track, type AnalyticsEventName, type AnalyticsPayload } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEventName;
  payload?: AnalyticsPayload;
};

export function TrackedLink({ event, payload, onClick, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, payload);
        onClick?.(e);
      }}
    />
  );
}
