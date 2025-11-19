import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaTiktok } from "react-icons/fa";
import { MessageCircle, Mail, MapPin, Phone, Instagram, Facebook, Music, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#ff00b3]" />,
      title: "WhatsApp",
      value: "+2348148744035",
      link: "https://wa.me/+2348148744035",
      description: "Get instant responses to your questions"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#ff00b3]" />,
      title: "Email",
      value: "iredeleraheemot@gmail.com",
      link: "mailto:iredeleraheemot@gmail.com",
      description: "For detailed inquiries and collaborations"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#ff00b3]" />,
      title: "Location",
      value: "Lagos State, Nigeria",
      link: "#",
      description: "Visit our flagship store"
    },
    {
      icon: <Phone className="w-6 h-6 text-[#ff00b3]" />,
      title: "Phone",
      value: "+234 814 874 4035",
      link: "tel:+234 814 874 4035",
      description: "Always Active"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@H$C",
      link: "https://www.instagram.com/heemat_collection4?utm_source=qr",
      color: "hover:text-pink-500"
    },
    // {
    //   icon: <Facebook className="w-6 h-6" />,
    //   name: "Facebook",
    //   handle: "/Heemat's Collection",
    //   link: "https://facebook.com/Heemat's Collection",
    //   color: "hover:text-blue-500"
    // },
    {
      icon: <Music className="w-6 h-6" />,
      name: "TikTok",
      handle: "@Heemat's Collection",
      link: "https://www.tiktok.com/@heematscollection?_r=1&_t=ZS-91QE8jU96Gb",
      color: "hover:text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-black dark:text-white font-bold mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Get in Touch
            </h1>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Have a question about our products or want to collaborate? We'd love to hear from you. Reach out and let's create something beautiful together.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#0F0F0F]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 lg:p-10 rounded-2xl border border-[#E9EBF0] dark:border-[#333333] shadow-lg">
                <h2
                  className="text-black dark:text-white font-bold mb-6 text-2xl"
                  style={{
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  Send us a Message
                </h2>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-black dark:text-white font-medium mb-2"
                        style={{
                          fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F5F7] dark:bg-[#2A2A2A] border border-[#E9EBF0] dark:border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent text-black dark:text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-black dark:text-white font-medium mb-2"
                        style={{
                          fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#F5F5F7] dark:bg-[#2A2A2A] border border-[#E9EBF0] dark:border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent text-black dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-black dark:text-white font-medium mb-2"
                      style={{
                        fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#F5F5F7] dark:bg-[#2A2A2A] border border-[#E9EBF0] dark:border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent text-black dark:text-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-black dark:text-white font-medium mb-2"
                      style={{
                        fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#F5F5F7] dark:bg-[#2A2A2A] border border-[#E9EBF0] dark:border-[#404040] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent text-black dark:text-white resize-y"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff00b3] hover:bg-[#FFB6C1 ] disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] disabled:transform-none"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div>
                  <h2
                    className="text-black dark:text-white font-bold mb-8 text-2xl"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-start gap-4 p-6 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#ff00b3] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#ff00b3] group-hover:bg-opacity-20 transition-all duration-300">
                          {info.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3
                            className="text-black dark:text-white font-semibold mb-1"
                            style={{
                              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            {info.title}
                          </h3>
                          <p className="text-[#ff00b3] font-medium mb-1">{info.value}</p>
                          <p
                            className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm"
                            style={{
                              fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            {info.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3
                    className="text-black dark:text-white font-bold mb-6 text-xl"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    Follow Us
                  </h3>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E9EBF0] dark:border-[#333333] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-[#7B7B7B] dark:text-[#A0A0A0] ${social.color} group`}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-[#ff00b3] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#ff00b3] group-hover:bg-opacity-20 transition-all duration-300">
                          {social.icon}
                        </div>
                        
                        <div>
                          <p
                            className="font-medium text-black dark:text-white"
                            style={{
                              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            {social.name}
                          </p>
                          <p className="text-sm">{social.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick WhatsApp CTA */}
        <section className="py-16 px-6 bg-[#25D366] bg-opacity-10 dark:bg-[#25D366] dark:bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-black dark:text-white font-bold mb-4 text-2xl md:text-3xl"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Need Immediate Assistance?
            </h2>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Chat with us on WhatsApp for instant support and personalized recommendations.
            </p>
            
            <a
              href="https://wa.me/2348148744035?text=Hi%21%20I%27d%20like%20to%20know%20more%20about%20your%20wig%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
