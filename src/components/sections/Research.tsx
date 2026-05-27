import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const studies = [
  {
    authors: "Grahn, Cao & Heller",
    year: "2005",
    title: "Heat extraction through the palm of one hand",
    journal: "Stanford University",
    finding:
      "Kühlung + Unterdruck verlängerte die Ausdauer im heissen Umfeld um 67%, Kühlung allein nur um 12%. Die Kerntemperatur stieg 28% langsamer.",
  },
  {
    authors: "Grahn et al.",
    year: "2008",
    title: "Palm cooling to reduce heat-induced Uhthoff's sign",
    journal: "BMC Neurology",
    finding:
      "35% längere Belastungsdauer bei hitzesensiblen MS-Patienten durch einseitige Palmkühlung mit Unterdruck.",
  },
  {
    authors: "Kwon et al.",
    year: "2010",
    title: "Palm cooling delays fatigue during high-intensity exercise",
    journal: "Med Sci Sports Exerc",
    finding:
      "Signifikant höheres Gesamttrainingsvolumen (2480 vs 1972 kg), niedrigere Kerntemperatur und geringerer RPE-Wert.",
  },
  {
    authors: "Grahn et al.",
    year: "2012",
    title: "Work volume and strength training responses",
    journal: "J Strength Cond Res",
    finding:
      "+40% Bankdrück-Volumen, +22% 1RM über 10 Wochen, +144% Klimmzug-Volumen bei erfahrenen Athleten.",
  },
  {
    authors: "O'Brien et al.",
    year: "2021",
    title: "Intermittent palm cooling in rowing ergometry",
    journal: "J Strength Cond Res",
    finding:
      "Signifikant grössere Distanz, niedrigere Herzfrequenz und weniger Blutzinkspiegel bei intermittierender Palmkühlung.",
  },
  {
    authors: "Kim et al.",
    year: "2023",
    title: "Cooling glove recovery effects",
    journal: "PubMed",
    finding:
      "Signifikant niedrigere Blutzinkspiegel und Körpertemperatur, verbesserte kardiopulmonale Funktion und Muskelausdauer-Erholung.",
  },
];

export default function Research() {
  return (
    <section id="forschung" className="px-6 py-14 md:py-20 bg-vacuul-bg dark:bg-[#0F1F33]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="text-sm uppercase tracking-[0.2em] text-vacuul-accent mb-3 text-center font-medium">
            Peer-reviewed Forschung
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-vacuul-blue dark:text-white">
            Die Studienlage
          </h3>
          <p className="text-center text-vacuul-blue/70 dark:text-white/60 max-w-2xl mx-auto mb-12">
            Transparent ist uns wichtig. Hier sind die zitierten Studien – mit Autoren,
            Jahrgang und Journal. Wo die Evidenz gemischt ist, sagen wir das auch.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {studies.map((study, i) => (
            <AnimateOnScroll key={`${study.authors}-${study.year}`} delay={i * 60}>
              <div className="bg-vacuul-surface dark:bg-[#122340] rounded-xl border border-vacuul-blue/10 dark:border-white/10 p-5 md:p-6 hover:border-vacuul-accent/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <div className="shrink-0">
                    <span className="text-2xl font-bold text-vacuul-accent">{study.year}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-vacuul-muted dark:text-white/50 mb-1">
                      {study.authors} · <em>{study.journal}</em>
                    </p>
                    <h4 className="font-semibold text-vacuul-blue dark:text-white mb-1.5 text-sm md:text-base">
                      {study.title}
                    </h4>
                    <p className="text-sm text-vacuul-blue/70 dark:text-white/70 leading-relaxed">
                      {study.finding}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-8 p-5 bg-vacuul-blue/5 dark:bg-white/5 rounded-xl border border-vacuul-blue/10 dark:border-white/10">
            <p className="text-sm text-vacuul-blue/70 dark:text-white/60 leading-relaxed">
              <strong className="text-vacuul-blue dark:text-white/80">Hinweis zur Evidenz:</strong>{" "}
              Nicht alle Studien zeigen signifikante Effekte. Walker et al. (2009) und Maroni et al. (2018)
              fanden bei hochintensivem Intervalltraining keinen signifikanten Leistungsvorteil.
              Die stärkste Evidenz besteht bei Krafttraining zwischen Sätzen, moderater Ausdauerbelastung
              in Hitze und bei hitzesensiblen MS-Patienten. Kleine Stichproben in einigen Studien
              limitieren die Aussagekraft.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}