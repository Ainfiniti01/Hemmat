import { Award, Heart, Sparkles, Clock } from "lucide-react";

export default function BrandHighlights() {
  const highlights = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#ff00b3]" />,
      title: "Premium Quality",
      description: "Every piece is carefully crafted with attention to detail and the finest materials."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#ff00b3]" />,
      title: "Customer Love",
      description: "Trusted by thousands of satisfied customers who adore our unique designs."
    },
    {
      icon: <Award className="w-8 h-8 text-[#ff00b3]" />,
      title: "Award Winning",
      description: "Recognized for excellence in wig craftsmanship and customer service."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff00b3]" />,
      title: "Timeless Style",
      description: "Crafting wigs that transcend trends and remain beautiful for years to come."
    }
  ];

  return (
    <section
      className="py-16 md:py-24 px-6 bg-white dark:bg-[#121212]"
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Why Choose <span className="text-[#ff00b3]">Heemat's Collection</span>
          </h2>
          <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            We're committed to bringing you the finest wigs and hair solutions that celebrate your unique style and personality.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#ff00b3] bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff00b3] group-hover:bg-opacity-20">
                  {highlight.icon}
                </div>
              </div>
              
              <h3
                className="text-black dark:text-white font-semibold mb-3 text-xl"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {highlight.title}
              </h3>
              
              <p className="text-[#7B7B7B] dark:text-[#A0A0A0] leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-[#ff00b3] bg-opacity-10 dark:bg-[#ff00b3] dark:bg-opacity-20 rounded-2xl p-8 md:p-12">
            <h3
              className="text-black dark:text-white font-bold mb-4 text-2xl md:text-3xl"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Ready to Transform Your Look?
            </h3>
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6 text-lg">
              Explore our complete collection and find your perfect wig or hair solution today.
            </p>
            <a
              href="/about"
              className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#333] dark:hover:bg-[#E0E0E0] transform hover:scale-105"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Learn Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
