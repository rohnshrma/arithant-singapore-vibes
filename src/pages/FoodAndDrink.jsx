import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Coffee, IceCream, Wine } from "lucide-react";
import foodHawker from "@/assets/food-hawker.jpg";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Hawker Centers",
    description: "Authentic local dishes at affordable prices",
  },
  {
    icon: Coffee,
    title: "Cafés & Coffee",
    description: "Artisan coffee and trendy brunch spots",
  },
  {
    icon: IceCream,
    title: "Desserts",
    description: "From traditional kaya toast to modern sweets",
  },
  {
    icon: Wine,
    title: "Fine Dining",
    description: "Michelin-starred restaurants and rooftop bars",
  },
];

const dishes = [
  { name: "Hainanese Chicken Rice", origin: "Singaporean" },
  { name: "Laksa", origin: "Peranakan" },
  { name: "Chilli Crab", origin: "Singaporean" },
  { name: "Satay", origin: "Malay" },
  { name: "Char Kway Teow", origin: "Chinese" },
  { name: "Roti Prata", origin: "Indian" },
];

const FoodAndDrink = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">Food & Drink</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A melting pot of flavors - experience Singapore's world-renowned food culture
            </p>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-elegant border-0">
                <img
                  src={foodHawker}
                  alt="Singapore Food"
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Dining Experiences
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-hover transition-all duration-300 border-2 hover:border-primary group cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Must-Try Dishes */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Must-Try Dishes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dishes.map((dish, index) => (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 border-2 hover:border-secondary group cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{dish.origin} Cuisine</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">Explore Food Guide</Button>
            </div>
          </div>
        </section>

        {/* UNESCO Recognition */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
            <div className="p-12 bg-gradient-hero rounded-3xl text-background">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                UNESCO Recognized Hawker Culture
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Singapore's hawker centers are more than just places to eat - they're the heart of our multicultural society, bringing people together through food.
              </p>
              <Button variant="hero" size="lg">Find Hawker Centers</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodAndDrink;
