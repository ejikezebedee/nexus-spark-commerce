import { Github, Twitter, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Electronics", href: "#" },
        { label: "Gaming", href: "#" },
        { label: "Audio", href: "#" },
        { label: "Computers", href: "#" },
        { label: "Accessories", href: "#" }
      ]
    },
    {
      title: "Web3",
      links: [
        { label: "Wallet Connect", href: "#" },
        { label: "$ZSHOP Token", href: "#" },
        { label: "NFT Gallery", href: "#" },
        { label: "Crypto Payments", href: "#" },
        { label: "Rewards Program", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Size Guide", href: "#" },
        { label: "Track Order", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                ZSHOP
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The future of e-commerce powered by AI and Web3 technology. 
              Shop smarter, earn crypto rewards, and join the next generation of digital commerce.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-muted/50 border-border flex-1"
                />
                <Button variant="cosmic">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-border">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Email</div>
              <div className="text-muted-foreground text-sm">support@zshop.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Phone</div>
              <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Address</div>
              <div className="text-muted-foreground text-sm">123 Future Street, Tech City</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ZSHOP. All rights reserved. Built with 💜 for the future.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Web3 Badge */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-cosmic px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-accent-glow rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Powered by Solana Blockchain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;