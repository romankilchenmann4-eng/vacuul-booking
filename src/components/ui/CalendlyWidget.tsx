"use client";

import { useState, useEffect, useCallback } from "react";
import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const open = useCallback(() => {
    setIframeLoaded(false);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Ensure mounted state for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Expose open/close globally so any button can trigger it
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__calendlyOpen = open;
    (window as unknown as Record<string, unknown>).__calendlyClose = close;
    return () => {
      delete (window as unknown as Record<string, unknown>).__calendlyOpen;
      delete (window as unknown as Record<string, unknown>).__calendlyClose;
    };
  }, [open, close]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* PiP container */}
      <div className="relative z-10 w-full max-w-2xl h-[85vh] sm:h-[80vh] mx-auto mt-auto sm:my-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-[#122340] shadow-2xl overflow-hidden flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-vacuul-blue/10 dark:border-white/10 bg-vacuul-bg dark:bg-[#0A1628]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-vacuul-accent flex items-center justify-center text-white text-xs font-bold">
              V
            </div>
            <div>
              <p className="text-sm font-semibold text-vacuul-blue dark:text-white">
                Beratung buchen
              </p>
              <p className="text-xs text-vacuul-muted dark:text-white/50">
                Vacuul – Vacuum Palm Cooling
              </p>
            </div>
          </div>
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-vacuul-blue/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Schliessen"
          >
            <svg
              className="w-5 h-5 text-vacuul-blue dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Calendly iframe */}
        <div className="flex-1 relative">
          {isOpen && (
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=002776&primary_color=FF6319`}
              title="Calendly – Beratung buchen"
              className="absolute inset-0 w-full h-full border-0"
              allow="clipboard-write"
              onLoad={() => setIframeLoaded(true)}
            />
          )}
          {/* Loading skeleton – hidden once iframe finishes loading */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-[#122340]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-3 border-vacuul-accent border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-vacuul-muted dark:text-white/50">
                  Kalender wird geladen…
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}