"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-vacuul-blue/95 dark:bg-vacuul-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-bold tracking-widest text-white">
            VACUUL
          </span>
          <span className="hidden sm:inline text-sm text-vacuul-light group-hover:text-vacuul-accent transition-colors">
            Vacuum Palm Cooling
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-vacuul-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <button
            onClick={() => (window as unknown as Record<string, () => void>).__calendlyOpen?.()}
            className="bg-vacuul-accent text-vacuul-blue font-semibold text-sm px-5 py-2 rounded-lg hover:bg-vacuul-accent-hover transition-colors"
          >
            Beratung buchen
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center text-white"
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-vacuul-blue dark:bg-vacuul-dark z-40 md:hidden">
          <div className="flex flex-col items-center gap-8 pt-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white hover:text-vacuul-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMenuOpen(false); (window as unknown as Record<string, () => void>).__calendlyOpen?.(); }}
              className="bg-vacuul-accent text-vacuul-blue font-bold text-lg px-8 py-4 rounded-lg hover:bg-vacuul-accent-hover transition-colors mt-4"
            >
              Beratung buchen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}