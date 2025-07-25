import { Bot, Zap, Brain, MessageCircle, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AIFeatures = () => {
  const aiFeatures = [
    {
      icon: MessageCircle,
      title: "AI Shopping Assistant",
      description: "Get personalized recommendations and instant support from our AI chatbot",
      status: "Active",
      color: "bg-green-500"
    },
    {
      icon: Brain,
      title: "Smart Product Descriptions",
      description: "AI-generated detailed descriptions highlighting key features and benefits",
      status: "Active", 
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Dynamic Pricing",
      description: "AI-powered price optimization based on market trends and demand",
      status: "Beta",
      color: "bg-yellow-500"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Advanced search with natural language processing and image recognition",
      status: "Coming Soon",
      color: "bg-purple-500"
    }
  ];

  const benefits = [
    "24/7 Customer Support",
    "Personalized Recommendations", 
    "Smart Price Alerts",
    "Automated Content Generation",
    "Predictive Analytics",
    "Voice Search Capability"
  ];

  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-primary animate-pulse-glow" />
            <h2 className="text-3xl font-bold text-foreground">
              AI-Powered Experience
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to enhance your shopping journey. 
            From personalized recommendations to automated customer support.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <Badge 
                      className={`${feature.color} text-white text-xs px-2 py-1`}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-background via-primary/5 to-background border border-primary/20 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Try Our AI Assistant
              </h3>
              <p className="text-muted-foreground mb-6">
                Ask questions, get product recommendations, or get help with your order. 
                Our AI is trained on our entire product catalog and can assist with any inquiry.
              </p>
              
              <div className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="cosmic" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat
                <span className="ml-2 opacity-75 group-hover:opacity-100 transition-opacity">
                  (OpenAI Powered)
                </span>
              </Button>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">I'm looking for a gaming laptop under $1500</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-gradient-cosmic rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      I found 3 great gaming laptops in your budget! The Gaming Beast Laptop 
                      is currently on sale for $1299. Would you like to see the specs?
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Yes, please!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">98.5%</div>
            <div className="text-muted-foreground text-sm">AI Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">2.3s</div>
            <div className="text-muted-foreground text-sm">Avg Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
            <div className="text-muted-foreground text-sm">Availability</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">50K+</div>
            <div className="text-muted-foreground text-sm">Conversations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;