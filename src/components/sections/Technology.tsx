import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Arteriovenöse Anastomosen",
    description:
      "Die Handflächen enthalten spezialisierte Blutgefässe – sogenannte AVAs – die als biologische Heizkörper fungieren. Im warmen Zustand können diese Gefässe bis zu 60% des Herzzeitvolumens durch die Handfläche leiten (Walle, 2016).",
  },
  {
    number: "02",
    title: "Unterdruck öffnet den Weg",
    description:
      "Ein leichter Unterdruck in der Vorrichtung erweitert die Gefässe und zieht warmes Blut an die Handoberfläche. Ohne Unterdruck reicht Kühlung allein nicht – die Studie von Grahn, Cao & Heller (2005) zeigte: Kühlung + Unterdruck brachte 67% mehr Ausdauer, Kühlung allein nur 12%.",
  },
  {
    number: "03",
    title: "Gezielte Wärmeabfuhr",
    description:
      "Das temperierte Wasser (10–22°C) entzieht dem durchströmenden Blut gezielt Wärme – ohne Kälteschock. Zu kalte Oberflächen würden Vasokonstriktion auslösen und den Effekt stoppen. Die Kerntemperatur sinkt nachweislich, nicht nur das Hautempfinden.",
  },
  {
    number: "04",
    title: "Schnellere Erholung, mehr Leistung",
    description:
      "Die kühlere Blut fliesst zurück zum Kern. Ergebnis: niedrigere Kerntemperatur, geringere Erschöpfung und messbar mehr Trainingsvolumen im nächsten Satz – belegt in kontrollierten Studien an der Stanford University.",
  },
];

export default function Technology() {
  return (
    <section id="technologie" className="px-6 py-14 md:py-20 bg-gradient-to-b from-vacuul-blue to-vacuul-teal text-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="text-sm uppercase tracking-[0.2em] text-vacuul-accent mb-3 text-center font-medium">
            Wie es funktioniert
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Die Wissenschaft hinter Vacuum Palm Cooling
          </h3>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-14">
            Der menschliche Körper hat einen eingebauten Radiator: die Handflächen.
            Vacuum Palm Cooling nutzt diesen natürlichen Mechanismus – erstmals erforscht
            an der Stanford University von Prof. H. Craig Heller und Dennis Grahn.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-vacuul-accent shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-5 py-3 text-sm text-white/70">
              <svg className="w-4 h-4 text-vacuul-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                Der Unterdruck ist entscheidend: Kühlung ohne Unterdruck brachte nur 12% Verbesserung – mit Unterdruck 67% (Grahn et al., 2005).
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}