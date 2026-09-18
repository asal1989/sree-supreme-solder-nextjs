"use client";

import { trackEvent } from "@/lib/analytics";

export default function TrackedLink({
  eventName,
  eventParams,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  eventName: string;
  eventParams?: Record<string, string>;
}) {
  return (
    <a {...props} onClick={() => trackEvent(eventName, eventParams)}>
      {children}
    </a>
  );
}
