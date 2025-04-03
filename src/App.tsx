import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Wishlist from "./pages/Wishlist";

function App() {
  // Create a client inside the component to ensure React context works properly
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:categorySlug" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
