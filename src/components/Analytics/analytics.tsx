"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { analytics } from "@utils/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    analytics.page();
  }, [pathname, searchParams]);

  return null;
}
