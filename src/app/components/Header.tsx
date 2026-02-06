import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #34d399, #10b981)',
                boxShadow: '0 4px 20px rgba(52, 211, 153, 0.4)',
              }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              UniFlow
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Security
            </a>
            <a
              href="https://openclaw.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              OpenClaw
            </a>
          </nav>
          <a
            href="https://t.me/UniFlowOfficialBot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all relative overflow-hidden group bg-primary text-primary-foreground inline-flex items-center justify-center"
            style={{
              boxShadow: '0 4px 20px rgba(52, 211, 153, 0.3)',
            }}
          >
            <span className="relative z-10">Chat with our Telegram Bot</span>
            <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}