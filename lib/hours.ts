"use client";

import { HOURS, type DayKey } from "./business-config";

const DAY_KEYS: DayKey[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function parseTime(hhmm: string): { h: number; m: number } {
  const [h, m] = hhmm.split(":").map(Number);
  return { h, m };
}

export function getBusinessStatus(): {
  isOpen: boolean;
  label: string;
  closeTime?: string;
  openTime?: string;
} {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const dayKey = DAY_KEYS[now.getDay()];
  const dayHours = HOURS[dayKey];

  if (dayHours.closed) {
    return { isOpen: false, label: "Closed Today" };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const { h: openH, m: openM } = parseTime(dayHours.open);
  const { h: closeH, m: closeM } = parseTime(dayHours.close);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const formatAMPM = (h: number, m: number) => {
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const minutes = m === 0 ? "" : `:${String(m).padStart(2, "0")}`;
    return `${hour12}${minutes} ${period}`;
  };

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      label: `Open · Closes ${formatAMPM(closeH, closeM)}`,
      closeTime: formatAMPM(closeH, closeM),
    };
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      label: `Opens ${formatAMPM(openH, openM)}`,
      openTime: formatAMPM(openH, openM),
    };
  }

  return { isOpen: false, label: "Closed · Opens tomorrow at 7 AM" };
}
