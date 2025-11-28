import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: "Heemat's Collection - Trendy & Affordable Fashion Store",
  description:
    "Discover our exclusive collection of handcrafted Hair Care & Accessories, Frontals & Closures, and accessories. Premium fashion at affordable prices with worldwide shipping.",
  keywords:
    "fashion, Hair Care & Accessories, Frontals & Closures, accessories, trendy fashion, affordable fashion, online fashion store",
  author: "Heemat's Collection",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Heemat's Collection - Trendy & Affordable Fashion Store",
    description:
      "Discover our exclusive collection of handcrafted Hair Care & Accessories, Frontals & Closures, and accessories.",
    type: "website",
    locale: "en_US",
    siteName: "Heemat's Collection",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heemat's Collection - Trendy & Affordable Fashion Store",
    description:
      "Discover our exclusive collection of handcrafted Hair Care & Accessories, Frontals & Closures, and accessories.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
          <CartProvider>
            {children}
          </CartProvider>
        </div>
        <ScrollToTopButton />

        {/* Global Luxury Animations & Styles */}
        <style jsx global>{`
          /* Smooth scrolling and base styles */
          html {
            scroll-behavior: smooth;
          }
          
          * {
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #D4AF37, #50C878);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #B8941F, #3EA864);
          }

          .dark ::-webkit-scrollbar-track {
            background: #2a2a2a;
          }

          /* Luxury button effects */
          .luxury-button {
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .luxury-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          .luxury-button:hover::before {
            left: 100%;
          }

          .luxury-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }

          /* Card hover effects */
          .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: center bottom;
          }

          .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .card-hover:hover .card-image {
            transform: scale(1.08);
          }

          .card-image {
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Image zoom effects */
          .image-zoom {
            overflow: hidden;
          }

          .image-zoom img {
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .image-zoom:hover img {
            transform: scale(1.1);
          }

          /* Navigation link effects */
          .nav-link {
            position: relative;
            overflow: hidden;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #D4AF37, #50C878);
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link:hover::after {
            width: 100%;
          }

          /* Elegant animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInZoom {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Gold shimmer effect */
          @keyframes goldShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          .gold-shimmer {
            background: linear-gradient(90deg, #D4AF37 25%, #F7D794 50%, #D4AF37 75%);
            background-size: 200% 100%;
            animation: goldShimmer 2s infinite;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Luxury loading spinner */
          @keyframes luxurySpinner {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .luxury-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(212, 175, 55, 0.2);
            border-top: 3px solid #D4AF37;
            border-radius: 50%;
            animation: luxurySpinner 1s linear infinite;
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
          }

          /* Button ripple effect */
          .button-ripple {
            position: relative;
            overflow: hidden;
          }

          .button-ripple::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.4s ease, height 0.4s ease;
          }

          .button-ripple:active::before {
            width: 200px;
            height: 200px;
          }

          /* Focus states */
          .focus-luxury:focus {
            outline: 2px solid #D4AF37;
            outline-offset: 2px;
            box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.2);
            transition: all 0.2s ease;
          }

          /* Stagger animations */
          .stagger-container > * {
            opacity: 0;
            animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .stagger-container > *:nth-child(1) { animation-delay: 0.1s; }
          .stagger-container > *:nth-child(2) { animation-delay: 0.2s; }
          .stagger-container > *:nth-child(3) { animation-delay: 0.3s; }
          .stagger-container > *:nth-child(4) { animation-delay: 0.4s; }
          .stagger-container > *:nth-child(5) { animation-delay: 0.5s; }
          .stagger-container > *:nth-child(6) { animation-delay: 0.6s; }

          /* Page transitions */
          .page-enter {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }

          .page-enter-active {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .page-exit {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .page-exit-active {
            opacity: 0;
            transform: translateY(-20px) scale(1.02);
            transition: all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
          }

          /* Typography enhancements */
          .luxury-heading {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.2;
          }

          .luxury-text {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 1.6;
          }

          /* Accessibility improvements */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .luxury-button {
              border: 2px solid currentColor;
            }
            
            .nav-link::after {
              height: 3px;
            }
          }

          /* Dark mode enhancements */
          .dark .luxury-button:hover {
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
          }

          .dark .card-hover:hover {
            box-shadow: 0 20px 40px rgba(255, 255, 255, 0.05);
          }
        `}</style>
      </body>
    </html>
  );
}
