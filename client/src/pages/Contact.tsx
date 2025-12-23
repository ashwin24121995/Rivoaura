import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, HelpCircle, Shield, AlertTriangle, Clock, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <MessageCircle className="w-16 h-16 text-blue-300 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-black">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or need support? We're here to help. Choose the best way to reach us based on 
              your inquiry type.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="container max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Mail className="w-8 h-8" />, title: "Email Support", desc: "Get detailed responses within 24-48 hours", color: "blue" },
            { icon: <Clock className="w-8 h-8" />, title: "Response Time", desc: "24-48 hours for most inquiries", color: "green" },
            { icon: <MessageCircle className="w-8 h-8" />, title: "Community Forum", desc: "Get help from other users", color: "purple" }
          ].map((item, i) => (
            <Card key={i} className={`border-2 border-${item.color}-200 shadow-lg hover:shadow-xl transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-4 text-${item.color}-600`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          {/* Section 1: Contact by Department */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Contact by Department</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Choose the appropriate email address based on your inquiry type for faster response times:
              </p>

              <div className="space-y-4">
                {/* General Support */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-lg">General Support</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    For account issues, technical problems, contest questions, or general inquiries.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-slate-900 font-bold">📧 support@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 24-48 hours</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Common Topics:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Account login or registration issues</li>
                      <li>• Password reset requests</li>
                      <li>• Contest entry problems</li>
                      <li>• Scoring questions or discrepancies</li>
                      <li>• Platform bugs or technical errors</li>
                    </ul>
                  </div>
                </div>

                {/* Fair Play & Security */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                    <h3 className="font-bold text-slate-900 text-lg">Fair Play & Security</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Report suspected cheating, multiple accounts, collusion, or security vulnerabilities.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <p className="text-slate-900 font-bold">📧 fairplay@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 48-72 hours (investigations take time)</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Report These Issues:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Suspected cheating or unfair play</li>
                      <li>• Multiple accounts or account sharing</li>
                      <li>• Collusion between users</li>
                      <li>• Bot or automation usage</li>
                      <li>• Appeal account suspension or ban</li>
                    </ul>
                  </div>
                </div>

                {/* Privacy & Data Protection */}
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <h3 className="font-bold text-slate-900 text-lg">Privacy & Data Protection</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Data access requests, privacy concerns, GDPR/data protection inquiries, or account deletion.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="text-slate-900 font-bold">📧 privacy@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 30 days (as required by law)</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Privacy Requests:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Request copy of your personal data</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Delete your account and data</li>
                      <li>• Withdraw consent for data processing</li>
                      <li>• Privacy policy questions</li>
                    </ul>
                  </div>
                </div>

                {/* Responsible Gaming */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-slate-900 text-lg">Responsible Gaming & Wellness</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Self-exclusion requests, gaming habit concerns, or responsible gaming support.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <p className="text-slate-900 font-bold">📧 wellness@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 24 hours (priority support)</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Wellness Support:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Request self-exclusion (7, 30, or 90 days)</li>
                      <li>• Set account limits or restrictions</li>
                      <li>• Discuss gaming habit concerns</li>
                      <li>• Request activity reports</li>
                      <li>• Mental health resource referrals</li>
                    </ul>
                  </div>
                </div>

                {/* Business & Partnerships */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                    <h3 className="font-bold text-slate-900 text-lg">Business & Partnerships</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Media inquiries, partnership opportunities, sponsorship requests, or business development.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-slate-900 font-bold">📧 business@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 5-7 business days</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Business Inquiries:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Media and press inquiries</li>
                      <li>• Partnership proposals</li>
                      <li>• Sponsorship opportunities</li>
                      <li>• Affiliate programs</li>
                      <li>• Corporate accounts</li>
                    </ul>
                  </div>
                </div>

                {/* Security Vulnerabilities */}
                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-slate-900 text-lg">Security Vulnerabilities</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Report security bugs, vulnerabilities, or exploits (responsible disclosure).
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <p className="text-slate-900 font-bold">📧 security@rivoaura.com</p>
                    <p className="text-slate-600 text-xs mt-1">Response Time: 24-48 hours (high priority)</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">Security Reports:</p>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Platform security vulnerabilities</li>
                      <li>• Bug exploits or loopholes</li>
                      <li>• Data breach concerns</li>
                      <li>• Authentication bypass issues</li>
                      <li>• Responsible disclosure submissions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Company Information */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-slate-900">Registered Address</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>RIVOAURA PRIVATE LIMITED</strong><br />
                    A-96 SHANKER GARDEN, VIKASPURI<br />
                    NEW DELHI, West Delhi<br />
                    Delhi, India - 110018
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-slate-900">Corporate Details</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong>Company Type:</strong> Private Limited<br />
                    <strong>Registration:</strong> India (MCA)<br />
                    <strong>Business:</strong> Educational Fantasy Sports<br />
                    <strong>Status:</strong> Active & Compliant
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Before You Contact Us */}
          <Card className="border-2 border-blue-200 shadow-lg bg-blue-50">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Before You Contact Us</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                To help us assist you faster, please check these resources first:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-3">📚 Help Center</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Visit our How to Play page for detailed guides on:
                  </p>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>• Creating teams and entering contests</li>
                    <li>• Understanding scoring rules</li>
                    <li>• Captain and vice-captain selection</li>
                    <li>• Credit system explanation</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-3">📖 Policy Pages</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    Review our comprehensive policy documents:
                  </p>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>• Terms & Conditions</li>
                    <li>• Privacy Policy</li>
                    <li>• Fair Play Policy</li>
                    <li>• Responsible Gaming Guidelines</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-3">💬 Community Forum</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Ask questions and get answers from experienced users in our Community section. Many common questions 
                    are already answered there.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-3">🔍 About Us Page</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Learn about RIVOAURA's mission, legal status, business model, and educational approach on our About page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: What to Include in Your Email */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">3. What to Include in Your Email</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Help us resolve your issue faster by providing complete information:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Subject Line", desc: "Clear, specific subject (e.g., \"Login Error - Cannot Access Account\")", icon: "📝" },
                  { title: "Account Details", desc: "Your registered email address and username (never share your password)", icon: "👤" },
                  { title: "Issue Description", desc: "Detailed explanation of the problem, including when it started", icon: "📋" },
                  { title: "Steps to Reproduce", desc: "What actions led to the issue? Can you reproduce it consistently?", icon: "🔄" },
                  { title: "Screenshots/Evidence", desc: "Attach screenshots, error messages, or relevant evidence", icon: "📸" },
                  { title: "Device & Browser", desc: "What device (mobile/desktop) and browser are you using?", icon: "💻" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 mt-6">
                <h3 className="font-bold text-slate-900 mb-3">⚠️ Important Security Reminder:</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  RIVOAURA staff will NEVER ask for your password via email. If someone claiming to be from RIVOAURA requests 
                  your password, it's a scam. Report it immediately to security@rivoaura.com.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Response Times & Expectations */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">4. Response Times & Expectations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <h3 className="font-bold text-slate-900 mb-2">Standard Inquiries</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Most support emails receive a response within 24-48 hours during business days (Monday-Saturday, 9 AM - 6 PM IST).
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200">
                  <h3 className="font-bold text-slate-900 mb-2">Complex Issues</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Technical problems, fair play investigations, or privacy requests may take 3-7 business days or longer 
                    depending on complexity.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-2">High-Priority Issues</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Security vulnerabilities, account lockouts, and responsible gaming requests receive priority handling 
                    within 24 hours.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                  <h3 className="font-bold text-slate-900 mb-2">Weekends & Holidays</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Our support team operates Monday-Saturday. Emails sent on Sundays or national holidays will be responded 
                    to on the next business day.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="border-2 border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-10 text-center space-y-4">
              <Mail className="w-12 h-12 text-blue-600 mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900">Ready to Get in Touch?</h2>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Choose the appropriate department email above based on your inquiry type. We're committed to providing 
                excellent support and resolving your issues promptly.
              </p>
              <div className="pt-4">
                <Badge className="bg-blue-600 text-white px-6 py-3 text-base">
                  📧 support@rivoaura.com
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
