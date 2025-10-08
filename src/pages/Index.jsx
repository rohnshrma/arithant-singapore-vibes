import { Box } from "@mui/material";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { AttractionsCarousel } from "@/components/AttractionsCarousel";
import { FoodSection } from "@/components/FoodSection";
import { VideoSection } from "@/components/VideoSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Hero section with header positioned over it */}
      <Box sx={{ position: 'relative' }}>
        <Header />
        <HeroSlider />
      </Box>
      <AttractionsCarousel />
      <FoodSection />
      <VideoSection />
      <ExperienceSection />
      <CallToAction />
      <Footer />
    </Box>
  );
};

export default Index;
