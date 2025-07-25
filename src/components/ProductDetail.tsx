import { useState } from "react";
import { Heart, Share2, Star, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import productLaptop from "@/assets/product-laptop.jpg";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: "laptop-gaming-beast",
    name: "Gaming Beast Laptop RTX 4080",
    price: 1299,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 189,
    category: "Computers",
    discount: 32,
    inStock: true,
    images: [productLaptop, productLaptop, productLaptop, productLaptop],
    description: "Experience ultimate gaming performance with the Gaming Beast Laptop. Powered by the latest RTX 4080 graphics card and Intel i9 processor, this machine delivers exceptional gaming and creative capabilities.",
    features: [
      "Intel Core i9-13900H Processor",
      "NVIDIA RTX 4080 16GB GDDR6",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "17.3\" 4K OLED Display (165Hz)",
      "Advanced Cooling System",
      "RGB Mechanical Keyboard",
      "Thunderbolt 4 Connectivity"
    ],
    specifications: {
      "Processor": "Intel Core i9-13900H",
      "Graphics": "NVIDIA RTX 4080 16GB",
      "RAM": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "17.3\" 4K OLED 165Hz",
      "OS": "Windows 11 Pro",
      "Weight": "2.8kg",
      "Battery": "99.99Wh Li-ion"
    }
  };

  const reviews = [
    {
      id: 1,
      author: "GamerPro2024",
      rating: 5,
      date: "2024-01-15",
      title: "Incredible Performance!",
      content: "This laptop exceeded my expectations. RTX 4080 handles everything I throw at it.",
      verified: true
    },
    {
      id: 2,
      author: "TechReviewer",
      rating: 4,
      date: "2024-01-10",
      title: "Great for content creation",
      content: "Perfect for video editing and 3D rendering. The display quality is outstanding.",
      verified: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-card rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                }`}
              >
                <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{product.category}</Badge>
              {product.discount && (
                <Badge className="bg-destructive text-destructive-foreground">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              <span className="text-lg text-accent font-semibold">
                Save ${product.originalPrice! - product.price}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Key Features:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-medium min-w-[60px] text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              <Badge className="bg-accent/20 text-accent border-accent/50">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            <div className="flex gap-3">
              <Button variant="cosmic" size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </Button>
              
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="text-center">
              <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">Free Shipping</div>
              <div className="text-xs text-muted-foreground">2-3 days</div>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">30-Day Returns</div>
              <div className="text-xs text-muted-foreground">Full refund</div>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">2-Year Warranty</div>
              <div className="text-xs text-muted-foreground">Manufacturer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <h4 className="font-semibold mb-3">Complete Feature List:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border/50">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center text-white font-semibold">
                        {review.author[0]}
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {review.author}
                          {review.verified && (
                            <Badge className="bg-accent/20 text-accent text-xs">Verified</Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-muted-foreground">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetail;