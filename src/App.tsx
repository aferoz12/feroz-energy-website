import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnalytics } from "@/hooks/use-analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RateOptimization from "./pages/RateOptimization";
import BillManagement from "./pages/BillManagement";
import Benchmarking from "./pages/Benchmarking";
import CarbonAccounting from "./pages/CarbonAccounting";
import LearnMore from "./pages/LearnMore";
import FAQ from "./pages/FAQ";
import BlogUtilityTariffs from "./pages/BlogUtilityTariffs";
import BlogSupplyDistribution from "./pages/BlogSupplyDistribution";
import FormConfirmation from "./pages/FormConfirmation";

const queryClient = new QueryClient();

// Analytics wrapper component
const AppWithAnalytics = () => {
  useAnalytics(); // This will track all page views automatically
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rate-optimization" element={<RateOptimization />} />
      <Route path="/bill-management" element={<BillManagement />} />
      <Route path="/benchmarking" element={<Benchmarking />} />
      <Route path="/carbon-accounting" element={<CarbonAccounting />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog/utility-tariffs" element={<BlogUtilityTariffs />} />
      <Route path="/blog/supply-distribution" element={<BlogSupplyDistribution />} />
      <Route path="/form-confirmation" element={<FormConfirmation />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWithAnalytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
