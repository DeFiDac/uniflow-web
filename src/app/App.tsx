import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SecuritySection } from './components/SecuritySection';
import { CTASection } from './components/CTASection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackgroundPattern } from './components/BackgroundPattern';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden dark">
      <BackgroundPattern />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
}
