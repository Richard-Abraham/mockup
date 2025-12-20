import { Building2, GraduationCap, Archive, Wrench } from 'lucide-react';

export function LegacyProjects() {
  const projects = [
    {
      icon: Building2,
      title: 'Strategic Infrastructure',
      description: 'Support strategic infrastructure development',
    },
    {
      icon: GraduationCap,
      title: 'Academic Programs',
      description: 'Strengthen academic and leadership programs',
    },
    {
      icon: Archive,
      title: 'Historical Archives',
      description: 'Preserve historical archives and institutional memory',
    },
    {
      icon: Wrench,
      title: 'Future Systems',
      description: 'Create systems that future custodians can build upon, not repair',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            What We Are Building Together
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Legacy Projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="font-body text-center text-foreground mb-8 text-lg font-medium">
            The next 100 years will not sustain themselves.
          </p>
          
          <p className="font-body text-center text-muted-foreground mb-8">
            Through the centenary, we are mobilizing Old Boys and friends of Alliance to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {projects.map((project) => (
              <div key={project.title} className="bg-card p-6 rounded-lg shadow-card hover-lift">
                <div className="flex items-start gap-4">
                  <project.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2 font-semibold">{project.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body text-muted-foreground mb-2">This is not about giving for optics.</p>
            <p className="font-body text-foreground font-medium text-lg">It is about leaving Alliance better than we found it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
