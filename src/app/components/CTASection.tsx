import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-chart-2/10"
          style={{
            boxShadow: '0 20px 60px rgba(52, 211, 153, 0.3)',
          }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(52, 211, 153, 0.6), transparent)' }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.6), transparent)' }}
          />

          <div className="relative z-10">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 text-foreground"
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >
              Ready to optimize your Uniswap V4 portfolio?
            </h2>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto font-medium text-foreground/80"
            >
              Join UniFlow today and let AI guide your assets to the best yields on Uniswap V4
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg group relative overflow-hidden bg-primary text-primary-foreground transition-all"
                style={{
                  fontFamily: 'var(--font-sans)',
                  boxShadow: '0 8px 30px rgba(52, 211, 153, 0.5)',
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
                className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-foreground text-foreground backdrop-blur-sm transition-all hover:bg-foreground/5 inline-flex items-center justify-center"
                style={{
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Chat with our Telegram Bot
              </a>
            </div>

            <p
              className="text-sm mt-6 text-muted-foreground"
            >
              No credit card required • Secure & transparent • Free to start
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}