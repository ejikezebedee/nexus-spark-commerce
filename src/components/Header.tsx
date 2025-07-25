import { useState } from "react";
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              ZSHOP
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Web3</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1">
                2
              </Badge>
            </Button>

            <Button variant="cosmic" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Products</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Categories</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Blog</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Web3</a>
            </nav>
            <Button variant="cosmic" className="w-full">
              <User className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;