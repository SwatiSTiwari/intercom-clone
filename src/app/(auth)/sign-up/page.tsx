"use client";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and privacy policy",
  }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      companyName: "",
      agreeTerms: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: SignUpFormValues) {
    setIsLoading(true);
    // In a real app, this would be replaced with Clerk's signUp function
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully! (This is a demo)");
    }, 1000);
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <motion.div
        className="w-full max-w-md px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <Link href="/">
            <Logo variant="dark" />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Get started with Intercom</h1>
          <p className="text-center text-muted-foreground">
            Start your free 14-day trial. No credit card required.
          </p>
        </div>

        <div className="space-y-6">
          <Button
            className="w-full bg-[#4285F4] hover:bg-[#4285F4]/90 text-white"
            type="button"
            onClick={() => alert("Google Sign Up would be implemented with Clerk in a real application")}
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.95C6.48 1.95 2 6.43 2 11.95C2 16.3 5.01 19.96 9.1 21.33C9.15 21.34 9.19 21.35 9.24 21.35C9.51 21.35 9.65 21.16 9.65 20.99C9.65 20.81 9.64 20.19 9.64 19.42C9.3 19.48 8.97 19.52 8.65 19.52C6.93 19.52 6.4 18.3 6.4 18.3C5.88 17.18 5.16 16.88 5.16 16.88C4.25 16.3 5.16 16.27 5.23 16.27H5.24C6.28 16.36 6.87 17.31 6.87 17.31C7.32 18.12 7.93 18.36 8.47 18.36C8.9 18.36 9.28 18.21 9.51 18.1C9.6 17.5 9.78 17.1 9.97 16.87C7.93 16.64 5.8 15.78 5.8 11.95C5.8 10.84 6.24 9.93 6.89 9.21C6.79 8.96 6.4 7.92 6.97 6.47C6.97 6.47 7.01 6.47 7.06 6.47C7.32 6.47 8.02 6.58 9.62 7.69C10.37 7.47 11.17 7.36 11.97 7.36C12.77 7.36 13.57 7.47 14.32 7.69C15.93 6.58 16.62 6.47 16.88 6.47C16.94 6.47 16.97 6.47 16.97 6.47C17.55 7.92 17.15 8.96 17.05 9.21C17.7 9.93 18.14 10.84 18.14 11.95C18.14 15.79 16 16.64 13.95 16.87C14.2 17.15 14.42 17.69 14.42 18.54C14.42 19.76 14.41 20.73 14.41 20.99C14.41 21.16 14.55 21.35 14.82 21.35C14.86 21.35 14.91 21.34 14.96 21.33C19.06 19.96 22.06 16.3 22.06 11.95C22.06 6.43 17.58 1.95 12.06 1.95H12V1.95Z"
                fill="currentColor"
              ></path>
            </svg>
            Sign up with Google
          </Button>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-muted"></div>
            <span className="mx-4 flex-shrink text-sm text-muted-foreground">
              Or, sign up with your email
            </span>
            <div className="flex-grow border-t border-muted"></div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Smith"
                        {...field}
                        autoComplete="name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@company.com"
                        {...field}
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        {...field}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Acme Inc."
                        {...field}
                        autoComplete="organization"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agree-terms"
                  className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  onChange={(e) => form.setValue("agreeTerms", e.target.checked)}
                />
                <label
                  htmlFor="agree-terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/90">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Start free trial"}
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
