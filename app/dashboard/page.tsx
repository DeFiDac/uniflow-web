"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { FloatingChatWrapper } from "@/components/dashboard/FloatingChatWrapper";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-full glass-panel border border-primary/20 text-primary text-sm font-medium">
            ● Connected: 0x12..4F
          </div>
          <Button variant="ghost" size="sm">Settings</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Portfolio Summary (2/3 width) */}
        <div className="md:col-span-2 space-y-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>My Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$124,532.00</span>
                <span className="text-primary font-medium">+12.5%</span>
              </div>
              <div className="space-y-4">
                {/* Mock Assets */}
                {[
                  { name: 'Bitcoin', symbol: 'BTC', amount: '1.2', value: '$72,000' },
                  { name: 'Ethereum', symbol: 'ETH', amount: '15.5', value: '$45,000' },
                  { name: 'Solana', symbol: 'SOL', amount: '540', value: '$7,532' },
                ].map((asset, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-secondary opacity-70"></div>
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="text-xs text-muted-foreground">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{asset.value}</p>
                      <p className="text-xs text-muted-foreground">{asset.amount} {asset.symbol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Column 2: Dashboard Recommendations (1/3 width) */}
        <div className="space-y-8">
          <Card className="h-full border-primary/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <CardHeader>
              <CardTitle className="text-xl">Market Signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary mb-2">High Confidence Signal</p>
                <p className="text-sm text-foreground mb-4">
                  Market analysis suggests a strong accumulation phase for <strong>ETH</strong>. Consider increasing exposure before the next resistance break at $3,200.
                </p>
                <Button fullWidth size="sm">Execute Trade</Button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Recent Actions</h4>
                <div className="text-sm border-l-2 border-primary/30 pl-4 py-1">
                  <p>Auto-compounded SOL rewards</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm border-l-2 border-secondary/30 pl-4 py-1">
                  <p>Rebalanced Portfolio</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      <FloatingChatWrapper />
    </div>
  );
}
