import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SG</span>
              </div>
              <span className="font-bold text-xl">Visit Singapore</span>
            </Link>
            <p className="text-background/70 text-sm">
              Your gateway to discovering the Lion City's wonders
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Plan Your Trip</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/things-to-do" className="hover:text-background transition-colors">Things To Do</Link></li>
              <li><Link to="/neighbourhoods" className="hover:text-background transition-colors">Where To Stay</Link></li>
              <li><Link to="/travel-tips" className="hover:text-background transition-colors">Getting Around</Link></li>
              <li><Link to="/travel-tips" className="hover:text-background transition-colors">Travel Tips</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/neighbourhoods" className="hover:text-background transition-colors">Neighbourhoods</Link></li>
              <li><Link to="/food-and-drink" className="hover:text-background transition-colors">Food & Drink</Link></li>
              <li><Link to="/things-to-do" className="hover:text-background transition-colors">Shopping</Link></li>
              <li><Link to="/events" className="hover:text-background transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/70">
          <p>&copy; 2025 Visit Singapore. Passion Made Possible.</p>
        </div>
      </div>
    </footer>
  );
};
