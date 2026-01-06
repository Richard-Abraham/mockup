import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Story {
  name: string;
  year: string;
  title: string;
  text: string;
  quote: string;
  image?: string;
}

const stories: Story[] = [
  {
    name: 'Rubua Kirongothi',
    year: 'Class of 1985',
    title: 'Chief Executive Officer, Tech Innovations Ltd',
    text: 'Walking through the gates as a young student, I had no idea the foundation being laid would carry me through decades of challenges and triumphs. The discipline, the values, and the brotherhood forged here became the compass guiding every major decision in my life.',
    quote: '"This school didn\'t just educate me—it transformed how I see leadership and service to others."',
  },
  {
    name: 'Anyang Nyong\'o',
    year: 'Class of 1978',
    title: 'Governor & Public Servant',
    text: 'The lessons learned within these walls extended far beyond the classroom. They taught us to think critically, to stand for what is right, and to serve our communities with integrity. Every policy I\'ve championed, every decision I\'ve made, has roots in the values instilled here.',
    quote: '"Excellence was not just expected—it was woven into the very fabric of our daily lives."',
  },
  {
    name: 'Luchiri Omoto',
    year: 'Class of 1992',
    title: 'Award-Winning Journalist & Author',
    text: 'My time here taught me the power of storytelling and the responsibility that comes with it. The mentors who guided us understood that education was about more than grades—it was about shaping character and building resilience that would last a lifetime.',
    quote: '"In every story I tell, I carry forward the principles of truth and accountability learned here."',
  },
];

const Stories = () => {
  return (
    <main className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/53568977371_785702acd9_b.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-5">
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 font-bold">
            Alumni Stories
          </h1>
          <p className="font-body text-background/80 text-lg">
            100 Years of Excellence
          </p>
        </div>
        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 text-background"
          viewBox="0 0 1440 100"
          fill="currentColor"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <div className="gold-line mx-auto mb-5" />
            <div className="text-primary font-body text-sm font-semibold tracking-wider uppercase mb-3">
              100 Years of Excellence
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 font-bold">
              Stories From Our Alumni
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              A century of shaping leaders, innovators, and changemakers. Hear from those who walked these halls and went on to make their mark on the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-card hover-lift transition-all duration-300"
              >
                {/* Story Image */}
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/40 relative overflow-hidden">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl font-display text-primary/30 font-bold">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  )}
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground mb-1 font-bold">
                    {story.name}
                  </h3>
                  <div className="text-primary font-body text-sm font-semibold mb-3">
                    {story.year}
                  </div>
                  <div className="font-body text-base text-muted-foreground italic mb-4">
                    {story.title}
                  </div>
                  <p className="font-body text-foreground/80 leading-relaxed mb-4 text-sm">
                    {story.text}
                  </p>
                  <div className="border-l-4 border-primary pl-4 my-4 italic text-foreground/70 font-body">
                    {story.quote}
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:text-primary/80 transition-colors group"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stories;

