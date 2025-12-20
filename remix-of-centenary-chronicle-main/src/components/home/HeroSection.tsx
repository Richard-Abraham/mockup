import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('alliance-difference');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-foreground" />
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(1.2)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 pt-20 pb-24 md:py-0">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-primary/15 backdrop-blur-md border border-primary/25 rounded-full px-5 py-2.5 mb-8 md:mb-10 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-xs sm:text-sm text-background/90 tracking-widest uppercase">CELEBRATING 100 YEARS</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background mb-6 md:mb-8 animate-fade-up delay-100 font-semibold">
            <span className="block">A Century of Character.</span>
            <span className="block text-primary mt-1 sm:mt-2">A Brotherhood for Life.</span>
          </h1>

          {/* Subtitle - Single focused paragraph */}
          <p className="font-body text-base sm:text-lg md:text-xl text-background/75 font-light mb-10 md:mb-12 animate-fade-up delay-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Alliance High School at 100: celebrating a legacy of excellence, discipline, and brotherhood that has shaped generations of leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up delay-300">
            <Button
              variant="default"
              size="lg"
              asChild
              className="text-base px-8 py-6 rounded-full"
            >
              <Link to="/about">
                Join the Centenary
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContent}
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6 rounded-full"
            >
              Explore Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow group"
        aria-label="Scroll to content"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-background/50 text-xs tracking-widest uppercase hidden md:block">Scroll</span>
          <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/70 transition-colors">
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </button>
    </section>
  );
}
