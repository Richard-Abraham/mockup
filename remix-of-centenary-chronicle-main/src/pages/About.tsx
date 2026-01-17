import { CheckCircle2 } from 'lucide-react';
import ahsLogo from '@/assets/ahs-logo.png';

const About = () => {
  const corePhilosophy = [
    'Character must precede convenience',
    'Discipline is not punishment, but preparation',
    'Leadership is earned through service',
    'Excellence is a daily practice, not a slogan',
  ];

  const allianceChallenges = [
    'Think critically',
    'Act responsibly',
    'Respect time, structure, and authority',
    'Understand that privilege carries obligation',
  ];

  const centenaryQuestions = [
    'Are the standards still intact?',
    'Is the culture being preserved or diluted?',
    'Are Old Boys actively shaping the future, or merely remembering the past?',
  ];

  const nextCenturyRequires = [
    'Stronger systems',
    'Thoughtful leadership',
    'Engaged Old Boys',
    'A renewed commitment to values over convenience',
  ];

  const nationalInfluence = [
    'Institutions strengthened',
    'Standards raised',
    'Communities served',
    'Integrity maintained under pressure',
  ];

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
            About Us
          </h1>
          <p className="font-body text-background/80 text-lg">Who We Are. What We Stand For. Why It Still Matters.</p>
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

      {/* 1. We Are Alliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <img src={ahsLogo} alt="AHS Logo" className="w-20 h-20 object-contain" />
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">We Are Alliance: More Than a School</h2>
              </div>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Alliance High School is not simply an institution you attend and leave behind. It is a formative environment, deliberate, demanding, and values-driven, that shapes how young men think, act, and carry responsibility long after they leave the Hill.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              For 100 years, Alliance has stood for something rare: Excellence anchored in character. Discipline grounded in purpose. Leadership forged through service.
            </p>
            <p className="font-body text-foreground font-medium">
              That identity is not accidental. It is carefully guarded.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Origin */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              Our Origin: A Bold Vision That Took Root
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Founded in 1926, Alliance High School began with a clear, uncompromising vision: to educate African boys to the highest academic and moral standards possible.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  From the very beginning, Alliance rejected mediocrity. It demanded seriousness of purpose, intellectual rigor, and personal accountability at a time when such expectations were rare.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elevated">
                <img
                  src="/53569299759_1759d0b515_b.jpg"
                  alt="Alliance High School historical image"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <p className="font-body text-foreground font-medium">
              What started as an experiment became a standard.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              What Has Never Changed: Our Core Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Across decades of social, political, and technological change, Alliance has remained anchored to principles that do not trend. They endure.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  At the heart of Alliance is a belief that:
                </p>
                <div className="space-y-4 mb-6">
                  {corePhilosophy.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="font-body text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elevated">
                <img
                  src="/54035275710_1f8e389f5a_b.jpg"
                  alt="Alliance High School core philosophy"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <p className="font-body text-foreground font-medium">
              These values are not taught as theory. They are lived, reinforced, and expected.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Alliance Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              The Alliance Experience: Formation, Not Comfort
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Ask any Old Boy to describe Alliance honestly, and you will hear one recurring theme: It was not easy, and that was the point.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Alliance challenges students to:
                </p>
                <div className="space-y-4 mb-6">
                  {allianceChallenges.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="font-body text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elevated">
                <img
                  src="/53569416700_91c79941c4_b.jpg"
                  alt="Alliance High School experience"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-2">
              The goal has never been comfort.
            </p>
            <p className="font-body text-foreground font-medium">
              The goal has always been formation.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Brotherhood */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              The Brotherhood: Once Alliance, Always Alliance
            </h2>
            <div className="rounded-lg overflow-hidden shadow-elevated mb-6">
              <img
                src="/53802000645_8d62c048d2_b.jpg"
                alt="Alliance High School brotherhood"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Alliance does not produce alumni. It produces Old Boys. That distinction matters.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              An Old Boy does more than remember Alliance. He carries it. In how he approaches work. In how he treats others. In how he responds under pressure.
            </p>
            <p className="font-body text-foreground font-medium">
              The Old Boys Club exists not as a social label, but as a living network of shared values, mutual responsibility, and collective stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Our Role in the Nation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              Our Role in the Nation: Quiet Impact, Lasting Influence
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Alliance men have gone on to shape Kenya and the world across every sector imaginable, often without fanfare, but never without substance.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  The school's influence is measured not just in titles held, but in:
                </p>
                <div className="space-y-4 mb-6">
                  {nationalInfluence.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="font-body text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elevated">
                <img
                  src="/54033954257_d962953377_b.jpg"
                  alt="Alliance High School national influence"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <p className="font-body text-foreground font-medium">
              This quiet consistency is one of Alliance's greatest contributions.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Why the Centenary Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              Why the Centenary Matters: Stewardship, Not Sentiment
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A centenary is not a victory lap. It is a checkpoint.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              It asks difficult but necessary questions:
            </p>
            <div className="space-y-4 mb-6">
              {centenaryQuestions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="font-body text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-foreground font-medium">
              This centenary exists to answer those questions with action, not nostalgia.
            </p>
          </div>
        </div>
      </section>

      {/* 8. The Next 100 Years */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6 font-semibold">
              The Next 100 Years: A Responsibility We Share
            </h2>
            <div className="rounded-lg overflow-hidden shadow-elevated mb-6">
              <img
                src="/54035274815_8bac97cd6d_b.jpg"
                alt="Alliance High School future"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Alliance has given much. The future will demand more.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              The next century will require:
            </p>
            <div className="space-y-4 mb-6">
              {nextCenturyRequires.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="font-body text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-2">
              This is not work for a few. It is a shared responsibility across generations.
            </p>
            <p className="font-body text-foreground font-medium">
              Alliance has always risen to the moment. So must we.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-background mb-6 font-semibold">
              Closing Statement
            </h2>
            <p className="font-body text-background/80 leading-relaxed mb-6 text-lg">
              Alliance High School is not preserved by memory alone. It is preserved by people who understand what it stands for and choose to protect it.
            </p>
            <p className="font-body text-primary font-medium text-xl italic">
              That is who we are. That is why this centenary matters.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
