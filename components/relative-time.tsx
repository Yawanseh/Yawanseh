"use client";

import { timeAgo } from "@/lib/time";
import { useEffect, useState } from "react";

const RelativeTime: React.FC<{ iso: string; fallback?: string }> = ({
  iso,
  fallback,
}) => {
  const [label, setLabel] = useState(fallback ?? "");

  useEffect(() => {
    setLabel(timeAgo(iso));
  }, [iso]);

  const absolute = (() => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime())
      ? undefined
      : d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  })();

  return (
    <time dateTime={iso} title={absolute} suppressHydrationWarning>
      {label}
    </time>
  );
};

export default RelativeTime;
