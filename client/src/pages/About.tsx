import { Shield, Heart, Users, Target, Award, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-about.png" 
            alt="Elite Squad Sports Team Strategy" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="container relative z-10 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Elite Squad Sports</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            India's most transparent free-to-play fantasy cricket platform, built for education and entertainment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why We Exist</h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              <strong>Elite Squad Sports</strong> was founded with a singular vision: to democratize fantasy cricket education in India. 
              We believe that understanding cricket strategy, player analytics, and team composition should be accessible to everyone—without 
              the financial pressure of real-money gaming.
            </p>

            <p>
              In an industry dominated by cash-based platforms, we took a different path. We are <strong>backed by investors who believe in 
              fantasy sports as an educational tool</strong>, not a gambling mechanism. Our platform is designed to teach users how to analyze 
              player form, understand match conditions, and make strategic decisions—skills that enhance cricket appreciation.
            </p>

            <p>
              Every feature on our platform—from detailed player statistics to live point tracking—is built to foster learning. We want users 
              to walk away not just with leaderboard rankings, but with a deeper understanding of the beautiful game of cricket.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make, from product design to community management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Transparency</h3>
              <p className="text-slate-600 leading-relaxed">
                We operate with complete openness. Our point system, legal status, and funding model are publicly documented. 
                No hidden fees, no surprise charges—ever.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Education First</h3>
              <p className="text-slate-600 leading-relaxed">
                Fantasy cricket is a skill. We provide in-depth guides, player analytics, and strategy forums to help users improve. 
                Learning is the reward, not money.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community</h3>
              <p className="text-slate-600 leading-relaxed">
                We're building a space for cricket fans to connect, debate, and celebrate the sport together. 
                Respect, fair play, and sportsmanship are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Legal Entity & Ownership</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Elite Squad Sports is owned and operated by:
                  </p>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 mb-4">
                    <p className="font-bold text-lg text-slate-900 mb-2">KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</p>
                    <p className="text-sm text-slate-600">
                      Registered Office: Kodagu District, Karnataka, India<br />
                      Corporate Identification Number (CIN): [To be provided by legal team]<br />
                      Registration Date: [To be provided by legal team]
                    </p>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    We are a legally registered Indian private limited company, fully compliant with all applicable laws governing 
                    skill-based gaming platforms. Our operations are transparent, and we maintain strict adherence to the Public Gambling Act, 
                    1867, and state-specific regulations.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    <strong>Important:</strong> Elite Squad Sports does NOT operate in the following states due to government compliance 
                    requirements: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Model */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Sustain Ourselves</h2>
            <p className="text-lg text-slate-600">
              A common question: "If it's free, how do you make money?"
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p>
                <strong>We don't.</strong> At least, not in the traditional sense.
              </p>

              <p>
                Elite Squad Sports is <strong>pre-funded by private investors</strong> who share our belief that fantasy sports can be a 
                powerful educational tool. Our investors are passionate about cricket and want to create a space where fans can learn and 
                compete without financial risk.
              </p>

              <p>
                We do not charge entry fees. We do not sell user data. We do not run advertisements (currently). Our revenue model is 
                intentionally designed to prioritize user experience over profit maximization.
              </p>

              <p>
                In the future, we may explore <strong>optional premium features</strong> such as advanced analytics dashboards or exclusive 
                content—but the core fantasy gaming experience will <em>always remain free</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <div className="text-lg text-slate-300 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              We promise to operate with integrity, transparency, and a genuine love for cricket. We will never introduce real-money 
              gambling features. We will never sell your data to third parties. We will always prioritize education and community over profit.
            </p>
            <p>
              If you have questions, concerns, or feedback, we are here to listen. Contact us at <a href="mailto:support@elitesquadsports.in" className="text-yellow-400 underline">support@elitesquadsports.in</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
