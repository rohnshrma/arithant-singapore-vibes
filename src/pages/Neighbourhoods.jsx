import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroChinatown from "@/assets/hero-chinatown.jpg";
import littleIndia from "@/assets/little-india.jpg";
import heroMarina from "@/assets/hero-marina-bay.jpg";

const neighbourhoods = [
  {
    image: heroChinatown,
    name: "Chinatown",
    description: "Colorful shophouses, traditional temples, and vibrant street markets",
    highlights: ["Buddha Tooth Relic Temple", "Maxwell Food Centre", "Traditional Medicine Shops"],
  },
  {
    image: littleIndia,
    name: "Little India",
    description: "Aromatic spices, vibrant textiles, and rich cultural heritage",
    highlights: ["Sri Veeramakaliamman Temple", "Tekka Centre", "Mustafa Centre"],
  },
  {
    image: heroMarina,
    name: "Marina Bay",
    description: "Singapore's modern waterfront with iconic architecture",
    highlights: ["Marina Bay Sands", "Esplanade", "Merlion Park"],
  },
];

const Neighbourhoods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">Neighbourhoods</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Each neighborhood tells its own story - discover Singapore's diverse districts
            </p>
          </div>
        </section>

        {/* Neighbourhoods List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16 max-w-6xl mx-auto">
              {neighbourhoods.map((area, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <Card className="overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 border-0">
                      <img
                        src={area.image}
                        alt={area.name}
                        className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Card>
                  </div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-primary font-bold text-lg mb-2">DISCOVER</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">{area.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{area.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {area.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-primary rounded-full" />
                          <p className="font-medium">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <Button size="lg">Explore {area.name}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Neighbourhoods */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              More To Explore
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Orchard Road, Kampong Glam, Sentosa, East Coast, and many more unique districts await your discovery
            </p>
            <Button size="lg" variant="outline">View All Neighbourhoods</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Neighbourhoods;
