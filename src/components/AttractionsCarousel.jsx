import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import merlion from "@/assets/merlion.jpg";
import sentosaBeach from "@/assets/sentosa-beach.jpg";
import botanicGardens from "@/assets/botanic-gardens.jpg";
import littleIndia from "@/assets/little-india.jpg";

const attractions = [
  {
    image: merlion,
    title: "Merlion Park",
    category: "Iconic Landmark",
    description: "Singapore's most famous symbol and must-visit destination",
  },
  {
    image: sentosaBeach,
    title: "Sentosa Island",
    category: "Beach Paradise",
    description: "Tropical escape with pristine beaches and entertainment",
  },
  {
    image: botanicGardens,
    title: "Botanic Gardens",
    category: "Nature & Wellness",
    description: "UNESCO World Heritage Site with stunning flora",
  },
  {
    image: littleIndia,
    title: "Little India",
    category: "Cultural District",
    description: "Vibrant neighborhood rich in culture and tradition",
  },
];

export const AttractionsCarousel = () => {
  return (
    <section id="attractions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-lg mb-2">DISCOVER</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4">Top Attractions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Singapore's most beloved destinations and create unforgettable memories
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {attractions.map((attraction, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-hover transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                        <p className="text-secondary text-sm font-bold mb-2">
                          {attraction.category}
                        </p>
                        <h3 className="text-2xl font-black mb-2">{attraction.title}</h3>
                        <p className="text-background/90 text-sm mb-4">
                          {attraction.description}
                        </p>
                        <Button variant="secondary" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
