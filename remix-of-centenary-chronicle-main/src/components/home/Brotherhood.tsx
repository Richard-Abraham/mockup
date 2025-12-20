import { Users, Globe, Calendar } from 'lucide-react';

export function Brotherhood() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            The Brotherhood
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Old Boys, For Life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="font-body text-center text-muted-foreground mb-8 text-lg">
            Alliance is a brotherhood that does not expire:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground font-semibold">Across Generations</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground font-semibold">Across Professions</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg text-foreground font-semibold">Across Borders</h3>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-body text-muted-foreground mb-4">
              Whether you left Alliance five years ago or fifty, the bond is the same. You recognize it in the posture. In the way Alliance boys speak about responsibility. In the quiet pride that doesn't need announcing.
            </p>
            <p className="font-body text-foreground font-medium">
              This centenary brings Old Boys home—not just physically, but in spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
