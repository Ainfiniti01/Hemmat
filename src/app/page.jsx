import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory";
import NewArrivals from "../components/NewArrivals";
import FeaturedProducts from "../components/FeaturedProducts";
import SaleSection from "../components/SaleSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import InstagramFeed from "../components/InstagramFeed";
import Newsletter from "../components/Newsletter";
import BrandHighlights from "../components/BrandHighlights";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      <HeroSection />

      <ScrollReveal direction="up" delay={0.1} duration={0.8}>
        <ShopByCategory />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2} duration={0.8}>
        <NewArrivals />
      </ScrollReveal>

      <ScrollReveal direction="fade" delay={0.1} duration={1.0}>
        <FeaturedProducts />
      </ScrollReveal>

      <ScrollReveal direction="zoom" delay={0.1} duration={0.8}>
        <SaleSection />
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.2} duration={0.8}>
        <TestimonialsCarousel />
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={0.1}
        duration={0.8}
        stagger={true}
        staggerDelay={0.15}
      >
        <InstagramFeed />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3} duration={0.8}>
        <Newsletter />
      </ScrollReveal>

      <ScrollReveal direction="fade" delay={0.2} duration={0.8}>
        <BrandHighlights />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1} duration={0.8}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
