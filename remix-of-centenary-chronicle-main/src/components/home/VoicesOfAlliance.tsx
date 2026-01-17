import { Quote } from 'lucide-react';

export function VoicesOfAlliance() {
  const voices = [
    '"It taught me discipline."',
    '"It toughened me."',
    '"It prepared me for life, not comfort."',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">
            Voices of Alliance
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Stories That Still Shape Us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="font-body text-center text-muted-foreground mb-8 text-lg">
            Ask any Old Boy what Alliance gave him, and you'll rarely hear a rehearsed answer.
          </p>
          
          <p className="font-body text-center text-muted-foreground mb-8">
            You'll hear:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {voices.map((voice, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card hover-lift text-center">
                <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-body text-foreground italic text-lg">{voice}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-center text-muted-foreground max-w-3xl mx-auto">
            This centenary platform will capture reflections, stories, and lessons from across generations because the lived experience of Alliance boys is one of its greatest assets.
          </p>
        </div>
      </div>
    </section>
  );
}
