
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Games from "./pages/Games";

const queryClient = new QueryClient();

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fa' | 'ps'>('fr');

  const handleLanguageChange = (lang: 'fr' | 'fa' | 'ps') => {
    setCurrentLanguage(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
            <div className="flex-grow">
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route key={to} path={to} element={page} />
                ))}
                <Route path="/games" element={<Games />} />
              </Routes>
            </div>
            <Footer currentLanguage={currentLanguage} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
