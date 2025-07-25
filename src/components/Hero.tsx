import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Future Commerce" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-20 h-20 bg-accent/20 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent animate-pulse-glow">
            The Future of
            <br />
            <span className="text-accent-glow">Commerce</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered shopping meets Web3 technology. Earn crypto rewards, 
            trade NFTs, and experience the next generation of e-commerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Shopping
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2" />
              Explore Web3 Features
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">50K+</div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-glow mb-2">10K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">$2M+</div>
              <div className="text-muted-foreground">Rewards Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;