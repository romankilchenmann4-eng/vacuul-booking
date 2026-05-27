import { HEALTH_EXPO_URL } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function HealthExpo() {
  return (
    <section id="messe" className="px-6 py-14 md:py-20 bg-gradient-to-r from-vacuul-teal to-vacuul-blue text-white">
      <div className="max-w-6xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs uppercase tracking-[0.3em] text-vacuul-accent mb-2 font-medium">
            Messe
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Health Expo Basel
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-white/80 mb-1">
            Samstag, 30. Mai 2026 · 10:00–18:00
          </p>
          <p className="text-white/80 mb-2">
            Messe Basel · Messeplatz 1 · B2B Business Campus
          </p>
          <p className="text-white/60 text-sm mb-8">
            Eintritt frei – Besuchen Sie uns am B2B Business Campus und erleben Sie Vacuum Palm Cooling live.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={300}>
          <div className="mb-8">
            <CountdownTimer />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <a
            href={HEALTH_EXPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Zur Health Expo Webseite
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}