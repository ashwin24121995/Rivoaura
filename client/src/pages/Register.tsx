import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation } from "wouter";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Select } from "@/components/ui/select";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const RESTRICTED_STATES = ["Andhra Pradesh", "Assam", "Nagaland", "Odisha", "Sikkim", "Telangana"];

export default function Register() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    state: "",
    dateOfBirth: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedAgeState, setAcceptedAgeState] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const registerMutation = trpc.auth.register.useMutation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!acceptedTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    if (!acceptedAgeState) {
      newErrors.ageState = "You must confirm age and state eligibility";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    registerMutation.mutate(
      {
        ...formData,
        acceptedTerms,
        acceptedAgeState,
      },
      {
        onSuccess: (result) => {
          if (result.success && result.token && result.user) {
            // Store token in localStorage
            localStorage.setItem("auth_token", result.token);

            // Update auth context with complete user object
            login({
              ...result.user,
              avatar: result.user.username?.substring(0, 2).toUpperCase() || 'U',
            });

            toast.success("Registration successful! Welcome to RIVOAURA!");

            // Redirect to tournaments page
            setLocation("/tournaments");
          }
        },
        onError: (error: any) => {
          console.error("Registration error:", error);
          toast.error(error.message || "Registration failed. Please try again.");
        },
      }
    );
  };

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="Virat"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                  disabled={registerMutation.isPending}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Kohli"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                  disabled={registerMutation.isPending}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
                disabled={registerMutation.isPending}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateField("password", e.target.value)}
                className={errors.password ? "border-red-500" : ""}
                disabled={registerMutation.isPending}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <select
                id="state"
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
                className={`flex h-10 w-full rounded-md border ${
                  errors.state ? "border-red-500" : "border-input"
                } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                disabled={registerMutation.isPending}
              >
                <option value="">Select your state</option>
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state} disabled={RESTRICTED_STATES.includes(state)}>
                    {state} {RESTRICTED_STATES.includes(state) ? "(Not Available)" : ""}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-sm text-red-500">{errors.state}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateField("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? "border-red-500" : ""}
                disabled={registerMutation.isPending}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
              )}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="ageState"
                  checked={acceptedAgeState}
                  onCheckedChange={(checked) => {
                    setAcceptedAgeState(checked as boolean);
                    if (errors.ageState) {
                      const newErrors = { ...errors };
                      delete newErrors.ageState;
                      setErrors(newErrors);
                    }
                  }}
                  className="mt-1"
                  disabled={registerMutation.isPending}
                />
                <Label htmlFor="ageState" className="text-sm font-normal text-slate-600 leading-tight">
                  I confirm that I am 18+ years of age and I am not a resident of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana.
                </Label>
              </div>
              {errors.ageState && (
                <p className="text-sm text-red-500">{errors.ageState}</p>
              )}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => {
                    setAcceptedTerms(checked as boolean);
                    if (errors.terms) {
                      const newErrors = { ...errors };
                      delete newErrors.terms;
                      setErrors(newErrors);
                    }
                  }}
                  className="mt-1"
                  disabled={registerMutation.isPending}
                />
                <Label htmlFor="terms" className="text-sm font-normal text-slate-600 leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500">{errors.terms}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold mt-2"
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex justify-center text-sm text-slate-600">
          <div>
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
