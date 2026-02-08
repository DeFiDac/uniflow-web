import { Shield, Lock, Zap, Key } from 'lucide-react';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function SecuritySection() {
  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-foreground"
            style={{
              fontFamily: 'var(--font-serif)',
            }}
          >
            Security & Trust Built{' '}
            <span
              className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              From Day One
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Your assets deserve the highest level of protection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Secure by Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group bg-card"
            style={{
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-chart-2"
                style={{
                  boxShadow: '0 4px 20px rgba(52, 211, 153, 0.4)',
                }}
              >
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-card-foreground"
                style={{
                  fontFamily: 'var(--font-serif)',
                }}
              >
                Secure by Design
              </h3>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 relative z-10">
              <motion.div variants={item} className="flex gap-3">
                <Shield className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Deployed on secure servers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Following industry-recommended best practices
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <Key className="w-5 h-5 flex-shrink-0 mt-1 text-chart-2" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Privy-Powered AI Agent Wallet
                  </p>
                  <p className="text-sm text-muted-foreground">
                    UniFlow operates an autonomous AI agent wallet that executes onchain transactions
                    on Uniswap V4 independently with strict policy controls and security guardrails
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <Shield className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Full transparency
                  </p>
                  <p className="text-sm text-muted-foreground">
                    On Uniswap V4 transaction execution with intelligent safeguards
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <Lock className="w-5 h-5 flex-shrink-0 mt-1 text-chart-3" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    No seed phrases
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Or private keys ever requested from you
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Seamless UX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group bg-card"
            style={{
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-chart-2 to-chart-3"
                style={{
                  boxShadow: '0 4px 20px rgba(45, 212, 191, 0.4)',
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-card-foreground"
                style={{
                  fontFamily: 'var(--font-serif)',
                }}
              >
                Seamless User Experience
              </h3>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 relative z-10">
              <motion.div variants={item} className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-1 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c.018.198.026.396.026.595 0 6.068-4.618 13.064-13.064 13.064-2.593 0-5.005-.758-7.036-2.059.359.042.725.063 1.095.063 2.149 0 4.126-.734 5.693-1.965-2.008-.037-3.701-1.364-4.286-3.187.281.054.569.082.866.082.42 0 .827-.057 1.213-.162-2.098-.421-3.679-2.276-3.679-4.501v-.058c.619.344 1.326.551 2.079.575-1.231-.823-2.041-2.228-2.041-3.821 0-.841.226-1.631.622-2.312 2.262 2.777 5.638 4.602 9.446 4.794-.078-.336-.119-.686-.119-1.045 0-2.532 2.053-4.585 4.585-4.585 1.319 0 2.51.557 3.346 1.447 1.044-.205 2.027-.586 2.913-1.109-.343 1.071-1.07 1.968-2.017 2.535.927-.111 1.81-.357 2.633-.722-.615.92-1.393 1.727-2.291 2.374z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Telegram Integration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Access your Uniswap V4 portfolio insights and opportunities directly in chat
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <Zap className="w-5 h-5 flex-shrink-0 mt-1 text-chart-2" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    AI-powered execution
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Wallet executes Uniswap V4 yield optimization strategies with your approval
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-1 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Real-time notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For new Uniswap V4 LP opportunities and transaction status
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-3">
                <Shield className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    Instant control
                  </p>
                  <p className="text-sm text-muted-foreground">
                    And disconnect option anytime
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Selling Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-border rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden bg-card"
          style={{
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5" />

          <h3
            className="text-2xl font-bold mb-6 text-center relative z-10 text-foreground"
            style={{
              fontFamily: 'var(--font-serif)',
            }}
          >
            Why Choose UniFlow?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              'Real-time Uniswap V4 data-backed advice',
              'AI agent wallet powered by Privy',
              'Independent Uniswap V4 transaction execution with policy controls',
              'Works across 4 major chains running Uniswap V4',
              'Risk-aware V4 LP recommendations',
              'Telegram-native for ultimate convenience',
              'Secure infrastructure & best practices',
              'Uniswap V4-specialized insights',
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <span className="text-xl text-primary">✓</span>
                <span className="text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
