import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Technology from "@/components/sections/Technology";
import ProductGallery from "@/components/sections/ProductGallery";
import Benefits from "@/components/sections/Benefits";
import Research from "@/components/sections/Research";
import HealthExpo from "@/components/sections/HealthExpo";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <ProductGallery />
        <Benefits />
        <Research />
        <HealthExpo />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}