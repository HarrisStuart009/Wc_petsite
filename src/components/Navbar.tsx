import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Heart, User, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import { toast } from 'sonner';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const { items, getCartItemCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const navigate = useNavigate();
  
  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const categoryButtonRef = useRef<HTMLButtonElement>(null);
  
  const cartItemCount = getCartItemCount();
  const wishlistItemCount = wishlistItems.length;

  const categories = [
    { name: "Dogs", path: "/category/dogs" },
    { name: "Cats", path: "/category/cats" },
    { name: "Birds", path: "/category/birds" },
    { name: "Small Pets", path: "/category/small-pets" },
    { name: "Food", path: "/category/food" },
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery(''); // Clear search after submission
  };
  
  // Handle click outside of category menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryMenuRef.current && 
        !categoryMenuRef.current.contains(event.target as Node) &&
        categoryButtonRef.current &&
        !categoryButtonRef.current.contains(event.target as Node)
      ) {
        setCategoryMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoryMenuRef, categoryButtonRef]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold text-pet-primary transition-colors duration-300">
              Paw<span className="text-pet-accent">tastic</span>
            </span>
          </Link>

          {/* Desktop Navigation - Shop by Category */}
          <div className="hidden md:flex relative">
            <button 
              ref={categoryButtonRef}
              className="text-gray-700 hover:text-pet-primary font-medium transition-all duration-300 flex items-center gap-1 group"
              onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
            >
              Shop by Category 
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 group-hover:text-pet-primary ${categoryMenuOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {categoryMenuOpen && (
              <div 
                ref={categoryMenuRef}
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-50 animate-fade-in"
              >
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-pet-primary/10 hover:text-pet-primary rounded-md transition-all duration-300"
                    onClick={() => setCategoryMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative w-1/3 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pet-primary/30 focus:border-pet-primary transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pet-primary transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/wishlist" className="relative text-gray-700 hover:text-pet-error transition-all duration-300 hover:scale-110">
              <Heart size={22} />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pet-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium animate-pulse-scale">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-pet-primary transition-all duration-300 hover:scale-110">
              <User size={22} />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-pet-accent transition-all duration-300 hover:scale-110">
              <ShoppingCart size={22} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pet-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium animate-pulse-scale">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-pet-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pet-primary/30 focus:border-pet-primary transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pet-primary transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-slide-in-top">
            <div className="mb-4">
              <p className="font-medium text-gray-800 mb-2">Shop by Category</p>
              <ul className="space-y-2 pl-2">
                {categories.map((category, index) => (
                  <li key={category.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link 
                      to={category.path}
                      className="text-gray-600 hover:text-pet-primary transition-colors block py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
