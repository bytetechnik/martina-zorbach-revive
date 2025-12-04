import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberMich from "./pages/UeberMich";
import Angebote from "./pages/Angebote";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
import Referenzen from "./pages/Referenzen";
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
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
