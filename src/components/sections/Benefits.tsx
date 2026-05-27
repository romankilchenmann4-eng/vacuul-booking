import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "+40% mehr Trainingsvolumen",
    description:
      "Palm Cooling zwischen Sätzen reduzierte die Kerntemperatur und steigerte das Bankdrück-Volumen um 40% gegenüber dem Kontrollgroup (Grahn et al., 2012, J Strength Cond Res).",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Schnellere Regeneration",
    description:
      "Signifikant niedrigere Blutzinkspiegel, reduzierte Körpertemperatur und verbesserte kardiopulmonale Erholung nach Hochintensitätstraining (Kim et al., 2023).",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Klinisch erprobt bei MS",
    description:
      "35% längere Belastungsdauer bei hitzesensiblen MS-Patienten – Uhthoff-Phänomen direkt adressiert (Grahn et al., 2008, BMC Neurology).",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "28% langsamerer Temperaturanstieg",
    description:
      "Im heißen Umgebung (40°C) reduzierte Palm Cooling die Rate des Kerntemperaturanstiegs von 2,9°C/h auf 2,1°C/h und verlängerte die Ausdauer um 43% (Grahn, Cao & Heller, 2005).",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Gezielte Kühlung, kein Schock",
    description:
      "Die Kühlung bleibt über dem Vasokonstriktions-Schwellenwert – kein Kälteschock, keine Gefässverengung. Nur effiziente Wärmeabfuhr über die AVA-Gefässe der Handflächen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Im Profisport etabliert",
    description:
      "Einsatz bei NFL-Teams (49ers, Steelers), NBA (Nuggets, Suns, Thunder), NHL (Avalanche), NCAA (Duke, UCLA) und vom US-Verteidigungsministerium für Hitzestress-Forschung finanziert.",
  },
];

export default function Benefits() {
  return (
    <section id="vorteile" className="px-6 py-14 md:py-20 bg-vacuul-surface dark:bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="text-sm uppercase tracking-[0.2em] text-vacuul-accent mb-3 text-center font-medium">
            Belegt durch Forschung
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-vacuul-blue dark:text-white">
            Was Vacuum Palm Cooling bewirkt
          </h3>
          <p className="text-center text-vacuul-blue/70 dark:text-white/60 max-w-2xl mx-auto mb-12">
            Die Ergebnisse stammen aus peer-reviewed Studien der Stanford University
            und unabhängiger Forschungsgruppen.
          </p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 80}>
              <div className="bg-vacuul-bg dark:bg-[#122340] rounded-xl border border-vacuul-blue/10 dark:border-white/10 p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vacuul-light to-vacuul-accent flex items-center justify-center mb-5 text-white">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-vacuul-blue dark:text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-vacuul-blue/70 dark:text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}