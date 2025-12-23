import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle2, FileText, Scale, Shield } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <Scale className="w-16 h-16 text-blue-400 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-black">Terms & Conditions</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Please read these terms carefully before using RIVOAURA. By accessing our platform, 
              you agree to be legally bound by these terms.
            </p>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-sm">
              Last Updated: December 23, 2025
            </Badge>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="container max-w-5xl py-12">
        <Card className="border-2 border-orange-200 bg-orange-50 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Important Legal Notice</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These Terms and Conditions constitute a legally binding agreement between you (the "User") and 
                  <strong> RIVOAURA PRIVATE LIMITED</strong> (the "Company"). By creating an account, accessing our website, 
                  or participating in any contests, you acknowledge that you have read, understood, and agree to be bound by 
                  these terms in their entirety.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you do not agree with any part of these terms, you must immediately discontinue use of our platform. 
                  Continued use of RIVOAURA constitutes acceptance of these terms and any future modifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1: Definitions */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">1. Definitions</h2>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                For the purposes of these Terms and Conditions, the following definitions apply:
              </p>

              <div className="space-y-4">
                {[
                  { term: "Platform", def: "Refers to the RIVOAURA website (elitesquadsports.com), mobile applications, and all associated services provided by RIVOAURA PRIVATE LIMITED." },
                  { term: "User/You", def: "Any individual who accesses, browses, registers, or participates in contests on the Platform." },
                  { term: "Contest", def: "Any fantasy cricket competition hosted on the Platform where Users create virtual teams and compete based on real-world cricket match performances." },
                  { term: "Game of Skill", def: "A game where success depends predominantly on the knowledge, training, attention, experience, and adroitness of the player, rather than chance or luck." },
                  { term: "Account", def: "The registered user profile created by providing personal information, which allows access to Platform features and contest participation." },
                  { term: "Content", def: "All text, graphics, images, logos, software, data, and other materials available on the Platform." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">{item.term}:</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.def}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Eligibility Requirements */}
          <Card className="border-2 border-red-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">2. Eligibility Requirements</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                To use RIVOAURA and participate in contests, you must meet ALL of the following eligibility criteria. 
                Failure to meet any requirement will result in immediate account termination and forfeiture of any winnings.
              </p>

              <div className="space-y-6">
                {/* Age Requirement */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    Age Requirement (18+ Only)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You must be <strong>at least 18 years of age</strong> at the time of registration. This is a strict legal 
                    requirement under Indian law. During registration, you will be required to provide your date of birth, and 
                    our system will automatically reject accounts for individuals under 18.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    <strong>Verification:</strong> We reserve the right to request government-issued photo identification 
                    (Aadhaar Card, PAN Card, Passport, Driving License) at any time to verify your age. Failure to provide 
                    valid proof within 7 days of request will result in account suspension.
                  </p>
                </div>

                {/* Residency Requirement */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Residency Requirement (India Only)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You must be a <strong>legal resident of India</strong>. RIVOAURA is only available to individuals physically 
                    located within the territory of India at the time of contest participation. Use of VPNs, proxies, or other 
                    location-masking technologies to circumvent this restriction is strictly prohibited.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    <strong>Verification:</strong> We may verify your location through IP address tracking, device location data, 
                    and address proof documents (utility bills, bank statements, Aadhaar Card).
                  </p>
                </div>

                {/* State Restrictions */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    State-Specific Restrictions (Prohibited States)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Residents of the following Indian states are <strong>strictly prohibited</strong> from participating in 
                    any contests on RIVOAURA due to state-specific gambling and gaming laws:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {["Andhra Pradesh", "Assam", "Nagaland", "Odisha", "Sikkim", "Telangana"].map((state, i) => (
                      <Badge key={i} className="bg-red-500 text-white font-bold justify-center py-2">
                        {state}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    <strong>Important:</strong> If you are a resident of any of these states, you are prohibited from creating 
                    an account or participating in contests, even if the platform is 100% free. This restriction is based on 
                    state laws that classify fantasy sports as games of chance or gambling. Violation will result in immediate 
                    account termination and potential legal action.
                  </p>
                </div>

                {/* Mental Capacity */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Mental Capacity & Legal Competence
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    You must have the legal capacity to enter into binding contracts under Indian law. You must not be declared 
                    mentally unsound, bankrupt, or legally incompetent by any court of law. By registering, you represent and 
                    warrant that you have full legal authority to agree to these Terms.
                  </p>
                </div>

                {/* Single Account Policy */}
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Single Account Policy (One User, One Account)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Each individual user is permitted to create and maintain <strong>only ONE account</strong> on RIVOAURA. 
                    Creating multiple accounts (also known as "multi-accounting") is strictly prohibited and constitutes a 
                    violation of our Fair Play Policy.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    <strong>Detection & Penalties:</strong> We employ advanced fraud detection systems to identify duplicate 
                    accounts based on email addresses, phone numbers, IP addresses, device fingerprints, and payment methods. 
                    If multiple accounts are detected, all accounts will be permanently banned, and any winnings will be forfeited.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Game of Skill Declaration */}
          <Card className="border-2 border-green-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Game of Skill Declaration</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                RIVOAURA is a platform exclusively for <strong>"Games of Skill"</strong> as defined under Indian law. 
                This section explains the legal basis for our operations and your acknowledgment of the skill-based nature 
                of fantasy cricket.
              </p>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 mb-6">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Legal Definition: Game of Skill</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  A "Game of Skill" is defined as any game where the outcome depends <strong>predominantly</strong> (more than 50%) 
                  on the knowledge, training, attention, experience, and adroitness of the participants, rather than on chance or luck.
                </p>
                <p className="text-slate-700 leading-relaxed text-sm">
                  <strong>Legal Precedent:</strong> The Supreme Court of India has consistently held that games requiring substantial 
                  skill are not gambling. Fantasy sports have been recognized as games of skill by multiple High Courts, including 
                  the Punjab & Haryana High Court and Bombay High Court.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">Why Fantasy Cricket is a Game of Skill:</h3>
                {[
                  { title: "Player Selection Strategy", desc: "Users must analyze player statistics, recent form, pitch conditions, weather forecasts, and opposition strengths to select the optimal 11-player team within a 100-credit budget. This requires deep cricket knowledge and analytical thinking." },
                  { title: "Captain & Vice-Captain Choice", desc: "Selecting the right captain (2x points) and vice-captain (1.5x points) requires predicting which players will perform best in specific match conditions. This decision significantly impacts final scores and requires strategic foresight." },
                  { title: "Team Composition Balance", desc: "Users must balance their team across four roles (Wicket Keepers, Batsmen, All-Rounders, Bowlers) while adhering to strict composition rules. This requires understanding cricket tactics and match dynamics." },
                  { title: "Match Condition Analysis", desc: "Success depends on analyzing pitch reports, venue history, toss impact, team news, and weather conditions. Users who invest time in research consistently outperform those who make random selections." },
                  { title: "Budget Management", desc: "With a limited 100-credit budget, users must identify undervalued players and make trade-offs between premium stars and budget options. This requires financial planning and value assessment skills." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
                <h3 className="font-bold text-slate-900 mb-3">Your Acknowledgment</h3>
                <p className="text-slate-700 leading-relaxed">
                  By participating in contests on RIVOAURA, you explicitly acknowledge and agree that:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>The contests offered on this platform are Games of Skill, not Games of Chance or gambling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Your success depends primarily on your cricket knowledge, analytical abilities, and strategic decision-making.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>You will not claim that RIVOAURA operates games of chance or violates any gambling laws.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: User Accounts & Responsibilities */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4. User Accounts & Responsibilities</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                To access certain features of RIVOAURA, you must register for an account. This section outlines your 
                responsibilities regarding account creation, maintenance, and security.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Account Registration</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    During registration, you must provide accurate, current, and complete information, including:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Full legal name (as per government ID)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Valid email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Active mobile phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Date of birth (for age verification)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>State of residence (for eligibility verification)</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3 text-sm">
                    <strong>Accuracy Requirement:</strong> You are solely responsible for ensuring that all information provided 
                    is truthful and accurate. Providing false information constitutes fraud and will result in immediate account 
                    termination and potential legal action.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Account Security</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You are responsible for maintaining the confidentiality of your account credentials (username and password). 
                    You agree to:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Choose a strong, unique password that is not used for other online accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Never share your password with anyone, including RIVOAURA staff (we will never ask for your password)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Immediately notify us if you suspect unauthorized access to your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Log out from your account when using shared or public computers</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3 text-sm">
                    <strong>Liability:</strong> You are solely responsible for all activities that occur under your account, 
                    whether or not authorized by you. RIVOAURA is not liable for any loss or damage arising from unauthorized 
                    account access due to your failure to maintain security.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">Account Termination</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    RIVOAURA reserves the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Violation of these Terms and Conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Providing false or misleading information during registration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Creating multiple accounts or engaging in fraudulent activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Violating our Fair Play Policy (cheating, collusion, bot usage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Abusive behavior toward other users or RIVOAURA staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Prolonged inactivity (accounts inactive for 2+ years may be deleted)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Intellectual Property */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                All content, features, and functionality on the RIVOAURA platform are owned by RIVOAURA PRIVATE LIMITED, 
                its licensors, or other content providers, and are protected by Indian and international intellectual property laws.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Protected Content Includes:</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>RIVOAURA name, logo, and all related trademarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Website design, layout, graphics, and user interface elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Software code, algorithms, and scoring systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Text content, articles, guides, and educational materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Player statistics, match data, and fantasy point calculations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mt-4">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Prohibited Uses:</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  You may NOT, without our prior written permission:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Copy, reproduce, distribute, or publicly display any content from the platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Modify, reverse engineer, decompile, or disassemble any software or code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Use RIVOAURA trademarks, logos, or branding in any manner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Create derivative works or competing platforms using our content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Scrape, harvest, or extract data from the platform using automated tools</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Limitation of Liability */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                To the maximum extent permitted by Indian law, RIVOAURA PRIVATE LIMITED, its directors, officers, employees, 
                and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising 
                from your use of the platform.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3">We Are Not Liable For:</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Technical errors, server downtime, or platform unavailability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Loss of data, account information, or contest entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Errors in player statistics or scoring calculations provided by third-party data providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Unauthorized access to your account due to your failure to maintain security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">•</span>
                    <span>Disputes between users or interactions in community forums</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Governing Law */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Governing Law & Dispute Resolution</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms or your use of RIVOAURA shall be subject to the exclusive jurisdiction 
                of the courts in Bangalore, Karnataka, India.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Dispute Resolution Process:</h3>
                <ol className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span><strong>Contact Support:</strong> First, attempt to resolve the dispute by contacting our support team at support@rivoaura.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong>Negotiation:</strong> We will make reasonable efforts to resolve the dispute amicably within 30 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span><strong>Legal Action:</strong> If unresolved, either party may pursue legal remedies in the courts of Bangalore, Karnataka</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Changes to Terms */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Changes to These Terms</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                RIVOAURA reserves the right to modify, update, or replace these Terms and Conditions at any time, at our sole discretion. 
                When we make changes, we will:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Update the "Last Updated" date at the top of this page</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Notify registered users via email or in-platform notification for material changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Provide a 7-day notice period before material changes take effect (where legally required)</span>
                </li>
              </ul>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 mt-6">
                <p className="text-slate-700 leading-relaxed">
                  <strong>Your Continued Use Constitutes Acceptance:</strong> By continuing to access or use RIVOAURA after 
                  any modifications to these Terms, you agree to be bound by the revised terms. If you do not agree to the new 
                  terms, you must stop using the platform immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-2 border-blue-200 shadow-lg bg-blue-50">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Questions About These Terms?</h2>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                If you have any questions, concerns, or require clarification regarding these Terms and Conditions, 
                please contact our legal team:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> legal@rivoaura.com</p>
                <p><strong>Support:</strong> support@rivoaura.com</p>
                <p><strong>Address:</strong> RIVOAURA PRIVATE LIMITED, Bangalore, Karnataka, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
