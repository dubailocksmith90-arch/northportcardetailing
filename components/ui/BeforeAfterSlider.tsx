"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`before-after-slider relative select-none ${className}`}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      role="img"
      aria-label={`Before and after comparison: ${beforeAlt} vs ${afterAlt}`}
    >
      {/* Before image */}
      <div className="relative w-full aspect-[16/9]">
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded">BEFORE</span>
      </div>

      {/* After image clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${10000 / position}%` }}>
          <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        </div>
        <span className="absolute top-3 left-3 bg-[#00C2FF]/80 text-black text-xs font-semibold px-2 py-1 rounded">AFTER</span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#00C2FF] z-10 cursor-ew-resize"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.5)] flex items-center justify-center">
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
