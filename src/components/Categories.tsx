import { Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      count: "2.5k+ products",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Laptops",
      icon: Laptop,
      count: "1.8k+ products", 
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "Audio",
      icon: Headphones,
      count: "3.2k+ products",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 4,
      name: "Wearables",
      icon: Watch,
      count: "956 products",
      color: "from-yellow-500 to-red-600"
    },
    {
      id: 5,
      name: "Gaming",
      icon: Gamepad2,
      count: "1.4k+ products",
      color: "from-red-500 to-purple-600"
    },
    {
      id: 6,
      name: "Photography",
      icon: Camera,
      count: "687 products",
      color: "from-teal-500 to-green-600"
    },
    {
      id: 7,
      name: "Components",
      icon: Cpu,
      count: "892 products",
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: 8,
      name: "Accessories",
      icon: Zap,
      count: "4.1k+ products",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our vast collection of tech products across all categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer bg-card/50 backdrop-blur-sm hover:shadow-cosmic transition-all duration-300 border-border/50 hover:border-primary/50 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Category Banner */}
        <div className="mt-12 bg-gradient-to-r from-background via-primary/5 to-background border border-primary/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              New Category: Web3 Devices
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover hardware wallets, crypto miners, and blockchain-enabled devices
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-cosmic flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">250+ Products</div>
                  <div className="text-muted-foreground">Starting from $29</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;