import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, AlertCircle, Clock, Shield, HelpCircle, CheckCircle2, Brain } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <Heart className="w-16 h-16 text-purple-300 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-black">Responsible Gaming</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Your well-being is our priority. Learn how to enjoy fantasy cricket responsibly, recognize warning signs, 
              and access support resources if you need help.
            </p>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-sm">
              Last Updated: December 23, 2025
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container max-w-5xl py-12">
        <Card className="border-2 border-purple-200 bg-purple-50 shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Your Well-Being</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RIVOAURA is 100% free to play with no real money involved, which eliminates financial risk. However, we recognize 
              that even skill-based games can become unhealthy if played excessively or compulsively. Responsible gaming means 
              enjoying fantasy cricket as a fun, educational hobby without letting it interfere with your daily life, 
              relationships, or mental health.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This page provides guidance on healthy gaming habits, warning signs of problematic behavior, and resources to 
              help you maintain balance.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Section 1: What is Responsible Gaming? */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">1. What is Responsible Gaming?</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Responsible gaming means playing fantasy cricket in a way that is enjoyable, balanced, and does not negatively 
                impact your life. It involves:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Setting Time Limits", desc: "Allocating specific time for fantasy cricket without letting it consume your entire day or interfere with work, studies, or family time." },
                  { title: "Maintaining Perspective", desc: "Remembering that fantasy cricket is entertainment and education, not a source of income or self-worth." },
                  { title: "Balancing Priorities", desc: "Ensuring fantasy cricket doesn't replace important activities like exercise, social interactions, or personal responsibilities." },
                  { title: "Playing for Fun", desc: "Focusing on the enjoyment of cricket knowledge and strategy rather than obsessing over rankings or winning." },
                  { title: "Recognizing Limits", desc: "Understanding when you need to take a break and being honest with yourself about your gaming habits." },
                  { title: "Seeking Help When Needed", desc: "Reaching out for support if you feel your gaming is becoming problematic or affecting your mental health." }
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Healthy Gaming Habits */}
          <Card className="border-2 border-green-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">2. Healthy Gaming Habits</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Follow these guidelines to ensure your fantasy cricket experience remains positive and balanced:
              </p>

              <div className="space-y-6">
                {/* Set Time Limits */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    Set Time Limits & Stick to Them
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Decide in advance how much time you'll spend on RIVOAURA each day or week:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Recommended Daily Limit:</strong> 30-60 minutes for team creation and research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Match Days:</strong> Additional time to watch matches and track scores is normal, but avoid obsessively checking leaderboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Use Timers:</strong> Set phone alarms or use screen time tracking apps to remind you when your limit is reached</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Take Breaks:</strong> If you've been playing for hours, take a 15-30 minute break to stretch, hydrate, and rest your eyes</span>
                    </li>
                  </ul>
                </div>

                {/* Prioritize Real Life */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Prioritize Real-Life Responsibilities</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Fantasy cricket should never interfere with important aspects of your life:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Work/Studies First:</strong> Complete your professional or academic responsibilities before playing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Family Time:</strong> Don't let fantasy cricket replace quality time with family and friends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Sleep Schedule:</strong> Avoid staying up late to research teams or watch matches if it affects your sleep</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Physical Health:</strong> Maintain exercise routines, healthy eating, and outdoor activities</span>
                    </li>
                  </ul>
                </div>

                {/* Avoid Obsessive Behavior */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Avoid Obsessive Behavior</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Healthy gaming means enjoying the experience without becoming obsessed:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>Check your teams 2-3 times per day maximum, not every 10 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>Accept losses gracefully—every player loses sometimes, even experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>Don't let poor performance ruin your mood or day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>Avoid creating teams for every single match—it's okay to skip contests</span>
                    </li>
                  </ul>
                </div>

                {/* Take Regular Breaks */}
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Take Regular Breaks</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Periodic breaks help maintain perspective and prevent burnout:
                  </p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span><strong>Daily Breaks:</strong> Step away from the platform for at least a few hours each day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span><strong>Weekly Breaks:</strong> Consider taking 1-2 days off per week to recharge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span><strong>Extended Breaks:</strong> If you feel overwhelmed or stressed, take a week or month off—your account will be here when you return</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Warning Signs */}
          <Card className="border-2 border-red-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">3. Warning Signs of Problematic Gaming</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Even though RIVOAURA is free to play, excessive or compulsive gaming can still negatively impact your life. 
                Watch for these warning signs:
              </p>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mb-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Behavioral Warning Signs:</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  {[
                    "Spending multiple hours per day on RIVOAURA, neglecting work, studies, or personal responsibilities",
                    "Feeling anxious, irritable, or restless when you can't access the platform",
                    "Lying to family or friends about how much time you spend on fantasy cricket",
                    "Losing interest in hobbies, social activities, or relationships due to gaming",
                    "Checking leaderboards or scores obsessively throughout the day",
                    "Experiencing mood swings based on contest performance (extreme highs after wins, deep lows after losses)",
                    "Neglecting sleep, meals, or personal hygiene to play or research teams",
                    "Feeling unable to stop playing even when you want to"
                  ].map((sign, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3">If You Notice These Signs:</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  If you recognize two or more of these warning signs in yourself, it may be time to reassess your gaming habits. 
                  Consider taking an extended break, setting stricter limits, or reaching out for support.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Remember:</strong> There's no shame in seeking help. Recognizing a problem and taking action is a sign 
                  of strength, not weakness.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Self-Assessment Quiz */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">4. Self-Assessment: Is Your Gaming Healthy?</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Answer these questions honestly to assess whether your fantasy cricket habits are healthy:
              </p>

              <div className="space-y-4">
                {[
                  "Do you spend more than 2 hours per day on RIVOAURA (excluding watching actual cricket matches)?",
                  "Have you missed work, classes, or important events because of fantasy cricket?",
                  "Do you feel anxious or upset when you can't check your teams or leaderboard?",
                  "Have family or friends expressed concern about your gaming habits?",
                  "Do you think about fantasy cricket constantly, even when doing other activities?",
                  "Have you tried to cut back on playing but found yourself unable to do so?",
                  "Do you play to escape from problems, stress, or negative emotions?",
                  "Has your performance at work or school declined since you started playing?"
                ].map((question, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{question}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
                <h3 className="font-bold text-slate-900 mb-3">Interpreting Your Results:</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">0-2 "Yes":</span>
                    <span>Your gaming habits appear healthy. Continue monitoring and maintaining balance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">3-5 "Yes":</span>
                    <span>You may be developing unhealthy habits. Consider setting stricter limits and taking more breaks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">6+ "Yes":</span>
                    <span>Your gaming may be problematic. We strongly recommend taking an extended break and seeking support.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Tools & Resources */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">5. Tools & Support Resources</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                RIVOAURA provides tools to help you maintain healthy gaming habits, and we can connect you with professional 
                support if needed.
              </p>

              <div className="space-y-6">
                {/* Platform Tools */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">RIVOAURA Platform Tools:</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Self-Exclusion:</strong> Temporarily suspend your account for 7, 30, or 90 days to take a break. Contact support@rivoaura.com to request self-exclusion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Account Deletion:</strong> Permanently delete your account if you feel you need to stop playing entirely.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Activity Reports:</strong> Request a detailed report of your gaming activity (time spent, contests entered) to assess your habits objectively.</span>
                    </li>
                  </ul>
                </div>

                {/* External Resources */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Professional Support Resources (India):</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    If you're struggling with gaming addiction or mental health issues, these organizations can help:
                  </p>
                  <div className="space-y-3 text-slate-700 text-sm">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="font-bold mb-1">NIMHANS Centre for Addiction Medicine</div>
                      <div className="text-xs">Phone: +91-80-2699-5000 | Website: nimhans.ac.in</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="font-bold mb-1">Vandrevala Foundation Helpline</div>
                      <div className="text-xs">Phone: 1860-2662-345 | 24/7 mental health support</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="font-bold mb-1">iCall Psychosocial Helpline</div>
                      <div className="text-xs">Phone: +91-22-2556-3291 | Email: icall@tiss.edu</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="font-bold mb-1">Fortis Stress Helpline</div>
                      <div className="text-xs">Phone: +91-83760-04946 | Monday-Saturday, 9 AM - 9 PM</div>
                    </div>
                  </div>
                </div>

                {/* Contact RIVOAURA */}
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Contact RIVOAURA Support:</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    If you need help managing your account, setting limits, or have concerns about your gaming habits, 
                    our support team is here to assist:
                  </p>
                  <div className="space-y-2 text-slate-700 text-sm">
                    <p><strong>Email:</strong> support@rivoaura.com</p>
                    <p><strong>Responsible Gaming Inquiries:</strong> wellness@rivoaura.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: For Parents & Guardians */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">6. For Parents & Guardians</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                While RIVOAURA is strictly 18+ only, we encourage parents to discuss responsible gaming with young adults 
                in their households:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-2">Monitor Time Spent</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Keep an eye on how much time your young adult spends on fantasy sports. Encourage balance with studies, 
                    work, and social activities.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <h3 className="font-bold text-slate-900 mb-2">Discuss Healthy Habits</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Talk openly about responsible gaming, setting limits, and recognizing when gaming becomes problematic.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                  <h3 className="font-bold text-slate-900 mb-2">Watch for Warning Signs</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    If you notice declining academic/work performance, social withdrawal, or mood changes, have a conversation 
                    and seek professional help if needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-2 border-purple-200 shadow-lg bg-purple-50">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Need Help or Support?</h2>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                If you have questions about responsible gaming, need help setting limits, or want to discuss your gaming habits, 
                we're here to listen and support you.
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Wellness Team:</strong> wellness@rivoaura.com</p>
                <p><strong>General Support:</strong> support@rivoaura.com</p>
                <p><strong>Self-Exclusion Requests:</strong> support@rivoaura.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
