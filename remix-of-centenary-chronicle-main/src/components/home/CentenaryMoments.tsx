import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const moments = [
  {
    year: '1926',
    decade: 'The Beginning',
    title: 'A Bold Experiment',
    description:
      'Founded in 1926, Alliance High School began as a bold experiment to educate African boys to the highest possible standard, with character as the foundation.',
    image: '/52698993260_e7732a24d6_b.jpg',
  },
  {
    year: '1960s',
    decade: 'Independence Era',
    title: 'Shaping a Nation',
    description:
      'Alliance educated leaders through colonialism, independence, and globalization. Adapted to changing times without surrendering core values.',
    image: '/52730352171_5a4fccb3ee_b.jpg',
  },
  {
    year: '2026',
    decade: 'The Centenary',
    title: 'Looking Forward',
    description:
      'The centenary is not about looking back with rose-tinted glasses. It is about understanding what must never be lost, even as we move forward.',
    image: '/53568113777_ba44a75956_b.jpg',
  },
];

const achievements = [
  'Educated leaders through colonialism, independence, and globalization',
  'Adapted to changing times without surrendering core values',
  'Produced boys whose influence reaches far beyond the classroom',
];

export function CentenaryMoments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-muted/30">
      {/* Section Header */}
      <div className="container mx-auto px-5 py-20 text-center">
        <div className="gold-line mx-auto mb-5" />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
          100 Years in Perspective
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
          From 1926 to Tomorrow
        </p>
        <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto mb-8">
          Founded in 1926, Alliance High School began as a bold experiment to educate African boys to the highest possible standard, with character as the foundation.
        </p>
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="font-body text-muted-foreground mb-4">Over a century, Alliance has:</p>
          <ul className="space-y-2">
            {achievements.map((item, index) => (
              <li key={index} className="font-body text-foreground flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <p className="font-body text-muted-foreground max-w-2xl mx-auto italic">
          The centenary is not about looking back with rose-tinted glasses. It is about understanding what must never be lost, even as we move forward.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="relative pb-20">
        {moments.map((moment, index) => (
          <div
            key={moment.year}
            ref={(el) => (cardsRef.current[index] = el)}
            className="min-h-[60vh] flex items-center relative overflow-hidden py-10"
          >
            {/* Background Year */}
            <div
              className={cn(
                'absolute left-4 md:left-12 lg:left-20 font-display text-[120px] md:text-[180px] lg:text-[240px] text-outline opacity-20 select-none transition-all duration-700',
                activeIndex === index ? 'opacity-20' : 'opacity-5'
              )}
            >
              {moment.year}
            </div>

            {/* Content */}
            <div className="container mx-auto px-5 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div
                  className={cn(
                    'order-2 lg:order-1 transition-all duration-700 delay-200',
                    index % 2 === 1 ? 'lg:order-2' : ''
                  )}
                >
                  <div className="bg-card p-6 md:p-10 rounded-lg shadow-card max-w-xl">
                    <span className="inline-block font-body text-sm text-primary font-medium tracking-wider mb-3 px-3 py-1 bg-primary/10 rounded-full">
                      {moment.decade}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-semibold">
                      {moment.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={cn(
                    'order-1 lg:order-2 transition-all duration-700',
                    index % 2 === 1 ? 'lg:order-1' : ''
                  )}
                >
                  <div className="image-gold-hover rounded-lg overflow-hidden shadow-elevated">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-56 md:h-72 object-cover transition-transform duration-500"
                      style={{ filter: index < 2 ? 'sepia(30%)' : 'none' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
          {moments.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                cardsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'bg-primary w-3 h-6'
                  : 'bg-primary/30 hover:bg-primary/60'
              )}
              aria-label={`Go to moment ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
