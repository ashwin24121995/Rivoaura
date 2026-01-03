'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, AlertTriangle, Ban, CheckCircle2, Users, Bot, Eye } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <ShieldCheck className="w-16 h-16 text-green-300 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-black">Fair Play Policy</h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto leading-relaxed">
              RIVOAURA is committed to providing a fair, transparent, and ethical gaming environment. 
              Learn about our rules, prohibited activities, and enforcement measures.
            </p>
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
              Last Updated: December 23, 2025
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container max-w-5xl py-12">
        <Card className="border-2 border-green-200 bg-green-50 shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Fair Play</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Fair play is the foundation of RIVOAURA. Every user deserves an equal opportunity to compete based on skill, 
              knowledge, and strategy—not through cheating, exploitation, or unfair advantages. This Fair Play Policy outlines 
              the rules that all users must follow to maintain the integrity of our platform.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Violations of this policy will result in serious consequences, including account suspension, permanent bans, 
              and forfeiture of winnings. We employ advanced detection systems and manual reviews to identify and punish 
              unfair behavior.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Section 1: Core Fair Play Principles */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">1. Core Fair Play Principles</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                All users must adhere to these fundamental principles when participating in contests on RIVOAURA:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Compete Honestly", desc: "Use only your own skill, knowledge, and judgment to create teams and make decisions. Do not use external tools, bots, or automated systems." },
                  { title: "Play Independently", desc: "Make your own decisions without colluding with other users to gain unfair advantages. Each team must represent your individual strategy." },
                  { title: "Respect the Rules", desc: "Follow all contest rules, team composition requirements, and platform guidelines. Do not exploit bugs or loopholes." },
                  { title: "One Account Per Person", desc: "Maintain only one account. Creating multiple accounts to manipulate contests or evade bans is strictly prohibited." },
                  { title: "Provide Accurate Information", desc: "Supply truthful personal information during registration. Do not impersonate others or create fake identities." },
                  { title: "Respect Other Users", desc: "Treat fellow users with respect. Do not harass, abuse, or engage in unsportsmanlike conduct in community forums." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-blue-50 rounded-lg p-5 border border-blue-200">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Prohibited Activities */}
          <Card className="border-2 border-red-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Ban className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">2. Prohibited Activities</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                The following activities are strictly prohibited on RIVOAURA. Engaging in any of these behaviors will result 
                in immediate enforcement action:
              </p>

              {/* Multiple Accounts */}
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  Multiple Accounts (Multi-Accounting)
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Creating or operating more than one account on RIVOAURA is strictly forbidden. This includes:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Creating multiple accounts using different email addresses or phone numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Sharing accounts with family members or friends (each person must have their own account)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Creating new accounts after being banned or suspended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Using accounts on behalf of others or allowing others to use your account</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-red-200 mt-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Why This Matters:</strong> Multiple accounts allow users to enter the same contest multiple times, 
                    increasing their chances of winning unfairly. Our detection systems identify duplicate accounts through IP 
                    addresses, device fingerprints, email patterns, and behavioral analysis.
                  </p>
                </div>
              </div>

              {/* Collusion */}
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Collusion & Team Coordination</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Coordinating with other users to gain unfair advantages is prohibited. This includes:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Sharing team selections or strategies with other users before contest deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Coordinating captain/vice-captain choices to dominate leaderboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Forming groups or syndicates to manipulate contest outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">✗</span>
                    <span>Intentionally creating weak teams to help friends or family members win</span>
                  </li>
                </ul>
              </div>

              {/* Bots & Automation */}
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-600" />
                  Bots, Scripts & Automation
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Using automated tools, bots, or scripts to interact with RIVOAURA is strictly prohibited:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Automated team creation or contest entry scripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Bots that scrape data, player statistics, or contest information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>Browser extensions or plugins that automate team selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✗</span>
                    <span>AI-powered tools that generate optimal teams without human input</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-purple-200 mt-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Clarification:</strong> Using publicly available cricket statistics websites or fantasy tips for 
                    research is allowed. However, automated systems that make decisions or submit entries on your behalf are 
                    prohibited.
                  </p>
                </div>
              </div>

              {/* Bug Exploitation */}
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Bug Exploitation & System Manipulation</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Exploiting bugs, glitches, or vulnerabilities in the platform is prohibited:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✗</span>
                    <span>Exploiting scoring errors or calculation bugs to gain unfair points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✗</span>
                    <span>Manipulating point value system loopholes to create illegal team compositions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✗</span>
                    <span>Bypassing contest entry limits or deadline restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✗</span>
                    <span>Accessing unauthorized areas of the platform or admin functions</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-yellow-200 mt-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Responsible Disclosure:</strong> If you discover a bug or vulnerability, please report it immediately 
                    to <strong>security@rivoaura.com</strong>. We appreciate responsible disclosure and may reward users who help 
                    us identify security issues. Do NOT exploit bugs before reporting them.
                  </p>
                </div>
              </div>

              {/* Insider Information */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Insider Information & Unfair Advantages
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Using non-public information to gain unfair advantages is prohibited:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✗</span>
                    <span>Using confidential team news, injury reports, or lineup information not publicly available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✗</span>
                    <span>Accessing RIVOAURA staff accounts or internal data to predict contest outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✗</span>
                    <span>Manipulating contests through relationships with cricket players, coaches, or officials</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Detection & Enforcement */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">3. Detection & Enforcement</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                RIVOAURA employs a multi-layered approach to detect and prevent unfair play:
              </p>

              <div className="space-y-6">
                {/* Automated Detection */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Automated Detection Systems</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Our platform uses advanced algorithms and machine learning to identify suspicious behavior:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Multi-Account Detection:</strong> IP address tracking, device fingerprinting, email pattern analysis, behavioral similarities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Collusion Detection:</strong> Team similarity analysis, coordinated entry patterns, suspicious win rate correlations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Bot Detection:</strong> Unusual activity patterns, superhuman speed, automated entry timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Anomaly Detection:</strong> Statistical outliers, impossible team compositions, exploit patterns</span>
                    </li>
                  </ul>
                </div>

                {/* Manual Review */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Manual Review Process</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Flagged accounts undergo manual review by our Fair Play team:
                  </p>
                  <ol className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span><strong>Investigation:</strong> Our team examines account activity, contest history, and behavioral patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span><strong>Evidence Collection:</strong> We gather evidence including logs, IP records, and user communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                      <span><strong>Decision:</strong> Based on evidence, we determine appropriate action (warning, suspension, or ban)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                      <span><strong>Notification:</strong> Users are notified of violations and given opportunity to appeal</span>
                    </li>
                  </ol>
                </div>

                {/* Penalties */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Enforcement Penalties</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Violations result in penalties proportional to severity:
                  </p>
                  <div className="space-y-3">
                    {[
                      { level: "First Warning", penalty: "Email warning + educational resources about fair play rules", color: "yellow" },
                      { level: "Temporary Suspension", penalty: "7-30 day account suspension + contest entry forfeiture", color: "orange" },
                      { level: "Permanent Ban", penalty: "Lifetime account termination + IP/device ban + winnings forfeiture", color: "red" },
                      { level: "Legal Action", penalty: "For serious fraud or criminal activity, we may pursue legal remedies", color: "red" }
                    ].map((item, i) => (
                      <div key={i} className={`bg-white rounded-lg p-4 border-2 border-${item.color}-300`}>
                        <div className="font-bold text-slate-900 mb-1">{item.level}</div>
                        <div className="text-slate-700 text-sm">{item.penalty}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Appeals Process */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Appeals Process</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                If you believe your account was suspended or banned in error, you have the right to appeal:
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">How to Submit an Appeal:</h3>
                <ol className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span>Email <strong>fairplay@rivoaura.com</strong> within 7 days of receiving your suspension/ban notice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span>Include your account email, username, and a detailed explanation of why you believe the decision was incorrect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span>Provide any supporting evidence (screenshots, logs, explanations of suspicious activity)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                    <span>Our Fair Play team will review your appeal within 14 business days and respond with a final decision</span>
                  </li>
                </ol>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 mt-6">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Important:</strong> Appeals are reviewed thoroughly, but our decisions are final. Repeated violations 
                  or abusive appeals may result in permanent communication bans. We encourage all users to read and understand 
                  this Fair Play Policy before participating in contests.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-2 border-green-200 shadow-lg bg-green-50">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Report Unfair Play</h2>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                If you suspect another user is violating our Fair Play Policy, please report it immediately. 
                All reports are confidential and investigated thoroughly.
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Fair Play Team:</strong> fairplay@rivoaura.com</p>
                <p><strong>Security Issues:</strong> security@rivoaura.com</p>
                <p><strong>General Support:</strong> support@rivoaura.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
