import { MessageCircle, Star, Flame } from "lucide-react";

export default function SaleSection() {
  const saleProducts = [
    {
      id: 1,
      name: "Premium Lace Front Wig",
      price: "₦45,000",
      originalPrice: "₦90,000",
      discount: "50%",
      category: "Hair Care & Accessories",
      image: "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 34,
      badge: "50% OFF",
      urgency: "Only 3 left!"
    },
    {
      id: 2,
      name: "Blonde Human Hair Wig",
      price: "₦22,500",
      originalPrice: "₦45,000",
      discount: "50%",
      category: "Frontals & Closures",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 28,
      badge: "50% OFF",
      urgency: "Limited stock"
    },
    {
      id: 3,
      name: "Premium Braided Wigs Bundle",
      price: "₦37,500",
      originalPrice: "₦75,000",
      discount: "50%",
      category: "Braided Wigs",
      image: "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 19,
      badge: "50% OFF",
      urgency: "Bundle deal"
    },
    {
      id: 4,
      name: "Wig Care Essentials Kit",
      price: "₦12,000",
      originalPrice: "₦20,000",
      discount: "40%",
      category: "Human Hair Wigs",
      image: "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 16,
      badge: "40% OFF",
      urgency: "Flash sale"
    },
  ];

  const handleWhatsAppClick = (productName, price, originalPrice) => {
    const message = `Hi! I'm interested in the sale item: ${productName}. Sale price: ${price} (was ${originalPrice}). Is this still available?`;
    const whatsappUrl = `https://wa.me/2348148744035?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900"
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Flame size={16} />
            Hot Deals
          </div>
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Sale & Discounts
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Unbeatable prices on your favorite wigs and hair essentials. Limited-time offers to help you slay without breaking the bank!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 group relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {product.badge}
              </div>

              {/* Urgency Badge */}
              <div className="absolute top-4 right-4 z-10 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                {product.urgency}
              </div>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Sale Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-pink bg-pink bg-opacity-10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3
                  className="text-black dark:text-white font-semibold mb-3 text-lg leading-tight"
                  style={{
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-red-500 font-bold text-xl">
                    {product.price}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base line-through">
                    {product.originalPrice}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500 dark:text-gray-400">You save</span>
                    <span className="font-bold text-green-600">
                      ₦{parseInt(product.originalPrice.replace(/[₦,]/g, '')) - parseInt(product.price.replace(/[₦,]/g, ''))}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${product.discount}` }}
                    ></div>
                  </div>
                </div>

                {/* WhatsApp Buy Button */}
                <button
                  onClick={() => handleWhatsAppClick(product.name, product.price, product.originalPrice)}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-lg"
                >
                  <MessageCircle size={18} />
                  Grab This Deal
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Sale Items CTA */}
        <div className="text-center mt-12">
          <a
            href="/products?filter=sale"
            className="inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            View All Sale Items
          </a>
        </div>
      </div>
    </section>
  );
}
