import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";
import Index from "./pages/Index";
import UeberMich from "./pages/UeberMich";
import Angebote from "./pages/Angebote";
import KostenAblauf from "./pages/KostenAblauf";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
import Referenzen from "./pages/Referenzen";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/ueber-mich" element={<PageTransition><UeberMich /></PageTransition>} />
        <Route path="/angebote" element={<PageTransition><Angebote /></PageTransition>} />
        <Route path="/kosten-ablauf" element={<PageTransition><KostenAblauf /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/kontakt" element={<PageTransition><Kontakt /></PageTransition>} />
        <Route path="/referenzen" element={<PageTransition><Referenzen /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
        <Route path="/datenschutz" element={<PageTransition><Datenschutz /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
