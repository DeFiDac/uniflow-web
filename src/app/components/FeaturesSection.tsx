import { Wallet, TrendingUp, Search, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const features = [
  {
    icon: Wallet,
    title: 'Embedded Wallet Management',
    description: 'Seamless Privy-powered wallet integration via Telegram',
    details: [
      'One-click wallet creation and login',
      'Secure session management with instant connect/disconnect',
    ],
    gradient: 'from-primary to-chart-2',
  },
  {
    icon: Search,
    title: 'Uniswap V4 Pool Discovery',
    description: 'Find and analyze V4 pools for any token pair',
    details: [
      'Real-time pool info including fee tiers and pool keys',
      'Multi-chain support: Ethereum, Base, Arbitrum, BNB, Unichain',
    ],
    gradient: 'from-chart-2 to-chart-3',
  },
  {
    icon: TrendingUp,
    title: 'V4 Position Tracking',
    description: 'View and monitor your Uniswap V4 liquidity positions',
    details: [
      'Track LP positions across multiple chains',
      'Position details with token amounts and price ranges',
    ],
    gradient: 'from-chart-3 to-chart-4',
  },
  {
    icon: Zap,
    title: 'One-Command LP Minting',
    description: 'Add liquidity to V4 pools directly from Telegram',
    details: [
      'Token approval and minting in guided steps',
      'Configurable fee tiers and tick ranges for advanced users',
    ],
    gradient: 'from-chart-1 to-primary',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            Four Pillars of{' '}
            <span
              className={`bg-gradient-to-r from-primary to-chart-3 bg-clip-text`}
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              V4 Excellence
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Everything you need to maximize your Uniswap V4 portfolio performance
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="border border-border backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full bg-card"
                style={{
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Hover gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${feature.gradient}`}
                    style={{
                      boxShadow: '0 4px 20px rgba(52, 211, 153, 0.3)',
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle
                    className="text-xl mb-2 text-card-foreground"
                    style={{
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    {feature.title}
                  </CardTitle>
                  <CardDescription
                    className="text-base text-muted-foreground"
                  >
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
