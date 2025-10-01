import { Button } from "@/components/ui/button";
import foodHawker from "@/assets/food-hawker.jpg";

export const FoodSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-bold text-lg mb-2">CULINARY JOURNEY</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              A Food Paradise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From Michelin-starred restaurants to vibrant hawker centers, Singapore offers 
              an incredible diversity of flavors. Experience authentic local dishes like 
              Hainanese chicken rice, laksa, and satay, or explore international cuisines 
              from around the world.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <p className="font-medium">UNESCO-recognized hawker culture</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-secondary rounded-full" />
                <p className="font-medium">Over 50 Michelin-starred establishments</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-accent rounded-full" />
                <p className="font-medium">Diverse Asian and international cuisines</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg">Explore Food Guide</Button>
              <Button variant="outline" size="lg">Hawker Centers</Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
              <img
                src={foodHawker}
                alt="Singapore Food"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
