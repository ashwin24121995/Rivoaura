import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-slate-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Email Support</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  For general inquiries and support requests
                </p>
                <a 
                  href="mailto:support@elitesquadsports.in" 
                  className="text-blue-600 font-semibold hover:underline"
                >
                  support@elitesquadsports.in
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-slate-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Registered Office</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED<br />
                  Kodagu District<br />
                  Karnataka, India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-slate-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Response Time</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  We typically respond within
                </p>
                <p className="text-2xl font-bold text-slate-900">48 Hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="legal">Legal & Compliance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Please describe your inquiry in detail..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-slate-600">
                  I agree to the <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> and 
                  consent to Elite Squad Sports collecting and processing my personal data for the purpose of 
                  responding to this inquiry.
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-full flex items-center gap-2 justify-center"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Looking for Quick Answers?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Check our FAQ page for instant answers to common questions about gameplay, accounts, and policies.
          </p>
          <a href="/faq" className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full transition-colors">
            Visit FAQ Page
          </a>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Information</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>For account-related issues, please include your registered email address in your message.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>For technical bugs, please describe the issue in detail, including your device type and browser.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>For legal inquiries, please email <a href="mailto:legal@elitesquadsports.in" className="underline font-semibold">legal@elitesquadsports.in</a> directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>We do not provide phone support at this time. All communication is handled via email.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
