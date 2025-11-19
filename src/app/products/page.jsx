import { useState } from "react";
import { MessageCircle, Filter, ChevronDown, Star, Eye } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom"; // Assuming react-router-dom for Link

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categories = ["All", "New", "Sales", "Hair Care & Accessories", "Frontals & Closures", "Braided Wigs", "Human Hair Wigs"];
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popularity", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
  ];

  const products = [
    // Hair Care & Accessories
    {
      id: 1,
      name: "Wig Detangling Spray",
      price: "₦85,000",
      numericPrice: 85000,
      category: "Hair Care & Accessories",
      image:
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 24,
      popularity: 95,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 2,
      name: "Satin Wig Bonnet",
      price: "₦120,000",
      numericPrice: 120000,
      category: "Hair Care & Accessories",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 18,
      popularity: 88,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 3,
      name: "Wig Stand & Brush Set",
      price: "₦45,000",
      numericPrice: 45000,
      category: "Hair Care & Accessories",
      image:
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 32,
      popularity: 92,
      isNew: true,
      isOnSale: false,
    },
    {
      id: 4,
      name: "Lace Tint Spray",
      price: "₦75,000",
      numericPrice: 75000,
      category: "Hair Care & Accessories",
      image:
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 15,
      popularity: 82,
      isNew: false,
      isOnSale: true,
    },

    // Frontals & Closures
    {
      id: 5,
      name: "HD Lace Frontal (13x4)",
      price: "₦45,000",
      numericPrice: 45000,
      category: "Frontals & Closures",
      image:
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 41,
      popularity: 98,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 6,
      name: "Transparent Lace Closure (4x4)",
      price: "₦85,000",
      numericPrice: 85000,
      category: "Frontals & Closures",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 27,
      popularity: 90,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 7,
      name: "Deep Wave Frontal (13x6)",
      price: "₦35,000",
      numericPrice: 35000,
      category: "Frontals & Closures",
      image:
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.5,
      reviews: 19,
      popularity: 75,
      isNew: true,
      isOnSale: false,
    },
    {
      id: 8,
      name: "Body Wave Closure (5x5)",
      price: "₦65,000",
      numericPrice: 65000,
      category: "Frontals & Closures",
      image:
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 23,
      popularity: 85,
      isNew: false,
      isOnSale: true,
    },

    // Braided Wigs
    {
      id: 9,
      name: "Box Braid Wig (Long)",
      price: "₦25,000",
      numericPrice: 25000,
      category: "Braided Wigs",
      image:
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 38,
      popularity: 94,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 10,
      name: "Knotless Braid Wig (Medium)",
      price: "₦30,000",
      numericPrice: 30000,
      category: "Braided Wigs",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 22,
      popularity: 78,
      isNew: true,
      isOnSale: false,
    },
    {
      id: 11,
      name: "Twist Braid Wig (Short)",
      price: "₦45,000",
      numericPrice: 45000,
      category: "Braided Wigs",
      image:
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 16,
      popularity: 87,
      isNew: false,
      isOnSale: true,
    },
    {
      id: 12,
      name: "Cornrow Wig (Custom)",
      price: "₦20,000",
      numericPrice: 20000,
      category: "Braided Wigs",
      image:
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.4,
      reviews: 25,
      popularity: 72,
      isNew: true,
      isOnSale: false,
    },

    // Human Hair Wigs
    {
      id: 13,
      name: "Silky Straight Human Hair Wig (24inch)",
      price: "₦15,000",
      numericPrice: 15000,
      category: "Human Hair Wigs",
      image:
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 31,
      popularity: 89,
      isNew: false,
      isOnSale: false,
    },
    {
      id: 14,
      name: "Body Wave Human Hair Wig (18inch)",
      price: "₦12,000",
      numericPrice: 12000,
      category: "Human Hair Wigs",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.5,
      reviews: 28,
      popularity: 81,
      isNew: false,
      isOnSale: true,
    },
    {
      id: 15,
      name: "Curly Human Hair Wig (16inch)",
      price: "₦8,000",
      numericPrice: 8000,
      category: "Human Hair Wigs",
      image:
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.3,
      reviews: 14,
      popularity: 68,
      isNew: true,
      isOnSale: false,
    },
    {
      id: 16,
      name: "Blonde Human Hair Wig (20inch)",
      price: "₦18,000",
      numericPrice: 18000,
      category: "Human Hair Wigs",
      image:
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 21,
      popularity: 86,
      isNew: false,
    },
  ];

  // Filter products by category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    if (selectedCategory === "New") {
      return product.isNew;
    }
    if (selectedCategory === "Sales") {
      return product.isOnSale;
    }
    return product.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.numericPrice - b.numericPrice;
      case "price-high":
        return b.numericPrice - a.numericPrice;
      case "popularity":
        return b.popularity - a.popularity;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew - a.isNew; // Show new products first
      default:
        return 0;
    }
  });

  const handleWhatsAppClick = (productName, price) => {
    const message = `Hi 👋🏽, I'm interested in the ${productName} (${price}). Is it available?`;
    const whatsappUrl = `https://wa.me/2348148744035?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleViewDetailsClick = (productId) => {
    // Navigate to product details page
    // This will be handled by the Link component, but keeping this for consistency
    console.log(`Viewing details for product ID: ${productId}`);
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
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1
              className="text-black dark:text-white font-bold mb-4"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Our Collection
            </h1>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto mb-4"
              style={{
                fontFamily:
                  'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Discover our carefully curated selection of premium wigs and hair solutions designed to elevate your style.
            </p>
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm">
              Showing {sortedProducts.length} product
              {sortedProducts.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 mr-2">
                <Filter className="w-4 h-4 text-[#7B7B7B] dark:text-[#A0A0A0]" />
                <span
                  className="text-[#7B7B7B] dark:text-[#A0A0A0] font-medium text-sm"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  Filter:
                </span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#ff00b3] text-black shadow-lg transform scale-105"
                      : "bg-white dark:bg-[#1E1E1E] text-[#7B7B7B] dark:text-[#A0A0A0] border border-[#E9EBF0] dark:border-[#333333] hover:border-[#ff00b3] hover:text-[#ff00b3]"
                  }`}
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1E1E1E] border border-[#E9EBF0] dark:border-[#333333] rounded-lg hover:border-[#ff00b3] transition-all duration-300"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                <span className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm">
                  Sort by:{" "}
                  <span className="text-black dark:text-white font-medium">
                    {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  </span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7B7B7B] dark:text-[#A0A0A0] transition-transform duration-200 ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-[#1E1E1E] border border-[#E9EBF0] dark:border-[#333333] rounded-lg shadow-lg z-10 min-w-48">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-[#F5F5F7] dark:hover:bg-[#2A2A2A] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.value
                          ? "text-[#ff00b3] font-medium"
                          : "text-[#7B7B7B] dark:text-[#A0A0A0]"
                      }`}
                      style={{
                        fontFamily:
                          'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 group relative"
              >
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </div>
                )}

                {/* Sale Badge */}
                {product.isOnSale && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Sale
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
                      fontFamily:
                        'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {product.name}
                  </h3>

                  <p className="text-[#ff00b3] font-bold text-xl mb-4">
                    {product.price}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/products/${product.id}`}
                      onClick={() => handleViewDetailsClick(product.id)}
                      className="w-full bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                      style={{
                        fontFamily:
                          'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      <Eye size={18} />
                      View Details
                    </Link>
                    <button
                      onClick={() =>
                        handleWhatsAppClick(product.name, product.price)
                      }
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                      style={{
                        fontFamily:
                          'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      <MessageCircle size={18} />
                      Contact on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No products message */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
