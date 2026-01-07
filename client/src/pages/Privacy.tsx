import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <Shield className="w-16 h-16 text-blue-300 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-black">Privacy Policy</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, protect, and share your personal information 
              when you use DAYHAAT.
            </p>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-sm">
              Last Updated: December 23, 2025
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container max-w-5xl py-12">
        <Card className="border-2 border-blue-200 bg-blue-50 shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              DAYHAAT PRIVATE LIMITED is committed to protecting your personal information and your 
              right to privacy. This Privacy Policy explains what information we collect, how we use it, how we protect it, 
              and your rights regarding your data.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By using DAYHAAT, you agree to the collection and use of information in accordance with this Privacy Policy. 
              If you do not agree with our policies and practices, please do not use our platform.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Section 1: Information We Collect */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                We collect several types of information from and about users of our platform, including personal information 
                that can be used to identify you.
              </p>

              {/* Personal Information */}
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-purple-600" />
                  Personal Information You Provide
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you register for an account or use our services, we collect the following personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", desc: "Your legal name as per government ID" },
                    { label: "Email Address", desc: "For account verification and communications" },
                    { label: "Mobile Number", desc: "For SMS notifications and account security" },
                    { label: "Date of Birth", desc: "To verify you are 18+ years old" },
                    { label: "State of Residence", desc: "To ensure eligibility based on state laws" },
                    { label: "Profile Picture", desc: "Optional, for account personalization" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-purple-200">
                      <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                      <div className="text-slate-600 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automatically Collected Information */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Information Collected Automatically
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you access and use DAYHAAT, we automatically collect certain technical information:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Device Information:</strong> Device type, operating system, browser type and version, screen resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>IP Address & Location:</strong> Your IP address and approximate geographic location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, navigation paths, contest entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Cookies & Tracking:</strong> Session cookies, authentication tokens, analytics cookies</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: How We Use Your Information */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                We use the information we collect for various purposes to provide, maintain, and improve our services.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Account Management", desc: "To create and manage your account, verify your identity, and authenticate logins", icon: "🔐" },
                  { title: "Eligibility Verification", desc: "To verify age (18+) and residency requirements ensuring legal compliance", icon: "✅" },
                  { title: "Contest Operations", desc: "To process contest entries, calculate scores, and manage results", icon: "🏆" },
                  { title: "Platform Improvements", desc: "To analyze usage patterns, identify bugs, and develop new features", icon: "📊" },
                  { title: "Communication", desc: "To send updates, notifications, and respond to support requests", icon: "📧" },
                  { title: "Fraud Prevention", desc: "To detect fraudulent activity, multiple accounts, and policy violations", icon: "🛡️" }
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
            </CardContent>
          </Card>

          {/* Section 3: Data Security */}
          <Card className="border-2 border-green-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">3. Data Security Measures</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your personal information from unauthorized access.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Encryption", desc: "All data transmitted is encrypted using SSL/TLS (HTTPS). Passwords are hashed using bcrypt." },
                  { title: "Access Controls", desc: "Only authorized personnel have access to personal data with multi-factor authentication." },
                  { title: "Regular Audits", desc: "We conduct security audits and vulnerability assessments regularly." },
                  { title: "Data Backups", desc: "We maintain encrypted backups to prevent data loss." }
                ].map((item, i) => (
                  <div key={i} className="bg-green-50 rounded-lg p-5 border border-green-200">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Your Privacy Rights */}
          <Card className="border-2 border-slate-200 shadow-lg">
            <CardContent className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Your Privacy Rights</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Under Indian data protection laws, you have certain rights regarding your personal information:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Right to Access", desc: "Request a copy of all personal information we hold about you" },
                  { title: "Right to Correction", desc: "Request corrections to inaccurate or incomplete information" },
                  { title: "Right to Deletion", desc: "Request deletion of your account and associated personal data" },
                  { title: "Right to Withdraw Consent", desc: "Withdraw consent for marketing communications anytime" }
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-xl p-6 border border-slate-300 mt-6">
                <p className="text-slate-700 text-sm leading-relaxed">
                  To exercise any of these rights, contact our Data Protection Officer at <strong>privacy@dayhaat.com</strong>. 
                  We will respond within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-2 border-blue-200 shadow-lg bg-blue-50">
            <CardContent className="p-10 text-center space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Questions About Your Privacy?</h2>
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                If you have questions or requests regarding this Privacy Policy, please contact our Data Protection Officer:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Data Protection Officer:</strong> privacy@dayhaat.com</p>
                <p><strong>Support:</strong> support@dayhaat.com</p>
                <p><strong>Address:</strong> DAYHAAT PRIVATE LIMITED, Bangalore, Karnataka, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
