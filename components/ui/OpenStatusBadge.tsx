"use client";

import { useEffect, useState } from "react";
import { getBusinessStatus } from "@/lib/hours";

export default function OpenStatusBadge() {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getBusinessStatus());
    const interval = setInterval(() => setStatus(getBusinessStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        status.isOpen
          ? "bg-green-500/10 border border-green-500/30 text-green-400"
          : "bg-red-500/10 border border-red-500/30 text-red-400"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status.isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
        }`}
      />
      {status.label}
    </span>
  );
}
