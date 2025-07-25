import { Coins, Shield, Gift, TrendingUp, Wallet, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Web3Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your Phantom or Solflare wallet to start earning rewards",
      action: "Connect Now",
      variant: "cosmic" as const,
      badge: "Popular"
    },
    {
      icon: Coins,
      title: "$ZSHOP Rewards",
      description: "Earn loyalty tokens with every purchase and referral",
      action: "Learn More",
      variant: "accent" as const,
      badge: "Earn"
    },
    {
      icon: Shield,
      title: "NFT Receipts",
      description: "Get unique NFT receipts for premium purchases",
      action: "View Gallery",
      variant: "outline" as const,
      badge: "Exclusive"
    },
    {
      icon: TrendingUp,
      title: "Crypto Payments",
      description: "Pay with USDT, ETH, BNB and other cryptocurrencies",
      action: "Pay Crypto",
      variant: "secondary" as const,
      badge: "Fast"
    }
  ];

  const stats = [
    { label: "Total Rewards Distributed", value: "$2.5M", icon: Gift },
    { label: "Active Token Holders", value: "12.8K", icon: Coins },
    { label: "NFT Receipts Minted", value: "3.2K", icon: Star },
    { label: "Crypto Transactions", value: "45.6K", icon: TrendingUp }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🚀 Web3 Powered Shopping
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience the future of e-commerce with blockchain technology, crypto rewards, 
            and NFT collectibles. Shop smarter, earn more.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm hover:shadow-cosmic transition-all duration-300 border-border/50 hover:border-primary/50 relative overflow-hidden"
              >
                {feature.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs">
                    {feature.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto bg-gradient-cosmic rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                  <Button variant={feature.variant} size="sm" className="w-full">
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-cosmic rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Web3 Impact Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-white/80 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            How to Start Earning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Connect Wallet</h4>
              <p className="text-muted-foreground text-sm">
                Link your Solana wallet to start participating in the Web3 ecosystem
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">Shop & Earn</h4>
              <p className="text-muted-foreground text-sm">
                Make purchases and automatically earn $ZSHOP tokens as rewards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Use Rewards</h4>
              <p className="text-muted-foreground text-sm">
                Redeem tokens for discounts, exclusive products, or trade on DEX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Features;