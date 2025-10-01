import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMarina from "@/assets/hero-marina-bay.jpg";
import heroGardens from "@/assets/hero-gardens.jpg";
import heroChinatown from "@/assets/hero-chinatown.jpg";

const slides = [
  {
    image: heroMarina,
    title: "MARINA BAY",
    subtitle: "Iconic Skyline",
    description: "Experience Singapore's most iconic waterfront destination",
  },
  {
    image: heroGardens,
    title: "GARDENS BY THE BAY",
    subtitle: "Nature's Paradise",
    description: "Explore futuristic gardens and breathtaking landscapes",
  },
  {
    image: heroChinatown,
    title: "CULTURAL HERITAGE",
    subtitle: "Rich Traditions",
    description: "Discover vibrant neighborhoods and authentic experiences",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-background font-bold text-lg md:text-xl mb-4 animate-fade-in">
              {slide.subtitle}
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-background mb-6 tracking-tight animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-background mb-8 max-w-2xl animate-fade-in">
              {slide.description}
            </p>
            <Button variant="hero" size="lg" className="text-base px-8 py-6 animate-fade-in">
              Explore More
            </Button>
          </div>

          <button
            onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/20 h-12 w-12"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/20 h-12 w-12"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-background"
                : "w-2 bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
