import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductGallery from "@/components/sections/ProductGallery";
import Benefits from "@/components/sections/Benefits";
import HealthExpo from "@/components/sections/HealthExpo";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGallery />
        <Benefits />
        <HealthExpo />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}