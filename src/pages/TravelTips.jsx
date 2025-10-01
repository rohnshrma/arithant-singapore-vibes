import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Wallet, Umbrella, MapPin, Clock, Languages } from "lucide-react";

const tips = [
  {
    icon: Plane,
    title: "Getting There",
    description: "Changi Airport is one of the world's best airports, with direct flights from major cities worldwide.",
    tips: ["Free city tours for layovers", "Easy immigration process", "Airport to city in 30 minutes"],
  },
  {
    icon: Wallet,
    title: "Money & Payments",
    description: "Singapore Dollar (SGD) is the local currency. Cards are widely accepted everywhere.",
    tips: ["ATMs readily available", "Contactless payments common", "Tipping not expected"],
  },
  {
    icon: Umbrella,
    title: "Weather & Packing",
    description: "Tropical climate year-round. Light, breathable clothing is recommended.",
    tips: ["Average temperature: 25-32°C", "Pack an umbrella for sudden rain", "Sun protection essential"],
  },
  {
    icon: MapPin,
    title: "Getting Around",
    description: "World-class public transport system with MRT trains and buses covering the entire island.",
    tips: ["Get an EZ-Link card", "Taxis and Grab available", "Very walkable city"],
  },
  {
    icon: Clock,
    title: "Best Time to Visit",
    description: "Singapore is a year-round destination with festivals and events happening all year.",
    tips: ["Drier months: February to April", "Great Shopping Sale: June-July", "Formula 1: September"],
  },
  {
    icon: Languages,
    title: "Languages & Culture",
    description: "English is widely spoken. Multicultural society with Chinese, Malay, and Indian influences.",
    tips: ["English is official language", "Respect diverse cultures", "Clean and safe city"],
  },
];

const quickFacts = [
  { label: "Time Zone", value: "GMT+8" },
  { label: "Voltage", value: "230V, Type G plugs" },
  { label: "Emergency", value: "999 (Police), 995 (Ambulance)" },
  { label: "Tap Water", value: "Safe to drink" },
];

const TravelTips = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-32 text-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">Travel Tips</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Everything you need to know for a smooth and enjoyable trip to Singapore
            </p>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <Card key={index} className="hover:shadow-hover transition-all duration-300 border-2 hover:border-primary">
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>
                      <p className="text-muted-foreground mb-4">{tip.description}</p>
                      
                      <ul className="space-y-2">
                        {tip.tips.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
              Quick Facts
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {quickFacts.map((fact, index) => (
                <Card key={index} className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">{fact.label}</p>
                    <p className="text-lg font-bold">{fact.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Rules */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
              Important Rules
            </h2>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">🚭 No Smoking</h3>
                    <p className="text-muted-foreground">Smoking is prohibited in most public places including MRT stations, bus stops, and air-conditioned spaces.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">🗑️ Keep It Clean</h3>
                    <p className="text-muted-foreground">Littering is strictly prohibited with heavy fines. Always use designated bins.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">🚇 MRT Rules</h3>
                    <p className="text-muted-foreground">No eating or drinking on trains. Durians and other pungent items are not allowed.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">🎭 Respect Culture</h3>
                    <p className="text-muted-foreground">When visiting religious sites, dress modestly and remove shoes when required.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TravelTips;
