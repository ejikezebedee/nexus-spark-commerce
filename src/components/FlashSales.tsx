import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = [
    {
      id: "1",
      name: "Quantum Wireless Headphones",
      price: 149,
      originalPrice: 299,
      rating: 4.8,
      reviews: 524,
      image: productHeadphones,
      category: "Audio",
      isFlashSale: true,
      discount: 50
    },
    {
      id: "2", 
      name: "CryptoWatch Pro",
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 312,
      image: productSmartwatch,
      category: "Wearables",
      isFlashSale: true,
      discount: 33
    },
    {
      id: "3",
      name: "Gaming Beast Laptop",
      price: 1299,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 189,
      image: productLaptop,
      category: "Computers",
      isFlashSale: true,
      discount: 32
    },
    {
      id: "4",
      name: "MetaPhone X1",
      price: 899,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 756,
      image: productSmartphone,
      category: "Smartphones",
      isFlashSale: true,
      discount: 25
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-foreground">
              ⚡ Flash Sales
            </h2>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-2 bg-gradient-accent px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-white" />
              <div className="flex gap-1 text-white font-mono font-bold">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <Button variant="outline" className="group">
            View All Deals
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Don't miss out! These deals end soon.
          </p>
          <Button variant="cosmic" size="lg">
            Shop All Flash Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;