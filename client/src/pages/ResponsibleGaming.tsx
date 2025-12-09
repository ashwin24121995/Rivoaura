import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Clock, Ban, PhoneCall } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Responsible Gaming</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Elite Squad Sports is a 100% free-to-play community platform. We are committed to ensuring a fun, safe, and balanced gaming experience for all our users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-slate-200 text-center hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="mx-auto bg-blue-50 p-3 rounded-full w-fit mb-2">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Set Limits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Control your gameplay by setting daily or weekly time limits to maintain a healthy balance.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 text-center hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="mx-auto bg-amber-50 p-3 rounded-full w-fit mb-2">
              <Ban className="w-6 h-6 text-amber-600" />
            </div>
            <CardTitle className="text-lg">Self-Exclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Take a break. Temporarily or permanently exclude yourself from the platform.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 text-center hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="mx-auto bg-green-50 p-3 rounded-full w-fit mb-2">
              <HeartHandshake className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-lg">Get Help</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Access professional support if you feel your gaming is becoming a problem.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            While Elite Squad Sports is completely free and involves no financial risk, excessive gaming can impact your daily life. We encourage all users to play responsibly and treat this platform as a fun recreational activity.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Prioritize your personal and professional responsibilities over gaming.</li>
            <li>Take regular breaks to rest and recharge.</li>
            <li>Balance your gaming time with other activities.</li>
            <li>Do not play when you are upset, tired, or under the influence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Tools for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Screen Time Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Restrict the amount of time you spend on the platform (Daily, Weekly).
                </p>
                <Button variant="outline" className="w-full">Set Time Limits</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Time Out</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Take a short break from playing. Your account will be locked for the duration you choose.
                </p>
                <Button variant="outline" className="w-full">Take a Break</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <PhoneCall className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Need Professional Help?</h2>
              <p className="text-slate-600 mb-4">
                If you or someone you know is struggling with gaming addiction, help is available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-primary hover:bg-primary/90">Contact Support</Button>
                <Button variant="outline" className="bg-white">View External Resources</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
