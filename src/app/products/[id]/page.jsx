import { useState, useEffect } from "react";
import { MessageCircle, Star, ShoppingCart } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useParams } from "react-router-dom"; // Assuming react-router-dom for useParams
import { useCart } from "../../../context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // Placeholder product data (should ideally come from an API)
  const allProducts = [
    // Hair Care & Accessories
    {
      id: 1,
      name: "Wig Detangling Spray",
      price: "₦85,000",
      numericPrice: 85000,
      category: "Hair Care & Accessories",
      imageUrls: [
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Example additional image
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Example additional image
      ],
      description: "A specially formulated detangling spray for wigs, leaving them smooth and manageable. Suitable for all wig types. Care: Spray evenly and comb through.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Luxurious satin wig bonnet to protect your wig while sleeping. Helps prevent frizz and tangles. Material: High-quality satin. Care: Hand wash cold.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Complete wig care set including a collapsible wig stand and a specialized wig brush. Essential for maintaining wig shape and style. Material: Durable plastic. Care: Wipe clean.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Achieve a natural-looking hairline with our lace tint spray. Blends seamlessly with various skin tones. Color: Medium brown. Care: Shake well before use.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Premium HD lace frontal (13x4) for an undetectable hairline. Made from 100% virgin human hair. Texture: Straight. Color: Natural black. Care: Wash with sulfate-free shampoo.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "High-quality transparent lace closure (4x4) for a natural part. Made from 100% virgin human hair. Texture: Body wave. Color: Natural black. Care: Condition regularly.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Luxurious deep wave frontal (13x6) for versatile styling. Made from 100% virgin human hair. Length: 18 inches. Color: Natural black. Care: Moisturize daily.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Voluminous body wave closure (5x5) for a full and natural look. Made from 100% virgin human hair. Length: 16 inches. Color: Natural black. Care: Avoid excessive heat.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Hand-braided box braid wig, offering a protective and stylish look. Length: Long. Color: Black. Material: Synthetic fibers. Care: Use wig mousse.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Effortless knotless braid wig, perfect for a natural finish. Length: Medium. Color: Brown. Material: Synthetic fibers. Care: Store on a wig stand.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Chic twist braid wig, ideal for a trendy short style. Length: Short. Color: Burgundy. Material: Synthetic fibers. Care: Gently detangle.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Custom-made cornrow wig, tailored to your specifications. Style: Various. Color: Custom. Material: Synthetic fibers. Care: Consult with stylist.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1622396636133-ba43f81297d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Luxurious 24-inch silky straight human hair wig, offering a sleek and elegant look. Material: 100% virgin human hair. Color: Natural black. Care: Wash and condition regularly.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Voluminous 18-inch body wave human hair wig, perfect for a natural bounce. Material: 100% virgin human hair. Color: Natural black. Care: Air dry for best results.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Beautiful 16-inch curly human hair wig, for a vibrant and playful look. Material: 100% virgin human hair. Color: Natural black. Care: Use curl-defining products.",
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
      imageUrls: [
        "https://images.unsplash.com/photo-1600554023286-f4d222bbb10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      description: "Stunning 20-inch blonde human hair wig, for a bold and glamorous transformation. Material: 100% virgin human hair. Color: #613. Care: Use purple shampoo to maintain color.",
      rating: 4.7,
      reviews: 21,
      popularity: 86,
      isNew: false,
      isOnSale: false,
    },
  ];

  useEffect(() => {
    // In a real application, you would fetch product data from an API
    const foundProduct = allProducts.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrls[0]); // Set initial main image from the first URL
    } else {
      // Handle product not found, e.g., redirect to 404 or products page
      console.error("Product not found");
    }
  }, [id]);

  const handleWhatsAppClick = (productName, price) => {
    const message = `Hi 👋🏽, I'm interested in the ${productName} (${price}). Is it available?`;
    const whatsappUrl = `https://wa.me/2348148744035?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const { addToCart } = useCart(); // Use the cart context

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart! (Bulk orders only)`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
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

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#121212] flex items-center justify-center">
        <p className="text-black dark:text-white">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-[#F5F5F7] dark:bg-[#2A2A2A]">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.imageUrls?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      mainImage === img
                        ? "border-[#ff00b3]"
                        : "border-transparent hover:border-[#ff00b3]/50"
                    } transition-all duration-200`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1
                  className="text-black dark:text-white font-bold mb-2"
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {product.name}
                </h1>
                <p className="text-[#ff00b3] font-bold text-3xl mb-4">
                  {product.price}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  {renderStars(product.rating)}
                  <span className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <p
                  className="text-[#7B7B7B] dark:text-[#A0A0A0] text-base leading-relaxed mb-8"
                  style={{
                    fontFamily:
                      'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() =>
                    handleWhatsAppClick(product.name, product.price)
                  }
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <ShoppingCart size={20} />
                  Add to Cart (Bulk)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
