import { Button } from "@/components/ui/button";
import heroGardens from "@/assets/hero-gardens.jpg";

export const CallToAction = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src={heroGardens}
        alt="Visit Singapore"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="relative container mx-auto px-4 text-center text-background">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
          Start Your Singapore Adventure
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Plan your perfect trip with our comprehensive travel guides, tips, and insider recommendations
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Plan Your Trip
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base px-8 py-6 border-background text-background hover:bg-background hover:text-foreground"
          >
            Download Guide
          </Button>
        </div>
      </div>
    </section>
  );
};
