import { MessageCircle, Star } from "lucide-react";

export default function NewArrivals() {
  const newProducts = [
    {
      id: 1,
      name: "Silky Straight Lace Wig",
      price: "₦95,000",
      originalPrice: null,
      category: "Hair Care & Accessories",
      image: "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 5,
      reviews: 23,
      isNew: true,
      badge: "New"
    },
    {
      id: 2,
      name: "Deep Wave Frontal",
      price: "₦65,000",
      originalPrice: null,
      category: "Frontals & Closures",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 15,
      isNew: true,
      badge: "New"
    },
    {
      id: 3,
      name: "Midnight Bloom Braided Wigs",
      price: "₦35,000",
      originalPrice: null,
      category: "Braided Wigs",
      image: "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 8,
      isNew: true,
      badge: "New"
    },
    {
      id: 4,
      name: "Wig Styling Kit",
      price: "₦18,000",
      originalPrice: null,
      category: "Human Hair Wigs",
      image: "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 12,
      isNew: true,
      badge: "New"
    },
  ];

  const handleWhatsAppClick = (productName, price) => {
    const message = `Hi! I'm interested in the new arrival: ${productName} (${price}). Can you tell me more about it?`;
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
      className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]"
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Fresh Arrivals
          </div>
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            New Arrivals
          </h2>
          <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Be the first to explore our latest wig collections — freshly styled and crafted to perfection for your next flawless look.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 group relative"
            >
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-[#F5F5F7] dark:bg-[#2A2A2A]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#ff00b3] bg-[#ff00b3] bg-opacity-10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3
                  className="text-black dark:text-white font-semibold mb-2 text-lg leading-tight"
                  style={{
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-[#ff00b3] font-bold text-xl">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>

                {/* WhatsApp Buy Button */}
                <button
                  onClick={() => handleWhatsAppClick(product.name, product.price)}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle size={18} />
                  Buy on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All New Arrivals CTA */}
        <div className="text-center mt-12">
          <a
            href="/products?filter=new"
            className="inline-block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
}
