"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000"></div>
      </div>

      <main className="z-10 w-full max-w-md p-4">
        <Card className="w-full backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 relative mb-4">
              {/* Placeholder for Logo - Using a simple neon circle for now */}
              <div className="w-full h-full rounded-full border-2 border-primary shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">A</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gradient">SwapSage</CardTitle>
            <CardDescription className="text-lg">
              Your AI-powered personal crypto strategist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                label="Email"
                required
              />
              <Input
                type="password"
                placeholder="••••••••"
                label="Password"
                required
              />
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                className="mt-2"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    Authenticating...
                  </span>
                ) : "Connect Wallet / Login"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center text-sm text-muted-foreground">
            <p>Access requires a premium membership.</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
