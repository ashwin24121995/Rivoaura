'use client';

import { useState } from "react";
import { KeyRound, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function PasswordReset() {
  const [step, setStep] = useState<"request" | "success">("request");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    setStep("success");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {step === "request" ? (
          <Card className="border-slate-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <KeyRound className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Reset Your Password</CardTitle>
              <p className="text-slate-600 text-sm mt-2">
                Enter your registered email address and we'll send you a password reset link.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 rounded-lg"
                >
                  Send Reset Link
                </Button>

                <div className="text-center">
                  <Link href="/login">
                    <button className="text-sm text-blue-600 hover:underline flex items-center gap-1 mx-auto">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Login
                    </button>
                  </Link>
                </div>
              </form>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> The password reset link will expire in 24 hours for security reasons. 
                  If you don't receive the email within 5 minutes, check your spam folder.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-slate-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Check Your Email</CardTitle>
              <p className="text-slate-600 text-sm mt-2">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Next Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                    <li>Check your inbox for an email from RIVOAURA</li>
                    <li>Click the "Reset Password" link in the email</li>
                    <li>Create a new password (minimum 8 characters)</li>
                    <li>Log in with your new password</li>
                  </ol>
                </div>

                <div className="text-center space-y-3">
                  <p className="text-sm text-slate-600">
                    Didn't receive the email?
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setStep("request")}
                    className="w-full"
                  >
                    Resend Email
                  </Button>
                </div>

                <div className="text-center">
                  <Link href="/login">
                    <button className="text-sm text-blue-600 hover:underline flex items-center gap-1 mx-auto">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Login
                    </button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Need help? <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
