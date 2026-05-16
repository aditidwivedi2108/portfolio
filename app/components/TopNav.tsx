"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/#works", label: "Work", isActive: (p: string) => p === "/" },
  { href: "/archives", label: "Archives", isActive: (p: string) => p === "/archives" },
  { href: "/about", label: "About", isActive: (p: string) => p === "/about" },
  { href: "/resume.pdf", label: "Resume", external: true, isActive: () => false },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Track scroll position for header blur intensification
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`top-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="top-nav-blur" aria-hidden="true" />
        <div className="top-nav-bar">
          <a href="/" className="top-nav-logo">
            Aditi
          </a>

          <nav className="hidden lg:flex items-center gap-[16px]" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = item.isActive(pathname || "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "is-active" : ""}`}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            className="flex lg:hidden items-center justify-center size-[36px] bg-transparent border-0 cursor-pointer"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#dba80e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={`mobile-nav-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="drawer-header">
          <span className="drawer-logo">Aditi</span>
          <button
            className="drawer-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile primary">
          {NAV_ITEMS.map((item, i) => {
            const active = item.isActive(pathname || "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`drawer-link${active ? " is-active" : ""}`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span className="drawer-link-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </nav>

        <div className="drawer-foot">
          <span className="drawer-foot-line">Designed in Delhi</span>
          <span className="drawer-foot-line">aditidwivedi.com</span>
        </div>
      </aside>
    </>
  );
}
