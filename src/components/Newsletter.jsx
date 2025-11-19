import { useState } from "react";
import { Mail, Gift, Zap, Heart } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const benefits = [
    {
      icon: <Gift size={20} className="text-pink" />,
      text: "Exclusive member discounts"
    },
    {
      icon: <Zap size={20} className="text-pink" />,
      text: "Early access to new collections"
    },
    {
      icon: <Heart size={20} className="text-pink" />,
      text: "Personalized style tips"
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 px-6 bg-gradient-to-r from-pink to-pinkDark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="text-black font-bold text-2xl mb-4"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Welcome to the Family! 🎉
            </h3>
            <p className="text-gray-500 text-lg mb-6">
              Thank you for joining our newsletter! Check your email for a special welcome discount.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-pink hover:text-pinkDark font-semibold transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink to-pinkDark"> FFC0CB FFB6C1 
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink to-pinkDark rounded-full flex items-center justify-center mb-6">
              <Mail size={28} className="text-white" />
            </div>

            {/* Heading */}
            <h2
              className="text-black font-bold mb-4"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Join Our Exclusive Community
            </h2>

            {/* Subtitle */}
            <p
              className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Get the latest fashion trends, exclusive discounts, and styling tips delivered straight to your inbox.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-gray-500 text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-pink focus:ring-2 focus:ring-pink/20 transition-all duration-200"
                  style={{
                    fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-pink to-pinkDark hover:from-pinkDark hover:to-pink text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-gray-500 text-xs mt-4">
              By subscribing, you agree to receive marketing emails from Heemat's Collection. 
              You can unsubscribe at any time.
            </p>
          </form>

          {/* Special Offer */}
          <div className="text-center mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-2 border-dashed border-green-200">
            <p className="text-green-700 font-semibold">
              🎁 <strong>First-time subscribers get 15% off</strong> their first order!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
