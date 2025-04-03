import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  
  // Add scroll animation effect for elements
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all elements with the data-animate class
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-50 transition-colors duration-500">
      <Navbar />
      <main className="flex-1 animate-slide-in-top">
        {isProfilePage && (
          <div className="bg-white shadow-sm animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-pet-primary">My Account</h1>
                <div>
                  <Link to="/" className="text-sm text-pet-primary/70 hover:text-pet-primary transition-colors">
                    Home
                  </Link>
                  <span className="mx-2 text-gray-300">/</span>
                  <span className="text-sm text-pet-primary">Profile</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="page-transition">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
