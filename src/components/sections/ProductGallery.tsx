import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProductGallery() {
  return (
    <section id="technologie" className="px-6 py-14 md:py-20 bg-vacuul-bg dark:bg-[#0F1F33]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-vacuul-blue dark:text-white">
            Vacuum Palm Cooling
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.01] transition-all duration-300 mb-6">
            <Image
              src="/images/hero-main.jpg"
              alt="Vacuul Vacuum Palm Cooling Gerät"
              width={1440}
              height={1440}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1440px"
            />
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <AnimateOnScroll delay={200}>
            <div className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/grid-1.jpg"
                alt="Vacuul Produktansicht"
                width={480}
                height={480}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/grid-2.jpg"
                alt="Vacuul Anwendung"
                width={480}
                height={480}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}