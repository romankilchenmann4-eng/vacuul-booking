import { SITE_NAME, SITE_URL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-vacuul-dark text-white/60">
      <div className="h-1 bg-gradient-to-r from-vacuul-teal to-vacuul-accent" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg tracking-widest mb-2">
              {SITE_NAME.toUpperCase()}
            </p>
            <p className="text-sm">
              Vacuum Palm Cooling – die innovative Technologie für schnelle Regeneration und maximale Leistung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-vacuul-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Rechtliches
            </p>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-sm hover:text-vacuul-accent transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-sm hover:text-vacuul-accent transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 {SITE_NAME} · Vacuum Palm Cooling · <a href={SITE_URL} className="underline hover:text-white/80 transition-colors">{SITE_URL.replace("https://", "")}</a></p>
        </div>
      </div>
    </footer>
  );
}