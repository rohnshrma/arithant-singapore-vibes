import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { AttractionsCarousel } from "@/components/AttractionsCarousel";
import { FoodSection } from "@/components/FoodSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AttractionsCarousel />
      <FoodSection />
      <ExperienceSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
