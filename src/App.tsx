import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";
import Index from "./pages/Index";
import UeberMich from "./pages/UeberMich";
import KarriereFuehrung from "./pages/KarriereFuehrung";
import LebenszeitPlus from "./pages/LebenszeitPlus";
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
        <Route path="/karriere-fuehrung" element={<PageTransition><KarriereFuehrung /></PageTransition>} />
        <Route path="/lebenszeitplus-ruhestandscoaching" element={<PageTransition><LebenszeitPlus /></PageTransition>} />
        <Route path="/kontakt" element={<PageTransition><Kontakt /></PageTransition>} />
        <Route path="/referenzen" element={<PageTransition><Referenzen /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
        <Route path="/datenschutz" element={<PageTransition><Datenschutz /></PageTransition>} />
        {/* Redirects for old URLs */}
        <Route path="/angebote" element={<Navigate to="/karriere-fuehrung" replace />} />
        <Route path="/faq" element={<Navigate to="/kontakt" replace />} />
        <Route path="/kosten-ablauf" element={<Navigate to="/kontakt" replace />} />
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