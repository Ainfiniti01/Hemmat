import { Instagram, Heart, MessageCircle } from "lucide-react";

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 234,
      comments: 18,
      caption: "Achieving the perfect wig style ✨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 189,
      comments: 12,
      caption: "Frontals & Closures that speaks to your soul 💎"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 167,
      comments: 9,
      caption: "Fresh arrivals just dropped! 🔥"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 298,
      comments: 24,
      caption: "Behind the scenes at our photoshoot 📸"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 156,
      comments: 15,
      caption: "Essential wig care for every style 🌸"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 312,
      comments: 28,
      caption: "Weekend vibes with our latest wig collection ☀️"
    },
  ];

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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Instagram size={16} />
            @Heemat'sWigs
          </div>
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Wig Style Inspiration
          </h2>
          <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg max-w-2xl mx-auto mb-6">
            Follow us on Instagram for daily wig style inspiration, behind-the-scenes content, and exclusive previews.
          </p>
          <a
            href="https://instagram.com/Heemat'sWigs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            <Instagram size={20} />
            Follow Us
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/Heemat'sWigs"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-square overflow-hidden rounded-lg bg-[#F5F5F7] dark:bg-[#2A2A2A] cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Heart size={20} className="fill-white" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={20} />
                    <span className="font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={16} className="text-pink-500" />
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#E9EBF0] dark:border-[#333333] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Instagram size={32} className="text-white" />
              </div>
              <h3
                className="text-black dark:text-white font-bold text-2xl mb-2"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Join Our Community
              </h3>
              <p className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6">
                Get exclusive access to new arrivals, styling tips, and behind-the-scenes content. 
                Tag us in your photos for a chance to be featured!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://instagram.com/Heemat'sWigs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Instagram size={20} />
                Follow @Heemat'sWigs
              </a>
              <button className="inline-flex items-center gap-2 bg-transparent border-2 border-[#ff00b3] text-[#ff00b3] hover:bg-[#ff00b3] hover:text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <span className="text-xl">#</span>
                #HeematWigsStyle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
