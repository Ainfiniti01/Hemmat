import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
  id: 1,
  category: "🚚 Orders & Shipping",
  questions: [
    {
      id: 11,
      question: "Do you deliver nationwide?",
      answer: "Yes, we deliver nationwide! Delivery typically takes 3–5 business days depending on your location. Express delivery is available for 1–2 business days."
    },
    // {
    //   id: 12,
    //   question: "How can I track my order?",
    //   answer: "Once your order ships, you'll receive a tracking number via email or WhatsApp. You can use this number to track your package on our website or directly with our delivery partner."
    // },
    {
      id: 13,
      question: "Can I change or cancel my order?",
      answer: "You can modify or cancel your order within 2 hours of placing it. After that, please contact our support team immediately, and we'll do our best to assist if the order hasn’t shipped yet."
    },
    {
      id: 14,
      question: "Do you offer international shipping?",
      answer: "Yes! We currently ship to selected international destinations. Delivery times and rates vary based on your location (Not Currently Available)."
    }
  ]
},
{
  id: 2,
  category: "💇‍♀️ Custom Wigs & Styling",
  questions: [
    {
      id: 21,
      question: "Do you offer custom wig services?",
      answer: "Absolutely! We create custom wigs tailored to your desired length, color, texture, and cap size. Our stylists can also help you choose the perfect frontal, closure, or lace type."
    },
    {
      id: 22,
      question: "How long does it take to create a custom wig?",
      answer: "Custom wigs take 2–4 weeks to complete, depending on style complexity and customization. We'll provide an exact timeline when you place your order."
    },
    {
      id: 23,
      question: "Can I provide my own hair or design?",
      answer: "Yes! You can send in your own hair bundles or share inspiration photos, and our experts will bring your design to life."
    },
    {
      id: 24,
      question: "Do you offer installation or fitting services?",
      answer: "Yes, we offer professional wig installation and fitting services. You can visit our salon or book an at-home appointment depending on your location."
    }
  ]
},
{
  id: 3,
  category: "🏅 Products & Quality",
  questions: [
    {
      id: 31,
      question: "What materials do you use for your wigs?",
      answer: "We use 100% virgin human hair for our premium collections and top-quality synthetic fibers for our budget-friendly options. Each wig undergoes a strict quality check before shipping."
    },
    {
      id: 32,
      question: "How do I know my wig size?",
      answer: "You can measure your head using a soft tape measure and compare it with our size chart. We also offer adjustable caps for a more flexible fit."
    },
    {
      id: 33,
      question: "How should I care for my wig?",
      answer: "Always store your wig on a stand, detangle gently before washing, and use sulfate-free products. Avoid high heat on synthetic wigs and apply heat protectant for human hair wigs."
    },
    {
      id: 34,
      question: "Can I straighten, curl, or dye my wig?",
      answer: "Yes! Human hair wigs can be straightened, curled, and dyed just like natural hair. Synthetic wigs, however, should not be heat-styled or dyed."
    }
  ]
},
{
  id: 4,
  category: "🔄 Returns & Exchanges",
  questions: [
    {
      id: 41,
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for unworn wigs in original packaging. Due to hygiene reasons, worn or customized wigs are not eligible for return."
    },
    {
      id: 42,
      question: "Can I exchange a wig if it doesn’t fit?",
      answer: "Yes, you can exchange your wig for a different size or cap type within 7 days, as long as the lace hasn’t been cut and the wig is unworn."
    },
    {
      id: 43,
      question: "Do you offer refunds or store credit?",
      answer: "No."
    }
  ]
},
{
  id: 5,
  category: "🗓️ Appointments & Consultations",
  questions: [
    {
      id: 51,
      question: "Can I book a wig consultation?",
      answer: "Yes! We offer both virtual and in-person consultations. Our experts will help you choose the best wig for your lifestyle, skin tone, and face shape."
    },
    {
      id: 52,
      question: "Do you offer bridal and event styling?",
      answer: "Definitely! We specialize in bridal and occasion wigs. Our team can customize and style your wig for weddings, parties, and photoshoots."
    },
    {
      id: 53,
      question: "How do I schedule an appointment?",
      answer: "You can book an appointment directly through our website or via WhatsApp. Early booking is recommended during busy seasons."
    }
  ]
},
{
  id: 6,
  category: "💳 Payments & Support",
  questions: [
    {
      id: 61,
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, debit/credit cards, and mobile payment options. Payment on delivery is available in select locations."
    },
    {
      id: 62,
      question: "How can I contact customer support?",
      answer: "You can reach our team via WhatsApp, phone call, or email. Our support hours are 9 AM to 6 PM, Monday through Saturday."
    },
    {
      id: 63,
      question: "Do you offer discounts or loyalty rewards?",
      answer: "Yes! But only when on Sales."
    }
  ]
}

  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-[#ff00b3]" />
              <h1
                className="text-black dark:text-white font-bold"
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Frequently Asked Questions
              </h1>
            </div>
            
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Find answers to the most common questions about our products, services, and policies. Can't find what you're looking for? Contact us directly!
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category) => (
              <div key={category.id} className="mb-12">
                <h2
                  className="text-black dark:text-white font-bold mb-8 text-2xl md:text-3xl"
                  style={{
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between"
                      >
                        <h3
                          className="text-black dark:text-white font-semibold text-lg pr-4"
                          style={{
                            fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          }}
                        >
                          {faq.question}
                        </h3>
                        
                        <div className="flex-shrink-0">
                          {openItems.has(faq.id) ? (
                            <Minus className="w-5 h-5 text-[#ff00b3]" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#ff00b3]" />
                          )}
                        </div>
                      </button>
                      
                      {openItems.has(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-[#E9EBF0] dark:border-[#333333]">
                            <p
                              className="text-[#7B7B7B] dark:text-[#A0A0A0] leading-relaxed"
                              style={{
                                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 px-6 bg-[#ff00b3] bg-opacity-10 dark:bg-[#ff00b3] dark:bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-black dark:text-white font-bold mb-6"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Still Have Questions?
            </h2>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Our customer service team is here to help! Get in touch and we'll respond within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Contact Us
              </a>
              <a
                href="tel:+234 814 874 4035"
                className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
