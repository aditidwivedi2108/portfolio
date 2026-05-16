"use client";

import { useEffect, useRef, useState } from "react";

export function SkillsCluster({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`skills-cluster flex flex-wrap content-start items-start gap-[12px_10px] py-[8px] overflow-hidden w-full${inView ? " in-view" : ""}`}
    >
      {children}
    </div>
  );
}
