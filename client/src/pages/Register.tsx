import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import { ShieldCheck } from "lucide-react";

export default function Register() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <Card className="w-full max-w-md border-slate-200 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/10 p-3 rounded-full">
              <ShieldCheck className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">Create an Account</CardTitle>
          <CardDescription>
            Join India's most trusted fantasy cricket community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Virat" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Kohli" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm font-normal text-slate-600 leading-tight">
                I confirm that I am 18+ years of age and I am not a resident of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="policy" className="mt-1" />
              <Label htmlFor="policy" className="text-sm font-normal text-slate-600 leading-tight">
                I agree to the <Link href="/terms"><a className="text-primary hover:underline">Terms & Conditions</a></Link> and <Link href="/privacy"><a className="text-primary hover:underline">Privacy Policy</a></Link>.
              </Label>
            </div>
          </div>

          <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold mt-2">
            Create Account
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-slate-600">
          <div>
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-primary font-semibold hover:underline">Sign in</a>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
