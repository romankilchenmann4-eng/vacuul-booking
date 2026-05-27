import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-vacuul-blue via-vacuul-teal to-vacuul-blue text-white overflow-hidden">
      {/* Background mesh effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-vacuul-accent/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-vacuul-light/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-vacuul-accent mb-4 font-medium">
          Vacuum Palm Cooling Technology
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Der schnellste Weg<br />zur Kernkühlung
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          600 spezialisierte Blutgefässe in Ihren Handflächen – genutzt
          mit Unterdruck und präziser Kühlung. Stanford-forschungsbasiert.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-vacuul-accent text-vacuul-blue font-bold text-lg px-10 py-4 rounded-xl hover:bg-vacuul-accent-hover transition-colors shadow-lg animate-pulse-glow"
        >
          Beratung buchen
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}