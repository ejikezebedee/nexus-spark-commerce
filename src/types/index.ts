export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  isFlashSale?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;
  loyaltyTokens: number;
  isConnected: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'card' | 'crypto' | 'tokens';
  createdAt: string;
  nftReceiptId?: string;
}

export interface Web3Features {
  walletConnected: boolean;
  loyaltyTokenBalance: number;
  nftReceipts: NFTReceipt[];
  rewards: Reward[];
}

export interface NFTReceipt {
  id: string;
  orderId: string;
  tokenId: string;
  imageUrl: string;
  mintedAt: string;
}

export interface Reward {
  id: string;
  type: 'purchase' | 'referral' | 'review';
  amount: number;
  description: string;
  earnedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  aiGenerated: boolean;
}

export interface Affiliate {
  id: string;
  userId: string;
  code: string;
  commissionRate: number;
  totalEarnings: number;
  referrals: number;
  isActive: boolean;
}