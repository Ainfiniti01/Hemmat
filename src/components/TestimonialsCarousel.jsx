import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely love my custom wig! The attention to detail and quality is outstanding. Heemat's Collection truly understands hair elegance.",
      location: "New York"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      rating: 5,
      text: "The Frontals & Closures collection is stunning! Every piece I've bought has received countless compliments. Worth every penny.",
      location: "California"
    },
    {
      id: 3,
      name: "Emma Thompson",
      rating: 5,
      text: "Their Synthetic Wigs are divine! The styles are unique and long-lasting. I always get asked where I got my wig.",
      location: "Texas"
    },
    {
      id: 4,
      name: "Lisa Chen",
      rating: 5,
      text: "Exceptional customer service and beautiful wig designs. The custom wig service exceeded my expectations completely.",
      location: "Florida"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-pink fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            What Our Customers Say
          </h2>
          <p
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Don't just take our word for it - hear from our happy customers about their experience with Heemat's Collection wigs and hair services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-center gap-1 mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            
            <blockquote
              className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl leading-relaxed mb-8"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div>
              <h4
                className="text-black dark:text-white font-semibold text-lg mb-1"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {testimonials[currentIndex].name}
              </h4>
              <p
                className="text-gray-500 dark:text-gray-400"
                style={{
                  fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-pink hover:border-pink transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-black" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pink scale-110'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-pink'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-pink hover:border-pink transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-black" />
            </button>
          </div>

          {/* View All Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="/reviews"
              className="text-pink hover:text-pinkDark font-semibold transition-colors duration-300"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              View All Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
