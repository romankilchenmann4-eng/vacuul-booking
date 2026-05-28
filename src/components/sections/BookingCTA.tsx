import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BookingButton from "@/components/ui/BookingButton";

export default function BookingCTA() {
  return (
    <section id="beratung" className="relative bg-vacuul-blue text-white px-6 py-14 md:py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-vacuul-accent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-vacuul-light blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <AnimateOnScroll>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Beratungstermin buchen
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-white/80 mb-2 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Gespräch – persönlich, telefonisch oder per Video.
          </p>
          <p className="text-white/50 text-sm mb-10">
            Wählen Sie ein passendes Zeitfenster in den nächsten 6 Monaten.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <BookingButton className="inline-block bg-vacuul-accent text-vacuul-blue font-bold text-lg px-10 py-4 rounded-xl hover:bg-vacuul-accent-hover transition-colors shadow-lg animate-pulse-glow">
            Jetzt Termin buchen
          </BookingButton>
          <p className="text-white/40 text-xs mt-6">
            Buchen Sie direkt hier – ohne die Seite zu verlassen.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}