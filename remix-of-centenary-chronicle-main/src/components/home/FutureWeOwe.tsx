import { HelpCircle } from 'lucide-react';

export function FutureWeOwe() {
  const questions = [
    'Do Old Boys still care?',
    'Does this brotherhood still show up?',
    'Are the values still real, or just spoken about?',
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-background mb-4 font-semibold">
            The Future We Owe
          </h2>
          <p className="font-body text-lg text-background/80 max-w-3xl mx-auto">
            The Next Generation of Alliance boys
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="font-body text-center text-background/80 mb-8 text-lg">
            Today's students are watching us—whether we realize it or not.
          </p>
          
          <p className="font-body text-center text-background/80 mb-8">
            They are asking:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {questions.map((question, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-sm border border-background/20 p-6 rounded-lg text-center">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-body text-background font-medium">{question}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="font-body text-background/80 text-lg font-medium">
              The centenary answers those questions decisively.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-background/80">
              <span>By showing up.</span>
              <span>By contributing.</span>
              <span>By staying involved.</span>
            </div>
            <p className="font-body text-background/80 mt-6">
              Because Alliance did its part for us.
            </p>
            <p className="font-body text-primary font-semibold text-xl">
              Now it's our turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
