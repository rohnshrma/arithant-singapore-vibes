import { Menu, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SG</span>
            </div>
            <span className="font-bold text-xl">Visit Singapore</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/events" className="text-sm font-medium hover:text-primary transition-colors">
              What's Happening
            </Link>
            <Link to="/neighbourhoods" className="text-sm font-medium hover:text-primary transition-colors">
              Neighbourhoods
            </Link>
            <Link to="/things-to-do" className="text-sm font-medium hover:text-primary transition-colors">
              Things To Do
            </Link>
            <Link to="/food-and-drink" className="text-sm font-medium hover:text-primary transition-colors">
              Food & Drink
            </Link>
            <Link to="/travel-tips" className="text-sm font-medium hover:text-primary transition-colors">
              Travel Tips
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
