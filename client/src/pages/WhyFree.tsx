import { Heart, Shield, Users, TrendingUp, CheckCircle2, DollarSign, Lock, AlertCircle, Lightbulb, Target, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhyFree() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            100% Free Forever - No Catch, No Hidden Fees
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Why Is DAYHAAT <span className="text-green-400">Completely Free?</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            The #1 question we get asked. Here's the complete, transparent answer about our funding, 
            our mission, and why we'll never charge you a single rupee.
          </p>
        </div>
      </section>

      {/* The Short Answer */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <Card className="border-4 border-green-500 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">The Short Answer</h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    <strong>DAYHAAT is funded by private investors who believe fantasy sports should be educational, not exploitative.</strong> We don't need to charge users because our investors cover all operational costs. 
                    Our goal isn't to maximize profit—it's to create India's most trusted fantasy cricket platform where users learn, compete, and grow their cricket knowledge without financial pressure.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-green-900 font-semibold">
                      💡 Think of us like Khan Academy or Wikipedia for fantasy cricket—educational platforms funded by people who believe knowledge should be free.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Complete Story */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The Complete Story</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We believe you deserve to know exactly how we operate, who funds us, and why we're committed to staying free forever.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1: Our Educational Mission */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Our Educational Mission Comes First</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      DAYHAAT was founded on a simple belief: <strong>fantasy cricket is one of the best ways to learn cricket strategy, player analysis, and statistical thinking.</strong> But in India, most fantasy platforms are designed around real-money gambling, which creates financial stress, addiction risks, and excludes millions of fans who can't afford to play.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We asked ourselves: <em>"What if we removed money entirely and focused purely on education?"</em> The result is DAYHAAT—a platform where:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Users learn cricket strategy without financial risk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Students and young fans can participate freely</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Competition is based on skill and knowledge, not wallet size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Every feature is designed to teach, not extract money</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: How We're Funded */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">2. How We're Funded (Complete Transparency)</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>DAYHAAT is funded by private investors</strong> who share our vision of fantasy sports as an educational tool. These investors provide the capital needed to cover:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-slate-900 mb-2">💻 Technology Costs</h4>
                        <p className="text-sm text-slate-700">Server hosting, database management, Cricket API subscriptions, development tools</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-slate-900 mb-2">👥 Team Salaries</h4>
                        <p className="text-sm text-slate-700">Developers, designers, customer support, content writers, legal compliance</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-slate-900 mb-2">📊 Data & Analytics</h4>
                        <p className="text-sm text-slate-700">Real-time match data, player statistics, performance tracking systems</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-slate-900 mb-2">⚖️ Legal & Compliance</h4>
                        <p className="text-sm text-slate-700">Legal audits, regulatory compliance, age verification systems, data protection</p>
                      </div>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Why Don't We Just Show Ads Instead?
                      </h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        We could monetize through advertisements, but that would compromise user experience and create conflicts of interest. 
                        Ad-driven platforms prioritize engagement over education, leading to addictive design patterns and manipulative features. 
                        We refuse to go down that path.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Who Are These Investors? */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Who Are These Investors?</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Our investors are <strong>private individuals and family offices</strong> who believe in the social impact of educational technology. 
                      They are not venture capital firms demanding aggressive monetization or user exploitation. Instead, they view DAYHAAT as:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">A Long-Term Social Investment</h4>
                          <p className="text-slate-700 text-sm">They're willing to fund operations for years without expecting immediate financial returns</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">A Proof of Concept</h4>
                          <p className="text-slate-700 text-sm">Demonstrating that fantasy sports can thrive without gambling or exploitation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">A Community Building Exercise</h4>
                          <p className="text-slate-700 text-sm">Creating a positive brand associated with education, integrity, and cricket passion</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Important:</strong> Our investors have <em>zero</em> involvement in day-to-day operations, content decisions, or user data. 
                      They provide funding and trust our team to execute the educational mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Will You Ever Charge Money? */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-7 h-7 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Will You Ever Charge Money?</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong className="text-red-600">No. Never.</strong> Here's our commitment:
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-600" />
                          Our Permanent Pledge
                        </h4>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span><strong>No entry fees</strong> for contests—ever</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span><strong>No premium subscriptions</strong> or paid features</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span><strong>No in-app purchases</strong> or virtual currency sales</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span><strong>No advertisements</strong> that disrupt user experience</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span><strong>No data selling</strong> to third parties</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>What if funding runs out?</strong> If our current investors can no longer support the platform, we would:
                    </p>
                    <ol className="space-y-2 ml-6 mb-4">
                      <li className="text-slate-700">1. Seek additional mission-aligned investors who share our values</li>
                      <li className="text-slate-700">2. Explore ethical sponsorships (e.g., cricket equipment brands) that don't compromise user experience</li>
                      <li className="text-slate-700">3. Open-source the platform so the community can run it independently</li>
                    </ol>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>What we will NEVER do:</strong> Convert to a paid model, introduce real-money gambling, or sell user data. 
                      If we can't sustain the free model ethically, we'll shut down rather than betray our users' trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: What Do You Get Out of This? */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">5. What Do You Get Out of This?</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Fair question. If we're not making money from users, what's in it for us? Here's the honest answer:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-slate-900 mb-2">🎯 Building a Trusted Brand</h4>
                        <p className="text-slate-700 text-sm">
                          By operating transparently and putting users first, we're building long-term trust and loyalty. 
                          A large, engaged user base is valuable—not for exploitation, but as proof that ethical fantasy sports can succeed.
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-slate-900 mb-2">📚 Creating Social Impact</h4>
                        <p className="text-slate-700 text-sm">
                          Our team genuinely believes fantasy cricket can teach critical thinking, data analysis, and strategic planning. 
                          Seeing users learn and grow is our primary motivation.
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-slate-900 mb-2">🚀 Future Ethical Monetization (Maybe)</h4>
                        <p className="text-slate-700 text-sm">
                          In the distant future, if we have millions of users, we <em>might</em> explore ethical revenue streams like:
                        </p>
                        <ul className="mt-2 space-y-1 ml-4 text-slate-700 text-sm">
                          <li>• Optional premium analytics tools (with 100% free core features)</li>
                          <li>• Non-intrusive brand partnerships with cricket equipment companies</li>
                          <li>• Educational courses or coaching services (separate from the free platform)</li>
                        </ul>
                        <p className="text-slate-700 text-sm mt-2">
                          <strong>But this is speculative.</strong> For now, and the foreseeable future, everything remains 100% free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust-Building FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              We believe in complete transparency. Here are answers to the most common concerns.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this too good to be true?",
                a: "We understand the skepticism—most 'free' platforms have hidden costs. But DAYHAAT is genuinely free because we're funded by investors who view this as a social investment, not a profit-maximizing business. Think of us like Wikipedia or Khan Academy for fantasy cricket."
              },
              {
                q: "How do I know you won't suddenly start charging?",
                a: "We've made a public commitment on this page. If we ever betray that promise, our entire brand and reputation would be destroyed. Our investors understand this is a long-term educational project, not a short-term cash grab."
              },
              {
                q: "Are you collecting my data to sell it?",
                a: "No. We collect only the data necessary to operate the platform (email, username, team selections). We do NOT sell, rent, or share your data with advertisers, data brokers, or third parties. Read our Privacy Policy for complete details."
              },
              {
                q: "Why not just show ads like other free platforms?",
                a: "Ad-driven platforms are incentivized to maximize screen time and engagement, often through manipulative design. We prioritize education over addiction. Showing ads would compromise our mission and user experience."
              },
              {
                q: "What happens if your investors pull out?",
                a: "We have multi-year funding commitments. If funding becomes uncertain, we'll communicate transparently with users and explore ethical alternatives (new investors, sponsorships, or open-sourcing). We will never surprise users with sudden fees or gambling features."
              },
              {
                q: "Can I donate or support DAYHAAT?",
                a: "We appreciate the sentiment, but we're not accepting donations at this time. Our investors have committed to funding operations. The best way to support us is to use the platform, share it with friends, and provide feedback to help us improve."
              }
            ].map((faq, i) => (
              <Card key={i} className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-700 font-bold text-xs">Q</span>
                    </div>
                    {faq.q}
                  </h3>
                  <p className="text-slate-700 leading-relaxed ml-8">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="container max-w-4xl text-center">
          <Award className="w-20 h-20 mx-auto mb-6 text-green-300" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Free Fantasy Cricket?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            No credit card. No hidden fees. No risk. Just pure cricket strategy and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 font-bold px-10 h-14 text-lg rounded-full shadow-xl">
                Start Playing Free
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-14 text-lg rounded-full px-8 backdrop-blur-sm">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <p className="text-sm text-green-200 mt-8">
            Join thousands of cricket fans learning and competing without financial pressure
          </p>
        </div>
      </section>
    </div>
  );
}
