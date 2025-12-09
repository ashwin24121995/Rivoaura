import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, UserX, Users, AlertTriangle } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Fair Play Policy</h1>
        <p className="text-slate-600">
          At Elite Squad Sports, we are committed to maintaining a fair, transparent, and secure environment for all our users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-primary mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Equal Opportunity</h3>
              <p className="text-sm text-slate-600">Every user has an equal chance to win based on their skill and knowledge.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-6 flex items-start gap-4">
            <Users className="w-8 h-8 text-green-600 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Real Players Only</h3>
              <p className="text-sm text-slate-600">We strictly prohibit bots. You compete against real human opponents.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <ScrollArea className="h-[600px] p-8">
            <div className="space-y-8 text-slate-700 leading-relaxed">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <UserX className="w-5 h-5 text-red-500" /> 1. Single Account Policy
                </h2>
                <p>
                  A user is allowed to have only one account on Elite Squad Sports. Creating multiple accounts to bypass restrictions, abuse referral bonuses, or gain an unfair advantage is strictly prohibited. If a user is found to have multiple accounts, all associated accounts will be permanently banned.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> 2. Collusion and Team Play
                </h2>
                <p>
                  Collusion between users to fix the outcome of a contest or to transfer funds is strictly forbidden. Users found engaging in such activities will be disqualified, and their accounts will be suspended.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Automated Programs (Bots)</h2>
                <p>
                  The use of any automated software, bots, scripts, or third-party tools to automate gameplay, data collection, or any other interaction with the platform is strictly prohibited. We employ sophisticated detection mechanisms to identify and ban such activities.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Accurate Information</h2>
                <p>
                  Users must provide accurate and truthful information during registration and verification. Providing false information regarding age, identity, or residence is a violation of our Fair Play Policy and will result in account termination.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Withdrawals and Verification</h2>
                <p>
                  To ensure the integrity of our platform, all withdrawals are subject to strict verification processes. We may request additional documentation to verify the identity of the user and the legitimacy of the winnings before processing any withdrawal.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Reporting Violations</h2>
                <p>
                  If you suspect any user of violating our Fair Play Policy, please report it to our support team immediately. We take all reports seriously and investigate them thoroughly.
                </p>
              </section>

            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
