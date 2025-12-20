import { Shield, BookOpen, Eye } from 'lucide-react';

export function AllianceDifference() {
  return (
    <section id="alliance-difference" className="py-20 bg-background">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            The Alliance Difference
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            What Made Us, Still Makes Us
          </p>
          <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto">
            Every Old Boy knows this truth: Alliance did not just teach us what to think—it taught us how to stand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <p className="font-body text-center text-muted-foreground mb-8">
            What separated Alliance then still separates it now:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2 font-semibold">Standards Never Negotiable</h3>
              <p className="font-body text-sm text-muted-foreground">
                Standards that were never negotiable
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2 font-semibold">Discipline Before Brilliance</h3>
              <p className="font-body text-sm text-muted-foreground">
                A culture that rewarded discipline before brilliance
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2 font-semibold">Excellence When No One Watches</h3>
              <p className="font-body text-sm text-muted-foreground">
                A quiet insistence on excellence, even when nobody was watching
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-muted-foreground mb-4">
            We live in a time where shortcuts are celebrated and values are optional. Alliance has never been that place. And if we are honest, that is exactly why it shaped us.
          </p>
          <p className="font-body text-foreground font-medium">
            This centenary is a reaffirmation: Alliance remains Alliance.
          </p>
        </div>
      </div>
    </section>
  );
}
