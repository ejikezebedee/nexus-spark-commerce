import { Heart, ShoppingCart, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isFlashSale?: boolean;
  discount?: number;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  category, 
  isFlashSale,
  discount 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-cosmic transition-all duration-300 border-border/50 hover:border-primary/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isFlashSale && (
            <Badge className="bg-accent text-accent-foreground animate-pulse-glow">
              Flash Sale
            </Badge>
          )}
          {discount && (
            <Badge variant="destructive">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="outline" className="w-8 h-8 bg-card/80 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" className="w-8 h-8 bg-card/80 backdrop-blur-sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button variant="cosmic" className="w-full group/btn">
          <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;