import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Award, Heart, Users, Sparkles, Star } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Hemmat’s Collection started with a simple dream: to create beautiful, high-quality wigs and hair solutions that help individuals feel confident, stylish, and empowered.",
    },
    {
      year: "2024",
      title: "The Process",
      description:
        "Like every growing brand, the journey wasn’t easy. We faced challenges, improved our craftsmanship, expanded our sourcing, and kept pushing to deliver wigs that look natural, feel comfortable, and last longer.",
    },
    {
      year: "2025",
      title: "Rebranding",
      description:
        "A new chapter began. Hemmat’s Collection evolved with a refreshed identity, improved product designs, and a renewed commitment to luxury, innovation, and customer satisfaction.",
    },
    // {
    //   year: "2025",
    //   title: "Expanding Horizons",
    //   description:
    //     "Opened our flagship store and expanded into Synthetic Wigs and luxury hair accessories.",
    // },
  ];

  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#ff00b3]" />,
      title: "Quality Craftsmanship",
      description:
        "Every wig we create is carefully hand-crafted by skilled professionals using premium, salon-grade materials. From the lace to the strands, each piece is designed with precision to deliver a natural, flawless finish.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#ff00b3]" />,
      title: "Ethical Sourcing",
      description:
        "We proudly source all our hair and materials responsibly. Our commitment to ethical standards ensures that every wig you purchase supports fair, transparent, and cruelty-free practices.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff00b3]" />,
      title: "Customer-Centric Care",
      description:
        "Your confidence means everything to us. We listen to your needs, customize your experience, and continually enhance our products based on your feedback.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#ff00b3]" />,
      title: "Innovation in Style",
      description:
        "We combine timeless beauty with the latest trends in wig design. Our collection blends classic elegance with modern styles to help you achieve any look — effortlessly.",
    },
  ];

  const reviews = [
    {
      name: "Dummy Name 1",
      rating: 5,
      text: "Dummy review text here. Amazing quality and beautiful designs!",
    },
    {
      name: "Dummy Name 2",
      rating: 5,
      text: "Dummy review text here. Love the attention to detail and craftsmanship.",
    },
    {
      name: "Dummy Name 3",
      rating: 4,
      text: "Dummy review text here. Great customer service and fast delivery.",
    },
    {
      name: "Dummy Name 4",
      rating: 5,
      text: "Dummy review text here. Exceeded my expectations in every way!",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#FFD700] fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Designer Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div
                    className="w-full max-w-md mx-auto aspect-[4/5] bg-[#F5F5F7] dark:bg-[#2A2A2A] rounded-3xl overflow-hidden"
                    style={{
                      transform: "rotate(-2deg)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    }}
                  >
                    <div className="">
              <div className="relative w-[500px] flex flex-col rounded-xl overflow-hidden shadow-xl bg-white">
                <img src="/images/Hemmat.jpeg" alt="Heemat" className=" w-full object-cover h-[500px] rounded-t-xl" />
                <div className="h-[15%] dark:bg-[#2A2A2A] text-yellow-400 text-center py-2">
                  <h3 className="text-lg font-semibold">Heemat</h3>
                  <p className="text-sm">Founder & Hair Stylist</p>
                </div>
                <span className="absolute bottom-1 right-12 bg-[#FFC700] text-black px-4 py-2 shadow-xl font-semibold">
                  Est. 2023
                </span>
              </div>
            </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff00b3] rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#ff00b3] rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Brand Story */}
              <div className="order-1 lg:order-2">
                <h1
                  className="text-black dark:text-white font-bold mb-6"
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  Our Story
                </h1>

                <div
                  className="space-y-6 text-[#7B7B7B] dark:text-[#A0A0A0] text-lg leading-relaxed"
                  style={{
                    fontFamily:
                      'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <p>
                    Hemmat’s Collection was born from a simple belief — every woman deserves to feel effortlessly beautiful, confident, and unapologetically herself. What started as a small passion for premium, natural-looking wigs has grown into a trusted brand dedicated to quality, craftsmanship, and ethical beauty.
                  </p>

                  <p>
                    From our early days, we’ve been committed to redefining what a wig can be. We learned from real experiences, listened to real women, and focused on creating pieces that blend seamlessly, look natural, and feel incredibly comfortable. Every wig we design reflects a journey of artistry, innovation, and a deep understanding of personal expression.
                  </p>

                  <p>
                    Over the years, our dedication to excellence has only strengthened. At Hemmat’s Collection, each unit is crafted with precision using ethically sourced hair and materials. We believe beauty should never come at the cost of integrity — and that’s why transparency, quality, and customer satisfaction remain at the heart of everything we do.
                  </p>

                  <p>
                    Today, Hemmat’s Collection stands not just as a brand, but as a community — empowering individuals to explore new looks, embrace their style, and feel beautiful every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-black dark:text-white font-bold mb-4"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Our Journey
              </h2>
              <p
                className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Key milestones that have shaped our brand and vision over the
                years.
              </p>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#ff00b3] rounded-full flex items-center justify-center text-black font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                      {milestone.year}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-black dark:text-white font-semibold mb-3 text-xl"
                      style={{
                        fontFamily:
                          'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-[#7B7B7B] dark:text-[#A0A0A0] leading-relaxed"
                      style={{
                        fontFamily:
                          'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-6 bg-white dark:bg-[#121212]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-black dark:text-white font-bold mb-4"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Our Values
              </h2>
              <p
                className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                The principles that guide everything we do and shape every
                decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-8 rounded-2xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#ff00b3] bg-opacity-10 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>

                  <h3
                    className="text-black dark:text-white font-semibold mb-4 text-xl"
                    style={{
                      fontFamily:
                        'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-[#7B7B7B] dark:text-[#A0A0A0] leading-relaxed"
                    style={{
                      fontFamily:
                        'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-black dark:text-white font-bold mb-4"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                What Our Customers Say
              </h2>
              <p
                className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Read what our amazing customers have to say about their
                experience with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>

                  <p
                    className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-4 leading-relaxed"
                    style={{
                      fontFamily:
                        'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    "{review.text}"
                  </p>

                  <p
                    className="text-black dark:text-white font-semibold"
                    style={{
                      fontFamily:
                        'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {review.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/reviews"
                className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                More Reviews
              </a>
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
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Ready to Transform Your Hair Journey?
            </h2>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily:
                  'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Discover our latest wig collection and become part of the Heemat's Collection
              family. Let's create something beautiful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-[#ff00b3] hover:bg-[#FFB6C1] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Shop Wigs & Hair
              </a>
              <a
                href="/contact"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
