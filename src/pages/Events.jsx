import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Sparkles, PartyPopper } from "lucide-react";
import heroGardens from "@/assets/hero-gardens.jpg";

const upcomingEvents = [
  {
    month: "Jan",
    title: "Chinese New Year",
    description: "Lion dances, street bazaars, and festive celebrations across the city",
    type: "Cultural Festival",
  },
  {
    month: "Mar",
    title: "Singapore Garden Festival",
    description: "Asia's premier garden and flower show at Marina Bay",
    type: "Nature Event",
  },
  {
    month: "Jun",
    title: "Great Singapore Sale",
    description: "Island-wide shopping discounts and promotions",
    type: "Shopping Event",
  },
  {
    month: "Aug",
    title: "National Day",
    description: "Spectacular parade and fireworks celebrating Singapore's independence",
    type: "National Celebration",
  },
  {
    month: "Sep",
    title: "Formula 1 Singapore Grand Prix",
    description: "The world's first night street race with concerts and entertainment",
    type: "Sports Event",
  },
  {
    month: "Oct",
    title: "Deepavali",
    description: "Festival of Lights celebrated in Little India with vibrant decorations",
    type: "Cultural Festival",
  },
];

const categories = [
  {
    icon: Music,
    title: "Music & Arts",
    count: "20+ events",
  },
  {
    icon: Sparkles,
    title: "Festivals",
    count: "15+ celebrations",
  },
  {
    icon: Calendar,
    title: "Exhibitions",
    count: "30+ shows",
  },
  {
    icon: PartyPopper,
    title: "Night Events",
    count: "25+ experiences",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <img
            src={heroGardens}
            alt="Events in Singapore"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          
          <div className="relative container mx-auto px-4 text-center text-background">
            <h1 className="text-5xl md:text-7xl font-black mb-6">What's Happening</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Year-round festivals, world-class events, and unforgettable experiences
            </p>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
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
                      <p className="text-muted-foreground text-sm">{category.count}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Annual Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-hover transition-all duration-300 border-2 hover:border-secondary">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-center min-w-[60px]">
                        {event.month}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{event.type}</p>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Never Miss an Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and get updates on upcoming festivals, concerts, and special events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-border focus:border-primary outline-none"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
