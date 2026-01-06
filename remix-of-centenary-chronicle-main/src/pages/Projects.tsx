import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle2, Heart, Mountain, Activity, Building2, Shield, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('enkisoma');
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);



  const donationOptions = [
    { id: 'enkisoma', name: 'Enkisoma Lab', paybill: '901959', account: 'Enkisoma + school number (e.g. Enkisoma6868)' },
    { id: 'chapel', name: 'Trinity Multipurpose Complex', paybill: '931926', account: 'Chapel+Sch.No+Year (e.g Chapel68091999)' },
    { id: 'bmg', name: 'BMG Fund', paybill: '901959', account: 'BMG + [Your School Number]' },
    { id: 'ahseft', name: 'AHSEFT Endowment', paybill: 'N/A', account: 'Bank Transfer Only' },
  ];


  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
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
            Our Projects
          </h1>
          <p className="font-body text-background/80 text-lg">Building the Future, One Project at a Time</p>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0 text-background"
          viewBox="0 0 1440 100"
          fill="currentColor"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-5">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Sticky Horizontal Tab Navigation */}
            <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border mb-8 -mx-5 px-5 py-2">
              <TabsList className="w-full h-auto bg-muted/30 p-1 justify-start gap-1 overflow-x-auto">
                <TabsTrigger
                  value="enkisoma"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm whitespace-nowrap px-4 py-2"
                >
                  Enkisoma Lab
                </TabsTrigger>
                <TabsTrigger
                  value="bmg"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm whitespace-nowrap px-4 py-2"
                >
                  Busherian Mountaineers Group Fund
                </TabsTrigger>
                <TabsTrigger
                  value="acr"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm whitespace-nowrap px-4 py-2"
                >
                  Classic Run (ACR)
                </TabsTrigger>
                <TabsTrigger
                  value="chapel"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm whitespace-nowrap px-4 py-2"
                >
                  Trinity Multipurpose Complex
                </TabsTrigger>
                <TabsTrigger
                  value="ahseft"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm whitespace-nowrap px-4 py-2"
                >
                  Endowment (AHSEFT)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: Enkisoma Computer Lab Appeal */}
            <TabsContent value="enkisoma" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Equipping the Next Generation for the STEM Frontier</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Challenge</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Alliance High School serves 1,850 students with only 80 devices. These devices lack preloaded content and require active internet to function.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Solution</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      In partnership with <em>Cool4School</em>, we are launching the Enkisoma Lab. These devices are bundled with offline, competency-based curriculum content.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Impact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Affordable, high-quality learning.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Relevant STEM skills for the global market.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Curriculum-aligned offline access.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project Image */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Project Overview</h3>
                    <div className="rounded-lg overflow-hidden shadow-elevated">
                      <img
                        src="/53568977371_785702acd9_b.jpg"
                        alt="Enkisoma Lab"
                        className="w-full h-80 md:h-96 object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-display text-xl font-semibold mb-4 text-foreground">To Donate</h3>
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="font-body font-medium text-foreground mb-1">M-Pesa:</p>
                        <p className="font-body text-muted-foreground">Paybill No: 901959</p>
                        <p className="font-body text-muted-foreground">Account Name: Enkisoma + school number; e.g. Enkisoma6868</p>
                      </div>
                      <div>
                        <p className="font-body font-medium text-foreground mb-1">Bank:</p>
                        <p className="font-body text-muted-foreground">NCBA Bank, Upper Hill Branch</p>
                        <p className="font-body text-muted-foreground">A/C No.: 813 111 0018</p>
                      </div>
                    </div>
                    <p className="font-body text-foreground leading-relaxed">
                      Any amount will be highly appreciated. Your support will go a long way towards securing the future of Alliance High School and its ability to deliver quality education to the many boys from Kenya and beyond who will walk through its gates in search of an education.
                    </p>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="font-body text-sm text-muted-foreground">
                        For more information email us at <a href="mailto:secretariat@ahsobc.org" className="text-primary hover:underline">secretariat@ahsobc.org</a> or call us on <a href="tel:+254706676786" className="text-primary hover:underline">0706 676 786</a>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Busherian Mountaineers Group (BMG) Fund */}
            <TabsContent value="bmg" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mountain className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Honouring a Legend, Educating Future Leaders</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Origin</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Born in 2015, a group of Old Boys used their passion for mountain climbing (Mt. Kenya & Kilimanjaro) to raise over KShs 2M for the endowment fund.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The KSN Matiba – BMG Scholarships</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      Named in honor of the late Hon. Kenneth S.N. Matiba (AHS Index 1170), these scholarships target students who demonstrate:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Financial need.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Active participation in sports.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Community volunteering.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Proven leadership in school life.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <p className="font-body text-foreground font-medium mb-4">
                      <strong>Goal:</strong> We are building the endowment to KShs 2M+ to ensure these scholarships last for generations.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      <a
                        href="https://www.ahsobc.org/bmg-scholarship-award/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        KSN Matiba – BMG Scholarships Award Notification Letter
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Alliance Classic Run (ACR) */}
            <TabsContent value="acr" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Running with Purpose</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Event</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      A wholly volunteer-led annual charity run (held every 3rd Saturday of May) designed to mobilize the alumni community.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Mission Objectives</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground"><strong>Endowment:</strong> Building the ACR Fund managed by AHSEFT.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground"><strong>Facilities:</strong> Maintaining and developing school sports infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground"><strong>Talent:</strong> Funding student participation in inter-school competitions.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <p className="font-body text-foreground font-medium mb-2">
                      <strong>The 10-Year Target:</strong> KShs 200 Million.
                    </p>
                    <p className="font-body text-foreground font-medium mb-4">
                      <strong>Next Race:</strong> Saturday, 17th May 2025 at AHS Kikuyu.
                    </p>
                    <Button
                      asChild
                      variant="default"
                      className="w-full sm:w-auto"
                    >
                      <a
                        href="https://www.ahsobc.org/acr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 4: The Trinity Multipurpose Complex */}
            <TabsContent value="chapel" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Trinity Multipurpose Complex</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Call to Action</h3>
                    <p className="font-body text-xl font-semibold text-foreground mb-2">Let's do this.</p>
                    <p className="font-body text-xl font-semibold text-foreground mb-4">Donate/pledge today!</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Need</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Over the years, the school has recorded a steady increase in the student population, leading to stress in the limited physical resources, the chapel being a perfect example. The current chapel was designed to accommodate 800 students as opposed to the current over 2,000 students. It has undergone modifications to cater for this extra number i.e. it has a 'mabati' structure at the entrance that serves as an extension. Further, the chapel is in a dilapidated state due of its age and daily use. These challenges necessitated the need of a new chapel.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">The Project</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      The Trinity Multipurpose Complex, now under construction was designed in 2016 by Architects Eric Kamau, Aggrey Maganga and Dr. Noel J. O. Okello. The complex is comprised of a Chapel with a a sitting capacity of 4,500 which is approximately five times the capacity of the current chapel. The aesthetically pleasing complex will have an amphitheater with a sitting capacity of 500 people as well as a legacy library to curate the history, records and artifacts of Alliance High School. The complex will serve the school another for 50 years. This is the first project of the grand masterplan of AHS for the next 100 years.
                    </p>
                    <p className="font-body text-foreground leading-relaxed">
                      We call upon the great alums of Alliance High School to help redefine the infrastructure story in the school and enhance the chapel experience, an experience we all relate to by the beautiful hymns we used to sing.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      For more information about the chapel download the infographic and FAQ. In addition, hear our alumni speak about the project on our YouTube channel.
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      <strong>Contact details:</strong> For more information email O.B.C Secretariat <a href="mailto:secretariat@ahsobc.org" className="text-primary hover:underline">secretariat@ahsobc.org</a> or call <a href="tel:+254706676786" className="text-primary hover:underline">+254 706 676786</a>. You can also contact Francis Muema (<a href="tel:+254722659041" className="text-primary hover:underline">+254 722 659 041</a>).
                    </p>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Contribution Details</h3>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <h4 className="font-body font-semibold text-foreground mb-2">For Electronic Transfers/ Cheques</h4>
                        <p className="font-body text-muted-foreground">Account Name: Alliance High School Endowment Fund Trust</p>
                        <p className="font-body text-muted-foreground">Bank: I&M Bank</p>
                        <p className="font-body text-muted-foreground">Branch: I&M Tower, Kenyatta Avenue, Nairobi</p>
                        <p className="font-body text-muted-foreground">Account Number: 00101624511410</p>
                      </div>

                      <div>
                        <h4 className="font-body font-semibold text-foreground mb-2">For M-Pesa Payments</h4>
                        <p className="font-body text-muted-foreground">Paybill Number: 931926</p>
                        <p className="font-body text-muted-foreground">Account Name: Chapel+Sch.No+Year (e.g Chapel68091999)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 5: AHSEFT (Endowment Fund Trust) */}
            <TabsContent value="ahseft" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-3xl">Alliance High School Endowment Fund Trust</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Our Purpose</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      The principal reasons for the existence of the Alliance High School Endowment Fund Trust (AHSEFT) are:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Raising of endowment funds;</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Managing through investment activity of these endowment funds; and</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">Disbursing the proceeds of investments of the managed endowment funds towards identified needs, mainly: paying for scholarships for needy students at AHS, and paying for infrastructure at AHS.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">What is an Endowment Fund?</h3>
                    <p className="font-body text-muted-foreground leading-relaxed italic">
                      "An endowment fund is an investment fund established by a foundation that makes consistent withdrawals from invested capital. The capital in endowment funds, often used by universities, nonprofit organizations, churches and hospitals, is generally utilized for specific needs or to further a company's operating process. Endowment funds are typically funded entirely by donations that are deductible for the donors."
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-2">~ www.investopedia.com</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Our Roots</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      The AHSEFT was established through an irrevocable trust deed, on 1 October 2010. The deed has subsequently been revised to reflect changes in its operating environment.
                    </p>
                    <p className="font-body text-muted-foreground leading-relaxed mt-4">
                      The AHSEFT so far manages the following funds:
                    </p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">The Alliance Classic Run Fund</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">The KSN Matiba – Busherian Mountaineers Group Fund</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">A General Fund</span>
                      </li>
                    </ul>
                    <p className="font-body text-muted-foreground leading-relaxed mt-4">
                      The AHSEFT is open to receiving endowments from well-wishers, towards receiving and managing not just funds towards existing funds (listed above) but also towards new funds that you may wish to create in partnership with the AHSEFT, and endow.
                    </p>
                    <p className="font-body text-foreground mt-2">
                      Talk to us through our secretariat on this email: <a href="mailto:secretariat@ahsobc.org" className="text-primary hover:underline">secretariat@ahsobc.org</a> for details on how you can go about this.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Governance Structures</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      The Trustees of the AHSEFT have always been committed towards best practices in the management of its affairs.
                    </p>
                    <p className="font-body text-muted-foreground leading-relaxed mt-4">
                      AHSEFT has an Investment Policy Statement that is intended to govern the investment practices of the assets of the Alliance High School Endowment Fund Trust ("AHSEFT"), so that all individuals with either direct or indirect responsibility may understand and manage AHSEFT investment assets, hereafter referred to as the "Funds".
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Accountability and Transparency</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      The AHSEFT keeps books of account that are subjected to financial audit. Upon completion of an ongoing audit process, we shall upload the audited financial statements of the AHSEFT.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">How to be Part of This Noble Programme</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      As an old boy, or a friend of the OBC, you can support the scholarships programme as follows:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">By sponsoring a student(s) in your individual/ family capacity;</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">By sponsoring a student(s) as a class. For instance, the class of 1993 currently sponsors 4 students;</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">By making a grant to AHSEFT, to be managed and disbursed per the Trust Deed, Investment Policy and donor's stipulations.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        variant="default"
                        className="flex-1"
                      >
                        <a
                          href="https://www.ahsobc.org/projects/ahseft/investment-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Investment Policy
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href="https://www.ahsobc.org/projects/ahseft/donation/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          AHSEFT Donation Form
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sticky One-Click Donate Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={donateDialogOpen} onOpenChange={setDonateDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <DollarSign className="w-6 h-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Quick Donate</DialogTitle>
              <DialogDescription>Select a project to view donation details</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-4">
              {donationOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setSelectedDonation(option.id);
                    setDonateDialogOpen(false);
                    // Scroll to the relevant tab
                    setActiveTab(option.id);
                  }}
                  className={cn(
                    'w-full text-left p-4 rounded-lg border transition-all',
                    selectedDonation === option.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  )}
                >
                  <div className="font-body font-semibold text-foreground mb-1">{option.name}</div>
                  <div className="font-body text-sm text-muted-foreground">
                    {option.paybill !== 'N/A' ? (
                      <>Paybill: {option.paybill} | Account: {option.account}</>
                    ) : (
                      option.account
                    )}
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Projects;

