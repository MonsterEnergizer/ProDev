"use client";

import { useEffect, useState } from "react";

const HOURS: Record<number, [number, number] | null> = {
  0: null,
  1: null,
  2: [9, 18],
  3: [9, 18],
  4: [15, 21],
  5: [9, 18],
  6: [9, 17],
};

function getStatus() {
  const now = new Date();
  const day = now.getDay();
  const hours = HOURS[day];
  if (!hours) return { open: false, text: "Vandaag gesloten" };
  const value = now.getHours() + now.getMinutes() / 60;
  const [start, end] = hours;
  if (value >= start && value < end) {
    return { open: true, text: `Geopend · tot ${String(end).padStart(2, "0")}:00` };
  }
  if (value < start) {
    return { open: false, text: `Vandaag open vanaf ${String(start).padStart(2, "0")}:00` };
  }
  return { open: false, text: "Vandaag gesloten" };
}

export default function OpeningStatus() {
  const [status, setStatus] = useState({ open: false, text: "Openingstijden" });
  useEffect(() => setStatus(getStatus()), []);
  return (
    <div className={`openingStatus ${status.open ? "isOpen" : ""}`}>
      <span className="statusDot" />
      {status.text}
    </div>
  );
}
