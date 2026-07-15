import Hero from "@/components/home/Hero";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import About from "@/components/home/About";
import CtaBanner from "@/components/ui/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <WhyChooseUs />
      <About />
      <CtaBanner
        title="Ready to Book Your Appointment?"
        description="Whether it's braids, twists, protective styles, color, or a fresh cut — Rachel and the Mommy & Daughter Hair team are ready to help you love your hair."
      />
    </>
  );
}
