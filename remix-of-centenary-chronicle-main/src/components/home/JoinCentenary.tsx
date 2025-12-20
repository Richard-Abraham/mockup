import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function JoinCentenary() {
  const participationWays = [
    'Attend centenary events',
    'Contribute to legacy initiatives',
    'Share your Alliance story',
    'Reconnect with fellow Old Boys',
    'Simply stand counted',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            Join the Centenary
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-4">
            Your Place Is Here
          </p>
          <p className="font-body text-base text-muted-foreground mb-6">
            There is no "right way" to participate. There is only participation.
          </p>
          
          <p className="font-body text-muted-foreground mb-4">You can:</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {participationWays.map((way) => (
              <div key={way} className="bg-muted/50 p-4 rounded-lg">
                <p className="font-body text-foreground">{way}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-foreground font-medium mb-8">
            However you engage, engage deliberately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Be Part of the 100-Year Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Explore Events, Projects & Ways to Participate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
