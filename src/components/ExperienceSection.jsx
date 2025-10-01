import { Sparkles, MapPin, Calendar, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    icon: Sparkles,
    title: "Unique Experiences",
    description: "From rooftop bars to night safaris, discover activities you won't find anywhere else",
  },
  {
    icon: MapPin,
    title: "Diverse Neighborhoods",
    description: "Each district tells its own story - from colonial charm to modern innovation",
  },
  {
    icon: Calendar,
    title: "Year-Round Events",
    description: "Festivals, cultural celebrations, and world-class entertainment all year",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    description: "Experience the genuine warmth and friendliness of Singapore's multicultural society",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-lg mb-2">WHY VISIT</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Unforgettable Singapore
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A destination where East meets West, tradition meets innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-hover transition-all duration-300 border-2 hover:border-primary group"
              >
                <CardContent className="pt-12 pb-8 px-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
