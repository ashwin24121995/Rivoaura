import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-600">Last Updated: December 9, 2025</p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <ScrollArea className="h-[800px] p-8">
            <div className="space-y-8 text-slate-700 leading-relaxed">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information to provide better services to all our users. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and date of birth provided during registration.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and interaction data.</li>
                  <li><strong>Device Information:</strong> IP address, browser type, and device identifiers for security and compliance purposes.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services.</li>
                  <li>To verify your identity and eligibility (age and location) to participate in contests.</li>
                  <li>To process transactions and send related information.</li>
                  <li>To communicate with you about products, services, offers, and events.</li>
                  <li>To detect, prevent, and address technical issues and fraud.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Protection & Security</h2>
                <p>
                  We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption (SSL) for data transmission and secure storage practices.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Third-Party Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request data portability. To exercise these rights, please contact our support team.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at: <br />
                  <strong>Email:</strong> privacy@elitesquadsports.com <br /><br />
                  <strong>Data Controller:</strong><br />
                  RIVOAURA PRIVATE LIMITED<br />
                  C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka, India
                </p>
              </section>

            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
