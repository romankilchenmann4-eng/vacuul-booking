import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sofortige Kühlung",
    description:
      "Effiziente Thermoregulation über die Handflächen – der schnellste Weg, den Kernkörper zu kühlen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Schnellere Regeneration",
    description:
      "Reduziert Ermüdung und beschleunigt die Erholung – ideal für Spitzensport und Therapie.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Wissenschaftlich belegt",
    description:
      "Basierend auf jahrelanger Forschung zur palmaren Thermoregulation.",
  },
];

export default function Benefits() {
  return (
    <section id="vorteile" className="px-6 py-14 md:py-20 bg-vacuul-surface dark:bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-vacuul-blue dark:text-white">
            Warum Vacuum Palm Cooling?
          </h3>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 100}>
              <div className="bg-vacuul-bg dark:bg-[#122340] rounded-xl border border-vacuul-blue/10 dark:border-white/10 p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-vacuul-light to-vacuul-accent flex items-center justify-center mx-auto mb-5 text-white">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-vacuul-blue dark:text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-vacuul-blue/70 dark:text-white/70">
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