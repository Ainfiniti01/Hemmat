import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
  id: 1,
  backgroundImage:
    "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469",
  backgroundAlt:
    "Model showcasing a premium human hair wig under soft natural lighting",
  category: "New Wig Arrivals",
  headline: "Discover the Latest Wig Collection",
  subtext:
    "Explore our newest luxury wigs — from silky straight to deep curls. Each piece is crafted for natural beauty, comfort, and confidence.",
  ctaText: "Shop Luxury Wigs”",
  ctaLink: "/products",
  textPosition: "left",
  accentColor: "emerald",
  seoKeywords:
    "new wig arrivals, human hair wigs, natural look wigs, premium wigs, latest hair styles",
},
{
  id: 2,
  backgroundImage:
    "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  backgroundAlt:
    "Close-up of luxury braided wig with detailed lace front finish",
  category: "Braided Collection",
  headline: "Elegance in Every Braid",
  subtext:
    "Handcrafted braided wigs with precision and style. Perfect for protective styling without the salon hours — just wear and slay effortlessly.",
  ctaText: "View Braided Wigs",
  ctaLink: "/products?category=braided",
  textPosition: "right",
  accentColor: "pink",
  seoKeywords:
    "braided wigs, hand-braided wigs, protective styles, lace front braids, luxury hair collection",
},
{
  id: 3,
  backgroundImage:
    "https://images.unsplash.com/photo-1629397683830-9805395892e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  backgroundAlt:
    "Hair stylist styling curly human hair wig in modern beauty studio",
  category: "Styling & Care",
  headline: "Define Your Signature Look",
  subtext:
    "From curls to sleek straight — discover styles that express your beauty. Our professional care tips and styling guide keep your wigs flawless.",
  ctaText: "Chat with a Stylist",
  ctaLink: "/contact",
  textPosition: "center",
  accentColor: "rose",
  seoKeywords:
    "wig styling, hair care tips, curly wigs, straight wigs, hair maintenance",
},
{
  id: 4,
  backgroundImage:
    "https://images.unsplash.com/photo-1614838280617-8a8f8e4cd04a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  backgroundAlt:
    "Professional hairstylist installing custom lace wig on client with precision",
  category: "Custom Wig Service",
  headline: "Tailored to Perfection",
  subtext:
    "Get your dream wig customized just for you — length, texture, and fit. Experience beauty that feels personal, natural, and truly yours.",
  ctaText: "Book Consultation",
  ctaLink: "/contact",
  textPosition: "left",
  accentColor: "pink",
  seoKeywords:
    "custom wigs, lace wig install, bespoke hair, personalized wig design, wig fitting service",
},
{
  id: 5,
  backgroundImage:
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1611",
  backgroundAlt:
    "Professional hairstylist using high-quality wig tools and care products during installation",
  category: "Tools & Maintenance",
  headline: "Style Smart. Use the Right Tools.",
  subtext:
    "Great hair starts with the right tools. From brushes to adhesives and care products — discover essentials that keep your wigs flawless and lasting longer.",
  ctaText: "Shop Tools & Care",
  ctaLink: "/products?category=tools",
  textPosition: "left",
  accentColor: "emerald",
  seoKeywords:
    "wig tools, wig care products, wig maintenance, styling tools, lace adhesive, wig brush",
},
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const currentSlideData = slides[currentSlide];

  const colors = {
    pink: "#FFC0CB",
    emerald: "#50C878",
    black: "#000000",
    white: "#FFFFFF",
  };

  const getAccentColor = (accent) => {
    return accent === "pink" ? colors.pink : colors.emerald;
  };

  // Animation variants for different elements
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2, ease: "easeOut" },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
      },
    }),
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      backgroundColor: getAccentColor(currentSlideData.accentColor),
      boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 8px 32px ${getAccentColor(currentSlideData.accentColor)}60`,
    },
    hover: {
      scale: 1.05,
      y: -2,
      backgroundColor: colors.white,
      boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 12px 40px ${getAccentColor(currentSlideData.accentColor)}70`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
    },
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      role="banner"
      aria-label="Wig and Hair Fashion Hero Slider"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Heemat's Collection - Luxury Wig & Hair Store",
            description:
              "Discover premium wigs, Frontals & Closures, Synthetic Wigs, and professional hairstyling services.",
            url: "https://yoursite.com",
            sameAs: [
              "https://instagram.com/Heemat'sWigs",
              "https://facebook.com/Heemat'sWigs",
            ],
          }),
        }}
      />

      {/* Enhanced Background Images with Motion */}
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          role="img"
          aria-label={currentSlideData.backgroundAlt}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${currentSlideData.backgroundImage})`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          {/* Enhanced overlay with gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Content Overlay with Motion */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.article
            key={`content-${currentSlide}`}
            initial="hidden"
            animate="visible"
            className={`${
              currentSlideData.textPosition === "left"
                ? "text-left max-w-4xl"
                : currentSlideData.textPosition === "right"
                  ? "text-right max-w-4xl ml-auto"
                  : "text-center max-w-5xl mx-auto"
            }`}
            role="main"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Enhanced Category Badge */}
            <motion.div
              className="inline-block mb-6"
              variants={textVariants}
              custom={0}
            >
              <motion.span
                className="text-black px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase shadow-2xl backdrop-blur-sm"
                style={{
                  backgroundColor: getAccentColor(currentSlideData.accentColor),
                  fontFamily: "Montserrat, sans-serif",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 12px 40px rgba(0,0,0,0.6), 0 6px 20px ${getAccentColor(currentSlideData.accentColor)}80`,
                }}
                role="badge"
                aria-label={`Category: ${currentSlideData.category}`}
              >
                {currentSlideData.category}
              </motion.span>
            </motion.div>

            {/* Enhanced Headline with Motion */}
            <header>
              <motion.h1
                className="text-white font-bold leading-[1.1] mb-6"
                variants={textVariants}
                custom={1}
                style={{
                  fontSize: "clamp(44px, 7vw, 88px)",
                  fontFamily: "Montserrat, sans-serif",
                  textShadow:
                    "0 6px 24px rgba(0,0,0,0.9), 0 3px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)",
                  letterSpacing: "-0.02em",
                  WebkitTextStroke: "1px rgba(0,0,0,0.3)",
                }}
              >
                {currentSlideData.headline}
              </motion.h1>
            </header>

            {/* Enhanced Subtext */}
            <motion.p
              className="text-white text-xl md:text-2xl mb-12 leading-relaxed"
              variants={textVariants}
              custom={2}
              style={{
                fontFamily: "Inter, sans-serif",
                textShadow:
                  "0 4px 16px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)",
                maxWidth:
                  currentSlideData.textPosition === "center"
                    ? "42rem"
                    : "36rem",
                margin:
                  currentSlideData.textPosition === "center"
                    ? "0 auto 3rem auto"
                    : "0 0 3rem 0",
                backgroundColor: "rgba(0,0,0,0.2)",
                padding: "1rem 1.5rem",
                borderRadius: "0.75rem",
                backdropFilter: "blur(4px)",
              }}
            >
              {currentSlideData.subtext}
            </motion.p>

            {/* Enhanced CTA Button with Motion */}
            <motion.div variants={textVariants} custom={3}>
              <motion.a
                href={currentSlideData.ctaLink}
                className="group inline-flex items-center text-black font-bold px-12 py-5 rounded-full text-lg border-2 backdrop-blur-sm"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "0.5px",
                  borderColor: getAccentColor(currentSlideData.accentColor),
                }}
                aria-label={`${currentSlideData.ctaText} - ${currentSlideData.category}`}
                role="button"
              >
                {currentSlideData.ctaText}
                <motion.span
                  className="ml-3 text-xl"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                  style={{ fontWeight: "normal" }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.article>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <motion.button
        onClick={handlePrevSlide}
        disabled={isAnimating}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20"
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Previous slide"
        type="button"
      >
        <motion.div whileHover={{ x: -2 }} transition={{ duration: 0.2 }}>
          <ChevronLeft size={24} aria-hidden="true" />
        </motion.div>
      </motion.button>

      <motion.button
        onClick={handleNextSlide}
        disabled={isAnimating}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20"
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Next slide"
        type="button"
      >
        <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
          <ChevronRight size={24} aria-hidden="true" />
        </motion.div>
      </motion.button>

      {/* Enhanced Slide Indicators */}
      <nav
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-4"
        aria-label="Slide navigation"
        role="tablist"
      >
        {slides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className="w-12 h-1 rounded-full transition-all duration-500 disabled:opacity-50"
            style={{
              backgroundColor:
                index === currentSlide
                  ? getAccentColor(currentSlideData.accentColor)
                  : "rgba(255,255,255,0.3)",
            }}
            whileHover={{
              scale: index === currentSlide ? 1 : 1.2,
              backgroundColor:
                index === currentSlide
                  ? getAccentColor(currentSlideData.accentColor)
                  : "rgba(255,255,255,0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}: ${slide.category}`}
            aria-selected={index === currentSlide}
            role="tab"
            type="button"
          />
        ))}
      </nav>

      {/* Enhanced Progress Bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20"
        role="progressbar"
        aria-label="Slide progress"
      >
        <motion.div
          className="h-full"
          style={{
            backgroundColor: getAccentColor(currentSlideData.accentColor),
          }}
          initial={{ width: 0 }}
          animate={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            boxShadow: `0 0 10px ${getAccentColor(currentSlideData.accentColor)}60`,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        /* Luxury gradient animations */
        @keyframes luxuryShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes elegantFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sophisticatedSlide {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Enhanced typography */
        .luxury-heading {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .luxury-text {
          font-family: "Inter", sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }

        /* Smooth transitions for all elements */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced focus states for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid ${getAccentColor(currentSlideData.accentColor)};
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
