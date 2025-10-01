import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palmtree, Building2, ShoppingBag, Music, Camera, Waves } from "lucide-react";
import merlion from "@/assets/merlion.jpg";
import sentosaBeach from "@/assets/sentosa-beach.jpg";
import botanicGardens from "@/assets/botanic-gardens.jpg";

const activities = [
  {
    icon: Building2,
    title: "Iconic Landmarks",
    description: "Visit Marina Bay Sands, Gardens by the Bay, and the Merlion",
    color: "text-primary",
  },
  {
    icon: Palmtree,
    title: "Nature & Parks",
    description: "Explore lush gardens, nature reserves, and outdoor spaces",
    color: "text-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    description: "From Orchard Road to local markets and boutiques",
    color: "text-accent",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Theme parks, nightlife, and cultural performances",
    color: "text-primary",
  },
  {
    icon: Camera,
    title: "Photo Spots",
    description: "Instagram-worthy locations across the city",
    color: "text-secondary",
  },
  {
    icon: Waves,
    title: "Water Activities",
    description: "Beaches, water sports, and coastal adventures",
    color: "text-accent",
  },
];

const featured = [
  {
    image: merlion,
    title: "Merlion Park",
    category: "Must-Visit",
    description: "Singapore's iconic symbol at Marina Bay",
  },
  {
    image: sentosaBeach,
    title: "Sentosa Island",
    category: "Beach & Fun",
    description: "Tropical paradise with endless entertainment",
  },
  {
    image: botanicGardens,
    title: "Botanic Gardens",
    category: "Nature",
    description: "UNESCO World Heritage Site with stunning landscapes",
  },
];

const ThingsToDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">Things To Do</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              From world-class attractions to hidden gems, discover endless possibilities in Singapore
            </p>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Explore By Category
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Card key={index} className="hover:shadow-hover transition-all duration-300 border-2 hover:border-primary group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex p-4 bg-muted rounded-full mb-4 group-hover:scale-110 transition-transform">
                        <Icon className={`h-8 w-8 ${activity.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Attractions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Featured Attractions
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featured.map((item, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-hover transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                        <p className="text-secondary text-sm font-bold mb-2">{item.category}</p>
                        <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                        <p className="text-background/90 text-sm mb-4">{item.description}</p>
                        <Button variant="secondary" size="sm">Explore</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThingsToDo;
