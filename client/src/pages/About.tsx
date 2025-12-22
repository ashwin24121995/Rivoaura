import { Shield, Heart, Target, Users, TrendingUp, Award, Lock, CheckCircle2, AlertCircle, Scale, Zap, Trophy, BarChart3, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-about.png" 
            alt="RIVOAURA Team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="container relative z-10 text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            Built for Cricket Lovers, By Cricket Lovers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About RIVOAURA</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            India's most transparent free-to-play fantasy cricket platform, dedicated to education, skill development, and pure love for the game.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              <strong>RIVOAURA</strong> is not just another fantasy cricket platform—we are a movement to democratize fantasy sports education in India. We believe that fantasy cricket is more than entertainment; it is a powerful tool for learning cricket strategy, understanding player analytics, and developing critical thinking skills.
            </p>
            <p>
              Unlike traditional fantasy platforms that operate on a pay-to-play model, we have built a completely free ecosystem where users can experience the thrill of team management, strategic decision-making, and competitive gameplay without any financial pressure. Our platform is designed for cricket enthusiasts who want to deepen their understanding of the game, test their analytical skills, and compete purely for glory and recognition.
            </p>
            <p>
              We are backed by private investors who share our vision of fantasy sports as an educational medium. This funding model allows us to operate without charging users, selling personal data, or displaying intrusive advertisements. Every feature, every design choice, and every policy decision is made with one goal in mind: <strong>to create the most authentic, transparent, and user-friendly fantasy cricket experience in India.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Company Information</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <Card className="border-slate-200 bg-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-600" />
                    Legal Entity
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    RIVOAURA is owned and operated by <strong>RIVOAURA PRIVATE LIMITED</strong>, a legally registered Indian private limited company incorporated under the Companies Act, 2013.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="text-sm text-slate-600 mb-1">Registered Office:</div>
                    <div className="font-semibold text-slate-900">
                      Kodagu District<br />
                      Karnataka, India
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Regulatory Status
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We operate in full compliance with Indian laws governing skill-based games. Fantasy cricket is recognized as a <strong>"Game of Skill"</strong> under the Public Gambling Act, 1867, and various state-specific regulations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Compliant with Public Gambling Act, 1867</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Adheres to state-specific gaming regulations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Zero real money transactions</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission, Vision & Values</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  To make fantasy cricket accessible to every Indian cricket fan, regardless of their financial background, by providing a completely free, educational, and skill-based platform that fosters strategic thinking, analytical skills, and a deeper appreciation for the game.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-yellow-50 to-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed">
                  To become India's most trusted and beloved fantasy sports platform, recognized not for prize money or gambling, but for our commitment to education, transparency, and building a community of informed, strategic cricket enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Integrity First</h4>
                <p className="text-slate-600 leading-relaxed">
                  We operate with complete honesty and transparency. No hidden fees, no data selling, no misleading promises. What you see is exactly what you get.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">User-Centric Design</h4>
                <p className="text-slate-600 leading-relaxed">
                  Every feature is built with the user in mind. We prioritize ease of use, accessibility, and a seamless experience over flashy gimmicks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Education Over Profit</h4>
                <p className="text-slate-600 leading-relaxed">
                  We measure success not by revenue, but by how many users learn, improve, and develop a deeper love for cricket through our platform.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Safety & Compliance</h4>
                <p className="text-slate-600 leading-relaxed">
                  We strictly adhere to all legal requirements, age restrictions, and state regulations to ensure a safe, responsible gaming environment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Innovation & Quality</h4>
                <p className="text-slate-600 leading-relaxed">
                  We continuously improve our platform with cutting-edge features, real-time analytics, and a polished user experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Community Building</h4>
                <p className="text-slate-600 leading-relaxed">
                  We foster a supportive, respectful community where users can share strategies, celebrate victories, and learn from each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Makes Us Different</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              In a crowded fantasy sports market, we stand apart through our unwavering commitment to transparency, education, and user welfare.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">100% Free Forever</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We do not charge entry fees, subscription costs, or hidden charges of any kind. Our platform is funded by private investors who believe in fantasy sports as education, not gambling. This means you can create unlimited teams, join unlimited contests, and compete without ever spending a single rupee.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Financial Risk</h3>
                    <p className="text-slate-700 leading-relaxed">
                      There is no real money involved at any stage. You cannot deposit money, you cannot win money, and you cannot lose money. This eliminates the psychological pressure, addiction risks, and financial stress associated with real-money gaming. You play purely for skill development and competitive satisfaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Educational Focus</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Every feature is designed to teach. Our detailed point system explanations, player statistics, match analysis articles, and strategy guides help users understand cricket at a deeper level. We provide context for every decision, helping you learn why certain players perform better in specific conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Transparency</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We openly share our ownership details, funding model, legal compliance status, and operational practices. There are no secret algorithms, hidden terms, or unclear policies. Every rule, every point calculation, and every decision-making process is documented and accessible to all users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Focus On</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Skill Development
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We help users develop critical thinking, data analysis, and strategic planning skills through fantasy cricket. By analyzing player form, pitch conditions, weather forecasts, and head-to-head records, users learn to make informed decisions under uncertainty—a valuable life skill beyond cricket.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-600" />
                Community Engagement
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We foster a vibrant community where cricket fans can discuss strategies, share insights, and celebrate the game together. Our forums, leaderboards, and social features create a sense of belonging and healthy competition without the toxicity of money-driven platforms.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                Fair Competition
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We ensure a level playing field for all users. Our anti-cheating mechanisms, bot detection systems, and fair play policies guarantee that success is determined solely by skill and knowledge, not by exploiting loopholes or using unfair advantages.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-600" />
                Responsible Gaming
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We promote healthy gaming habits by eliminating financial incentives, enforcing age restrictions, and complying with state regulations. Our platform is designed for entertainment and education, not addiction or compulsion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Transparency */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Model Transparency</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We believe users deserve to know exactly how we operate and sustain our platform.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">How Do We Make Money?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong>Short answer: We don't.</strong> RIVOAURA operates on a <strong>pre-funded model</strong>. We are backed by private investors who believe in the educational and social value of fantasy sports. These investors have provided capital to build and maintain the platform without expecting immediate financial returns.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We do NOT generate revenue through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 mt-4">
                <li>Entry fees or subscription charges (we're 100% free)</li>
                <li>Selling user data to third parties (your privacy is sacred)</li>
                <li>Displaying advertisements (we want a clean, distraction-free experience)</li>
                <li>In-app purchases or premium features (everyone gets the full experience)</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Why Would Investors Fund a Free Platform?</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our investors share a vision of <strong>fantasy sports as education, not gambling</strong>. They recognize that traditional fantasy platforms have created a negative perception of the industry due to aggressive monetization and gambling-like mechanics.
              </p>
              <p className="text-slate-300 leading-relaxed">
                By funding a completely free platform, they aim to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 mt-4">
                <li>Demonstrate that fantasy sports can be educational and socially beneficial</li>
                <li>Build a large, engaged user base that values skill over money</li>
                <li>Create a positive brand associated with integrity and transparency</li>
                <li>Potentially explore ethical monetization models in the future (with full user consent and transparency)</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Will You Ever Charge Users?</h3>
              <p className="text-slate-300 leading-relaxed">
                <strong>Our core platform will always remain 100% free.</strong> We are committed to ensuring that anyone can create teams, join contests, and compete without paying. However, in the future, we may introduce optional premium features (such as advanced analytics tools or exclusive content) that users can choose to purchase—but the core fantasy experience will never be paywalled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Compliance */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Government Compliance & Safety</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We operate in strict accordance with Indian laws and regulations to ensure a safe, legal, and responsible gaming environment.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-3">Age Restriction (18+)</h3>
                    <p className="text-red-800 leading-relaxed mb-4">
                      <strong>Only users who are 18 years of age or older are permitted to use RIVOAURA.</strong> This is a strict legal requirement under Indian law. During registration, users must provide their date of birth, and our system automatically rejects accounts for individuals under 18.
                    </p>
                    <p className="text-red-800 leading-relaxed">
                      <strong>Why this restriction exists:</strong> Fantasy sports involve strategic decision-making and competition, which are considered appropriate only for adults. This age limit ensures that users have the maturity to engage responsibly with the platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-3">State Restrictions</h3>
                    <p className="text-orange-800 leading-relaxed mb-4">
                      <strong>RIVOAURA is NOT available to residents of the following Indian states:</strong>
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Andhra Pradesh
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Assam
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Nagaland
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Odisha
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Sikkim
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200 text-center font-semibold text-orange-900">
                        Telangana
                      </div>
                    </div>
                    <p className="text-orange-800 leading-relaxed">
                      <strong>Why these restrictions exist:</strong> These states have specific laws that prohibit or heavily regulate online games of skill, including fantasy sports. To ensure full legal compliance, we have proactively blocked access from these regions. During registration, users must select their state of residence, and accounts from restricted states are automatically rejected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">Regulatory Compliance</h3>
                    <p className="text-green-800 leading-relaxed mb-4">
                      Fantasy cricket is legally classified as a <strong>"Game of Skill"</strong> under the Public Gambling Act, 1867, and is permitted in most Indian states. Unlike games of chance (such as lotteries or slot machines), fantasy cricket requires knowledge, strategy, and analytical thinking to succeed.
                    </p>
                    <p className="text-green-800 leading-relaxed">
                      <strong>Our compliance measures include:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-green-800 mt-4">
                      <li>Strict age verification during registration</li>
                      <li>Geo-blocking for restricted states</li>
                      <li>Zero real money transactions (eliminating gambling classification)</li>
                      <li>Transparent point system and contest rules</li>
                      <li>Regular legal audits to ensure ongoing compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero Financial Risk */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Zero Financial Risk</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We have deliberately designed our platform to eliminate all financial risk and pressure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p>
                <strong>There is no real money involved at any stage of the RIVOAURA experience.</strong> This is not a marketing claim—it is a fundamental design principle that shapes every aspect of our platform.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What This Means for You:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Deposits:</strong> You cannot add money to your account. There is no wallet, no payment gateway, and no option to purchase credits or coins.
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Withdrawals:</strong> You cannot win money. Even if you top the leaderboard, you receive digital badges and recognition—not cash prizes.
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Entry Fees:</strong> Every contest is free to join. You can create unlimited teams and participate in unlimited contests without spending a single rupee.
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Psychological Pressure:</strong> Because there's no money at stake, you can experiment with risky strategies, learn from mistakes, and enjoy the game without fear of financial loss.
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Addiction Risk:</strong> Research shows that financial incentives are a major driver of gaming addiction. By removing money from the equation, we eliminate this risk factor.
                  </div>
                </div>
              </div>

              <p className="mt-8">
                <strong>This approach allows you to focus on what truly matters:</strong> improving your cricket knowledge, testing your analytical skills, and competing for the sheer joy of the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Operate</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Team Building Mechanics
              </h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our team-building system is designed to mirror real cricket management decisions. Here's how it works:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">1. Credit Budget System</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Every user gets <strong>100 credits</strong> to build their 11-player team. Players are assigned credit values based on their real-world performance, form, and role. Star players cost more credits, while emerging talents are more affordable. This forces strategic trade-offs—do you spend heavily on 2-3 superstars, or build a balanced squad of consistent performers?
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">2. Team Composition Rules</h4>
                    <p className="text-slate-700 leading-relaxed">
                      To ensure balanced teams, we enforce strict composition rules:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2 ml-4">
                      <li>Minimum 1 Wicket-Keeper (WK), Maximum 4</li>
                      <li>Minimum 3 Batsmen (BAT), Maximum 6</li>
                      <li>Minimum 1 All-Rounder (AR), Maximum 4</li>
                      <li>Minimum 3 Bowlers (BOW), Maximum 6</li>
                      <li>Maximum 7 players from a single team</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">3. Captain & Vice-Captain Selection</h4>
                    <p className="text-slate-700 leading-relaxed">
                      After selecting your 11 players, you must choose a <strong>Captain</strong> (who earns 2x points) and a <strong>Vice-Captain</strong> (who earns 1.5x points). This decision is crucial—a well-chosen captain can single-handedly win you a contest, while a poor choice can cost you dearly. This mirrors the real-world importance of leadership in cricket.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">4. Deadline & Substitutions</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Teams must be finalized before the match starts. Once the match begins, no changes are allowed. This teaches users to plan ahead, monitor team news, and make informed decisions under time pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Leaderboards & Recognition
              </h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Since we don't offer cash prizes, our reward system is built around <strong>recognition, achievement, and community status</strong>.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Weekly Leaderboards</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Every week, we rank users based on their total fantasy points across all contests. The top performers are prominently displayed on our homepage and receive a "Weekly Champion" badge. This resets every Monday, giving everyone a fresh chance to compete.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Monthly Leaderboards</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Monthly rankings reward consistency and sustained performance. Users who consistently finish in the top 10% earn "Elite Manager" status and exclusive profile badges.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">All-Time Leaderboards</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Our all-time leaderboard tracks cumulative points since account creation. This creates a long-term competitive goal and recognizes users who have demonstrated sustained excellence over months or years.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Achievement Badges</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Users earn digital badges for milestones such as "First Team Created," "10 Contests Joined," "Top 10 Finish," "Perfect Captain Pick," and more. These badges are displayed on user profiles and serve as a visual representation of experience and skill.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Community Recognition</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Top performers are featured in our blog, community forums, and social media channels. We celebrate strategic brilliance, underdog victories, and creative team selections to foster a culture of appreciation and learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              We promise to <strong>always keep RIVOAURA 100% free</strong> for core fantasy cricket gameplay. No hidden fees, no paywalls, no bait-and-switch tactics.
            </p>
            <p>
              We promise to <strong>never sell your personal data</strong> to third parties. Your privacy is non-negotiable.
            </p>
            <p>
              We promise to <strong>operate with complete transparency</strong>. Any changes to our policies, features, or business model will be communicated clearly and in advance.
            </p>
            <p>
              We promise to <strong>listen to our community</strong>. Your feedback shapes our roadmap, and we actively engage with users to improve the platform.
            </p>
            <p>
              We promise to <strong>uphold the highest standards of integrity</strong>. Fair play, legal compliance, and user welfare will always come before profit.
            </p>
          </div>

          <div className="mt-12">
            <a href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-10 py-4 rounded-full text-lg transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
