import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms and Conditions</h1>
        <p className="text-slate-600">Last Updated: December 9, 2025</p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <ScrollArea className="h-[800px] p-8">
            <div className="space-y-8 text-slate-700 leading-relaxed">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>
                  Welcome to RIVOAURA ("we," "our," or "us"), owned and operated by RIVOAURA PRIVATE LIMITED. By accessing or using our website (elitesquadsports.com) and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be at least 18 years of age to participate in any contests.</li>
                  <li>You must be a resident of India.</li>
                  <li>
                    Residents of the states of <strong>Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</strong> are strictly prohibited from participating in any pay-to-play contests on our platform due to state-specific gambling laws.
                  </li>
                  <li>We reserve the right to request proof of age and residence at any time.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Skill-Based Platform</h2>
                <p>
                  RIVOAURA is a platform for "Games of Skill." The outcome of the contests on our platform depends predominantly on the knowledge, training, attention, and experience of the participants. By participating, you acknowledge that the games offered are not "Games of Chance" or gambling.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. User Accounts</h2>
                <p className="mb-4">
                  To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                  <li>You are solely responsible for all activities that occur under your account.</li>
                  <li>One user is allowed to have only one account. Multiple accounts are strictly prohibited and will result in immediate termination.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Fair Play & Conduct</h2>
                <p>
                  We are committed to fair play. Any form of cheating, collusion, use of bots, or exploitation of bugs is strictly prohibited. We reserve the right to suspend or terminate accounts found violating our Fair Play Policy.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                <p>
                  All content on this platform, including but not limited to text, graphics, logos, and software, is the property of RIVOAURA or its licensors and is protected by Indian and international copyright laws.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  RIVOAURA shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kodagu, Karnataka, India.

Registered Office:
RIVOAURA PRIVATE LIMITED
C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka
                </p>
              </section>

            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
