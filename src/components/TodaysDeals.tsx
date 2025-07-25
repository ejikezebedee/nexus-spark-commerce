import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";

const TodaysDeals = () => {
  const todaysDeals = [
    {
      id: "5",
      name: "Premium Audio Experience",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 342,
      image: productHeadphones,
      category: "Audio",
      discount: 20
    },
    {
      id: "6",
      name: "Smart Fitness Tracker",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 567,
      image: productSmartwatch,
      category: "Health",
      discount: 25
    },
    {
      id: "7",
      name: "Ultra Performance Laptop",
      price: 1599,
      originalPrice: 1899,
      rating: 4.9,
      reviews: 234,
      image: productLaptop,
      category: "Computers",
      discount: 16
    },
    {
      id: "8",
      name: "AI-Powered Smartphone",
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      reviews: 891,
      image: productSmartphone,
      category: "Mobile",
      discount: 20
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8 text-accent animate-pulse-glow" />
            <h2 className="text-3xl font-bold text-foreground">
              Today's Deals
            </h2>
          </div>

          <Button variant="outline" className="group">
            View All
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-8 text-lg">
          Handpicked deals updated daily. Limited time offers you don't want to miss.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todaysDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 bg-gradient-cosmic rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzk5OTk5OSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Subscribe to Daily Deals
            </h3>
            <p className="text-white/80 mb-6">
              Get notified about the best deals before anyone else
            </p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysDeals;