import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
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

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "hsl(0, 84%, 48%)" },
    secondary: { main: "hsl(142, 76%, 36%)" },
    background: { default: "hsl( var(--background) )" },
    text: { primary: "hsl( var(--foreground) )" },
  },
  shape: { borderRadius: 12 },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
