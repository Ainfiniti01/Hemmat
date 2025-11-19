import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, User, Settings, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import useUser from "@/utils/useUser.js";
import { colors, typography, getAccentColor } from "@/utils/designSystem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentPage, setCurrentPage] = useState("/");
  const { data: user, loading } = useUser();

  useEffect(() => {
    setCurrentPage(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (user) {
      checkAdminStatus();
    }
  }, [user]);

  const checkAdminStatus = async () => {
    try {
      const response = await fetch("/api/admin/check", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation variants
  const headerVariants = {
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    top: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const logoVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    rest: {
      color: colors.gray[700],
      y: 0,
    },
    hover: {
      color: colors.black,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const underlineVariants = {
    rest: { scaleX: 0, opacity: 0 },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 8px 25px rgba(212, 175, 55, 0.6)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: {
      scale: 0.98,
      y: 0,
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
      variants={headerVariants}
      animate={isScrolled ? "scrolled" : "top"}
      style={{
        fontFamily: typography.fontPrimary,
      }}
    >
      <div className="px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Brand Logo */}
          <motion.div
            className="flex items-center gap-3"
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.emerald} 100%)`,
              }}
              whileHover={{
                boxShadow: `0 8px 25px rgba(212, 175, 55, 0.4)`,
                rotate: 180,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <Sparkles className="w-6 h-6 text-black" />
            </motion.div>
            <motion.h1
              className="text-2xl font-bold text-[#ff00b3] dark:text-[rgb(255_215_0)] tracking-wide cursor-pointer"
              style={{ fontFamily: typography.fontPrimary }}
              whileHover={{
                letterSpacing: "0.15em",
                transition: { duration: 0.3 },
              }}
            > 
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-great-vibes text-[#ff00b3]">Heemat's Collection</h1>
              </div>
            </div>
               
            </motion.h1>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <motion.a
                  href={item.href}
                  className="text-sm font-semibold relative block"
                  style={{
                    fontFamily: typography.fontPrimary,
                    letterSpacing: "0.5px",
                    color: currentPage === item.href ? colors.pink : colors.gray[700],
                  }}
                  variants={navItemVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {item.name}
                </motion.a>

                {/* Enhanced underline animation */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{
                    backgroundColor: currentPage === item.href ? colors.pink : colors.emerald,
                    originX: 0,
                  }}
                  variants={underlineVariants}
                  initial={currentPage === item.href ? "hover" : "rest"}
                  animate={
                    hoveredItem === item.name || currentPage === item.href ? "hover" : "rest"
                  }
                />
              </motion.div>
            ))}
          </nav>

          {/* Enhanced User Actions & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* User Section */}
            {loading ? (
              <div className="hidden md:block">
                <motion.div
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            ) : user ? (
              <div className="hidden md:flex items-center gap-4">
                {isAdmin && (
                  <motion.a
                    href="/admin"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium"
                    style={{
                      fontFamily: typography.fontPrimary,
                      color: colors.gray[600],
                    }}
                    whileHover={{
                      color: colors.emerald,
                      y: -1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 90, transition: { duration: 0.3 } }}
                    >
                      <Settings className="w-4 h-4" />
                    </motion.div>
                    Admin
                  </motion.a>
                )}
                <motion.div
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <User className="w-4 h-4" />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: typography.fontSecondary }}
                  >
                    Hi, {user.email.split("@")[0]}
                  </span>
                </motion.div>
                <motion.a
                  href="/account/logout"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400"
                  style={{ fontFamily: typography.fontPrimary }}
                  whileHover={{
                    color: "#ef4444",
                    transition: { duration: 0.2 },
                  }}
                >
                  Sign Out
                </motion.a>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <motion.a
                  href="/account/signin"
                  className="font-bold px-6 py-3 rounded-full text-sm"
                  style={{
                    backgroundColor: colors.pink,
                    color: colors.black,
                    fontFamily: typography.fontPrimary,
                    letterSpacing: "0.5px",
                  }}
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign In
                </motion.a>
              </div>
            )}

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{
                color: colors.black,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-4 overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col gap-4 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: typography.fontPrimary,
                    color: currentPage === item.href ? colors.pink : colors.white,
                    letterSpacing: "0.5px",
                  }}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  custom={index}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    x: 10,
                    color: colors.pink,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Enhanced Mobile User Section */}
              <motion.div
                className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-2"
                variants={mobileItemVariants}
                initial="closed"
                animate="open"
                custom={navItems.length}
              >
                {user ? (
                  <>
                    <motion.div
                      className="text-sm mb-3"
                      style={{
                        fontFamily: typography.fontSecondary,
                        color: colors.gray[600],
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Hi, {user.email.split("@")[0]}
                    </motion.div>
                    {isAdmin && (
                      <motion.a
                        href="/admin"
                        className="block text-sm font-semibold mb-3"
                        style={{
                          fontFamily: typography.fontPrimary,
                          color: colors.emerald,
                          letterSpacing: "0.5px",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      >
                        Admin Dashboard
                      </motion.a>
                    )}
                    <motion.a
                      href="/account/logout"
                      className="block text-sm font-semibold text-red-500"
                      style={{
                        fontFamily: typography.fontPrimary,
                        letterSpacing: "0.5px",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{
                        x: 10,
                        color: "#dc2626",
                        transition: { duration: 0.2 },
                      }}
                    >
                      Sign Out
                    </motion.a>
                  </>
                ) : (
                  <div className="space-y-3">
                    <motion.a
                      href="/account/signin"
                      className="block text-sm font-semibold"
                      style={{
                        fontFamily: typography.fontPrimary,
                        color: colors.white,
                        letterSpacing: "0.5px",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      Sign In
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
