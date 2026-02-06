import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-card/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-chart-2"
                style={{
                  boxShadow: '0 4px 20px rgba(52, 211, 153, 0.4)',
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-semibold text-foreground"
                style={{
                  fontFamily: 'var(--font-serif)',
                }}
              >
                UniFlow
              </span>
            </div>
            <p className="mb-4 max-w-md text-muted-foreground">
              AI-powered Uniswap V4 portfolio optimization. Let your assets flow to the best yields, seamlessly.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with{' '}
              <a
                href="https://openclaw.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                OpenClaw
              </a>
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-foreground"
              style={{
                fontFamily: 'var(--font-sans)',
              }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {['Features', 'Security', 'Pricing'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-foreground"
              style={{
                fontFamily: 'var(--font-sans)',
              }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://openclaw.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  OpenClaw
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 UniFlow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-muted-foreground hover:text-primary hover:underline transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
