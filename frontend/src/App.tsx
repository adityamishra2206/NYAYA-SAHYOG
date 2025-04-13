import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FundamentalRights from "./pages/FundamentalRights";
import LegalAid from "./pages/LegalAid";
import RTI from "./pages/RTI";
import Police from "./pages/Police";
const queryClient = new QueryClient();
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Lawyers from "./pages/Lawyer";
import Courts from "./pages/Courts";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fundamental-rights" element={<FundamentalRights />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/police" element={<Police />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/courts" element={<Courts/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
          
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
