import { Instagram, Facebook } from "lucide-react";
import { Music } from "lucide-react"; // Using Music icon for TikTok

export default function Footer() {
  return (
    <footer
      className="bg-black dark:bg-[#0A0A0A] text-white py-16 px-6"
      style={{
        fontFamily:
          'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, great-vibes',
              }}
            >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-great-vibes text-[#ff00b3]">Heemat's Collection</h1>
              </div>
            </div>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Elevating your style with premium wigs and hair solutions that celebrate
              your unique personality and make you feel confident and beautiful.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/Heemat'sWigs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff00b3] bg-opacity-10 hover:bg-[#ff00b3] hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#ff00b3]" />
              </a>
              <a
                href="https://facebook.com/Heemat'sWigs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff00b3] bg-opacity-10 hover:bg-[#ff00b3] hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#ff00b3]" />
              </a>
              <a
                href="https://tiktok.com/@Heemat'sWigs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff00b3] bg-opacity-10 hover:bg-[#ff00b3] hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-[#ff00b3]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4 text-[#ff00b3]" 
              style={{
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#ff00b3] transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[#ff00b3] transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-[#ff00b3] transition-colors duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#ff00b3] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-semibold mb-4 text-[#ff00b3]"
              style={{
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="https://wa.me/+2348148744035?text=Hello%20Heemat%27s%20Wigs%20%26%20Hair%2C%20I%27m%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff00b3] transition-colors duration-200"
                >
                  WhatsApp: +234 814 874 4035
                </a>
              </li>
              <li>
                <a
                  href="mailto:iredeleraheemot@gmail.com"
                  className="hover:text-[#ff00b3] transition-colors duration-200"
                >
                  Email: iredeleraheemot@gmail.com
                </a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Heemat's Collection. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff00b3] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff00b3] transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
