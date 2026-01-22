import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// School logo from public folder
const schoolLogo = '/cropped-logoAHS.png';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/stories', label: 'Stories from old boys' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Primary color top border */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img 
              src={schoolLogo} 
              alt="Alliance High School Logo" 
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="font-body text-sm text-background/70 mb-2">1926 - 2026</p>
            <p className="font-display text-lg text-background/90 italic leading-relaxed">
              "Strong to Serve"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-xl text-primary mb-5 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display text-xl text-primary mb-5 font-semibold">Contact</h4>
            <div className="space-y-3">
              <p className="font-body text-sm text-background/70">
                Alliance High School<br />
                P.O. Box 25<br />
                Kikuyu, Kenya
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-display text-xl text-primary mb-5 font-semibold">Stay Updated</h4>
            <p className="font-body text-sm text-background/70 mb-4">
              Get updates on centenary events and celebrations.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
              />
              <Button variant="default" className="w-full">
                Subscribe
              </Button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 border border-background/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-background/60">
            © 2026 Alliance High School. Centenary Celebration.
          </p>
          <a
            href="mailto:centenary@alliancehighschool.ac.ke"
            className="font-body text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Share Your Story
          </a>
        </div>
      </div>
    </footer>
  );
}
