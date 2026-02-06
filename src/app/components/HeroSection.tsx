import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-primary/30"
            style={{
              background: 'rgba(52, 211, 153, 0.1)',
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Powered by OpenClaw AI
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-bold mb-6 leading-[1.1] text-foreground"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            }}
          >
            Let your assets flow to the{' '}
            <span
              className="inline-block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              best yields
            </span>{' '}
            on Uniswap V4, seamlessly
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl mb-4 font-semibold text-foreground/90"
            style={{
              fontFamily: 'var(--font-sans)',
            }}
          >
            AI-powered Uniswap V4 portfolio optimization. Real-time LP discovery. Zero friction.
          </motion.p>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground"
          >
            Access via Telegram with seamless embedded wallet management. Get instant insights on your Uniswap V4 holdings.
            Discover high-APY LP opportunities across Ethereum, Arbitrum, Base, and more—all backed by live Uniswap V4 data
            and secure infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg group relative overflow-hidden bg-primary text-primary-foreground transition-all"
              style={{
                fontFamily: 'var(--font-sans)',
                boxShadow: '0 8px 30px rgba(52, 211, 153, 0.4)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Optimizing Your Uniswap V4 Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href="https://t.me/UniFlowOfficialBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-primary text-primary backdrop-blur-sm hover:bg-primary/10 transition-all inline-flex items-center justify-center"
              style={{
                fontFamily: 'var(--font-sans)',
              }}
            >
              Chat with our Telegram Bot
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            <div>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-2 bg-clip-text"
                style={{
                  fontFamily: 'var(--font-serif)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                5+
              </div>
              <div className="text-muted-foreground">Chains Supported</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text"
                style={{
                  fontFamily: 'var(--font-serif)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real-time
              </div>
              <div className="text-muted-foreground">Uniswap V4 Data</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text"
                style={{
                  fontFamily: 'var(--font-serif)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI-Powered
              </div>
              <div className="text-muted-foreground">Portfolio Analysis</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}