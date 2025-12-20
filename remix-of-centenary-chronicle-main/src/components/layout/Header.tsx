import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ahsLogo from '@/assets/ahs-logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-background/80 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-20 md:h-[84px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={ahsLogo} 
                alt="Alliance High School Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-primary text-xs tracking-wider font-display font-semibold">1926 — 2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-body text-base font-medium transition-all duration-300 relative',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-foreground'
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" asChild>
              <Link to="/about">Be Part of the 100-Year Story</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-96 border-b border-primary/20' : 'max-h-0'
        )}
      >
        <nav className="container mx-auto px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'font-body text-lg py-2 transition-colors',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="lg" className="mt-4 w-full" asChild>
            <Link to="/about">Be Part of the 100-Year Story</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
