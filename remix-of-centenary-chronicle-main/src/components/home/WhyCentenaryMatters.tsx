import { Anchor, Building, Users, Shield } from 'lucide-react';

export function WhyCentenaryMatters() {
  const reasons = [
    {
      icon: Anchor,
      title: 'Re-anchor the school',
      description: 'Re-anchor the school to its founding principles',
    },
    {
      icon: Building,
      title: 'Strengthen infrastructure',
      description: 'Strengthen infrastructure and systems for future generations',
    },
    {
      icon: Users,
      title: 'Renew engagement',
      description: 'Renew Old Boy engagement in meaningful, structured ways',
    },
    {
      icon: Shield,
      title: 'Ensure relevance',
      description: 'Ensure Alliance remains relevant without becoming diluted',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            Why This Centenary Matters
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            More Than Celebration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="font-body text-center text-foreground mb-8 text-lg font-medium">
            Let's say the uncomfortable part out loud: If Old Boys don't actively guard Alliance, someone else will redefine it for us.
          </p>
          
          <p className="font-body text-center text-muted-foreground mb-8">
            This centenary exists to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-card p-6 rounded-lg shadow-card hover-lift">
                <div className="flex items-start gap-4">
                  <reason.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2 font-semibold">{reason.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-muted-foreground mb-2">Celebration is part of it.</p>
            <p className="font-body text-foreground font-medium text-lg">Stewardship is the real work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
