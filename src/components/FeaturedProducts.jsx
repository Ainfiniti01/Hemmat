import { MessageCircle, Star } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: "₦85,000",
      category: "Hair Care & Accessories",
      image:
        "https://images.unsplash.com/photo-1566479179817-17f6db677639?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      name: "Diamond Stud Earrings",
      price: "₦45,000",
      category: "Frontals & Closures",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      name: "Signature Fragrance",
      price: "₦25,000",
      category: "Braided Wigs",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 32,
    },
    {
      id: 4,
      name: "Luxury Deodorant Set",
      price: "₦15,000",
      category: "Human Hair Wigs",
      image:
        "https://images.unsplash.com/photo-1556229174-5e42a09e1d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 15,
    },
  ];

  const handleWhatsAppClick = (productName, price) => {
    const message = `Hi! I'm interested in the ${productName} (${price}). Can you tell me more about it?`;
    const whatsappUrl = `https://wa.me/2348148744035?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3, ease: "backOut" }}
      >
        <Star
          size={14}
          className={`${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : i < rating
                ? "fill-yellow-200 text-yellow-400"
                : "text-gray-300"
          }`}
        />
      </motion.div>
    ));
  };

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      backgroundColor: "#25D366",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#128C7E",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const priceVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      color: "#D4AF37",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    rest: {
      scale: 1,
      backgroundColor: "rgba(255, 215, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 215, 0, 0.2)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]"
      style={{
        fontFamily:
          'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily:
                'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Collection
          </motion.h2>
          <motion.p
            className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Handpicked wigs from our latest drop — styled with precision, crafted with care, and made to enhance your natural beauty. designed with elegance
            and crafted with care.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#E9EBF0] dark:border-[#333333] group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              style={{
                transformOrigin: "center bottom",
              }}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-[#F5F5F7] dark:bg-[#2A2A2A] relative">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    className="text-xs font-medium text-[#ff00b3] px-2 py-1 rounded-full"
                    variants={categoryVariants}
                    initial="rest"
                    whileHover="hover"
                    style={{ backgroundColor: "rgba(255, 215, 0, 0.1)" }}
                  >
                    {product.category}
                  </motion.span>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <motion.span
                      className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] ml-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ({product.reviews})
                    </motion.span>
                  </div>
                </div>

                <motion.h3
                  className="text-black dark:text-white font-semibold mb-2 text-lg leading-tight"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {product.name}
                </motion.h3>

                <motion.p
                  className="text-[#ff00b3] font-bold text-xl mb-4"
                  variants={priceVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {product.price}
                </motion.p>

                {/* WhatsApp Buy Button */}
                <motion.button
                  onClick={() =>
                    handleWhatsAppClick(product.name, product.price)
                  }
                  className="w-full text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={18} />
                  </motion.div>
                  Buy on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="/products"
            className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-3 rounded-full"
            style={{
              fontFamily:
                'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Products
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
