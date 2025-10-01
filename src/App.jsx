import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThingsToDo from "./pages/ThingsToDo";
import Neighbourhoods from "./pages/Neighbourhoods";
import FoodAndDrink from "./pages/FoodAndDrink";
import TravelTips from "./pages/TravelTips";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/neighbourhoods" element={<Neighbourhoods />} />
          <Route path="/food-and-drink" element={<FoodAndDrink />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
