import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Dummy Name 1",
      rating: 5,
      text: "Dummy review text here. Amazing quality and beautiful wigs! The attention to detail is remarkable and the customer service was exceptional.",
      country: "USA"
    },
    {
      name: "Dummy Name 2", 
      rating: 5,
      text: "Dummy review text here. Love the attention to detail and craftsmanship. Every piece feels luxurious and well-made.",
      country: "Canada"
    },
    {
      name: "Dummy Name 3",
      rating: 4,
      text: "Dummy review text here. Great customer service and fast delivery. The packaging was beautiful and the product exceeded expectations.",
      country: "UK"
    },
    {
      name: "Dummy Name 4",
      rating: 5,
      text: "Dummy review text here. Exceeded my expectations in every way! The quality is outstanding and the design is timeless.",
      country: "Australia"
    },
    {
      name: "Dummy Name 5",
      rating: 5,
      text: "Dummy review text here. Perfect fit and beautiful colors. The hair quality is excellent and it feels amazing to wear.",
      country: "Germany"
    },
    {
      name: "Dummy Name 6",
      rating: 4,
      text: "Dummy review text here. Very satisfied with my purchase. The Frontals & Closures are stunning and receive compliments everywhere I go.",
      country: "France"
    },
    {
      name: "Dummy Name 7",
      rating: 5,
      text: "Dummy review text here. Outstanding quality and unique wig designs. This brand truly understands hair fashion and elegance.",
      country: "Nigeria"
    },
    {
      name: "Dummy Name 8",
      rating: 5,
      text: "Dummy review text here. Fast shipping and excellent packaging. The Braided Wigs are beautiful and last all day long.",
      country: "South Africa"
    },
    {
      name: "Dummy Name 9",
      rating: 4,
      text: "Dummy review text here. Beautiful collection and great prices. The Hair Care & Accessories are perfect and the style is exactly what I was looking for.",
      country: "Brazil"
    },
    {
      name: "Dummy Name 10",
      rating: 5,
      text: "Dummy review text here. Highly recommend this brand! The quality speaks for itself and the designs are absolutely gorgeous.",
      country: "India"
    },
    {
      name: "Dummy Name 11",
      rating: 5,
      text: "Dummy review text here. Love everything about this brand. From the beautiful designs to the excellent customer service, everything is perfect.",
      country: "Japan"
    },
    {
      name: "Dummy Name 12",
      rating: 4,
      text: "Dummy review text here. Great experience overall. The products are well-made and the attention to detail is impressive.",
      country: "China"
    },
    {
      name: "Dummy Name 13",
      rating: 5,
      text: "Dummy review text here. Amazing quality for the price. The Human Hair Wigs are fantastic and look great all day.",
      country: "Mexico"
    },
    {
      name: "Dummy Name 14",
      rating: 5,
      text: "Dummy review text here. Excellent craftsmanship and beautiful wig designs. This is now my go-to brand for wigs and hair accessories.",
      country: "Spain"
    },
    {
      name: "Dummy Name 15",
      rating: 4,
      text: "Dummy review text here. Very pleased with my order. The quality is consistent and the style is modern yet timeless.",
      country: "Italy"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]">
          <div className="max-w-6xl mx-auto text-center">
            <h1
              className="text-black dark:text-white font-bold mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Customer Reviews
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <span
                className="text-2xl font-bold text-black dark:text-white"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {averageRating}
              </span>
              <span
                className="text-[#7B7B7B] dark:text-[#A0A0A0]"
                style={{
                  fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                ({totalReviews} reviews)
              </span>
            </div>
            
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Read what our amazing customers have to say about their experience with Heemat's Collection.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p
                    className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-4 leading-relaxed"
                    style={{
                      fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    "{review.text}"
                  </p>
                  
                  <p
                    className="text-black dark:text-white font-semibold"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {review.name} {review.country && <span className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm">({review.country})</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-[#ff00b3] bg-opacity-10 dark:bg-[#ff00b3] dark:bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-black dark:text-white font-bold mb-6"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Join Our Happy Customers
            </h2>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Experience the quality and elegance of our wigs and hair solutions that our customers love. Shop our collection today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Shop Wigs & Hair
              </a>
              <a
                href="/contact"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
