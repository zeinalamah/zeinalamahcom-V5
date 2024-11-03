import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex gap-8 text-text">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {location.pathname === '/' ? (
            <>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="hover:text-primary transition-colors"
              >
                Publications
              </button>
            </>
          ) : null}
          <Link to="/resume" className="hover:text-primary transition-colors">
            Resume
          </Link>
          {location.pathname === '/' ? (
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          ) : null}
        </div>
        <button 
          className="md:hidden text-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};