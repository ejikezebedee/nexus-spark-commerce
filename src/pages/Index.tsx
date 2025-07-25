import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlashSales from "@/components/FlashSales";
import TodaysDeals from "@/components/TodaysDeals";
import Categories from "@/components/Categories";
import Web3Features from "@/components/Web3Features";
import AIFeatures from "@/components/AIFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FlashSales />
        <TodaysDeals />
        <Categories />
        <Web3Features />
        <AIFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;