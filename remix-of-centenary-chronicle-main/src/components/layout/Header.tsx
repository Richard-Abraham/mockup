import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ahsLogo from '@/assets/ahs-logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/stories', label: 'Stories from old boys' },
  { href: '/projects', label: 'Our Projects' },
  { href: 'https://www.flickr.com/photos/ahsobc/albums/', label: 'Gallery', external: true },
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 md:bg-background/80 backdrop-blur-sm shadow-sm md:shadow-none'
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
              <div className="text-primary text-xs tracking-wider font-display font-semibold">1926 - 2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base font-medium transition-all duration-300 relative text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
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
              );
            })}
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
            className="md:hidden p-2.5 rounded-md bg-primary/10 text-foreground hover:text-primary hover:bg-primary/20 transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        )}
      >
        <div className="bg-white shadow-xl border-b-2 border-primary/30">
          <nav className="container mx-auto px-5 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-lg py-3 px-4 rounded-md transition-all duration-200 text-gray-700 hover:text-primary hover:bg-primary/10"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'font-body text-lg py-3 px-4 rounded-md transition-all duration-200',
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button variant="default" size="lg" className="mt-4 w-full" asChild>
              <Link to="/about">Be Part of the 100-Year Story</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
