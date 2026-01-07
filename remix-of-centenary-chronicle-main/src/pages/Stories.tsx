import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
    name: 'Johnson Kirongothi',
    year: 'Class of 1985',
    title: 'Educator & Author',
    text: 'The classrooms where I once sat as a student became the very spaces where I would later inspire generations of young minds. The teachers who shaped my understanding of literature and critical thinking showed me that education is not merely about imparting knowledge, but about igniting curiosity and nurturing character. My journey from student to educator to author has been a testament to the transformative power of learning that this institution instilled in me.',
    quote: '"This school didn\'t just educate me—it transformed how I see the power of knowledge and the responsibility of sharing it with others."',
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
    title: 'Geospace Engineer, Current Chairperson of Old Boys Club',
    text: 'From the science laboratories where I first discovered my passion for understanding the world around us, to leading groundbreaking research in geospace engineering, this school taught me that curiosity combined with discipline leads to extraordinary achievements. Now, as Chairperson of the Old Boys Club, I have the privilege of giving back to the institution that shaped me, ensuring that future generations continue to benefit from the same foundation of excellence and brotherhood that guided my path.',
    quote: '"The same principles of precision and dedication that guide my work in geospace engineering were first instilled within these walls."',
  },
];

const Stories = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Wire this form up to the backend/database when connection details are available.
  }

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

      {/* Intro & Submission Section */}
      <section className="py-16 bg-muted/40 border-b border-border/60">
        <div className="container mx-auto px-5 max-w-4xl flex flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-bold">
              Stories From Old Boys
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Welcome to our collection of stories from Old Boys of Alliance High School. Here, we celebrate the journeys,
              lessons, and memories of those who once walked these halls and now carry the school&apos;s values into the world.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              If you are an Old Boy and would like to share your story, we warmly invite you to submit it using the form below.
              Your experience could inspire the next generation of Old Boys.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[260px] flex justify-start md:justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl" className="w-full md:w-auto">
                  Share Your Story
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Submit Your Story</DialogTitle>
                  <DialogDescription>
                    Share your journey as an Old Boy of Alliance High School. The details below match the information shown on
                    the story cards.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="classOf">Class Of</Label>
                    <Input id="classOf" name="classOf" placeholder="e.g. Class of 1998" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Title / Role</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g. Chief Executive Officer, Tech Innovations Ltd"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote">Quote</Label>
                    <Input
                      id="quote"
                      name="quote"
                      placeholder='A short quote, e.g. "This school didn&apos;t just educate me—it transformed how I see leadership."'
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story">Your Story</Label>
                    <Textarea
                      id="story"
                      name="story"
                      placeholder="Share your experience, memories, and how Alliance shaped your journey."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <Button type="submit" variant="hero">
                      Submit Story
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-bold">
              Let&apos;s Finish What We Started
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Together, we can continue the legacy of excellence that has defined Alliance High School for a century. Join us in shaping the next 100 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  Support Our Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-primary">
                    Share Your Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Submit Your Story</DialogTitle>
                    <DialogDescription>
                      Share your journey as an Old Boy of Alliance High School. The details below match the information shown on
                      the story cards.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="cta-name">Name</Label>
                      <Input id="cta-name" name="name" placeholder="Your full name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-classOf">Class Of</Label>
                      <Input id="cta-classOf" name="classOf" placeholder="e.g. Class of 1998" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-title">Title / Role</Label>
                      <Input
                        id="cta-title"
                        name="title"
                        placeholder="e.g. Chief Executive Officer, Tech Innovations Ltd"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-quote">Quote</Label>
                      <Input
                        id="cta-quote"
                        name="quote"
                        placeholder='A short quote, e.g. "This school didn&apos;t just educate me—it transformed how I see leadership."'
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-story">Your Story</Label>
                      <Textarea
                        id="cta-story"
                        name="story"
                        placeholder="Share your experience, memories, and how Alliance shaped your journey."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <Button type="submit" variant="hero">
                        Submit Story
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stories;


