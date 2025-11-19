export default function ShopByCategory() {
  const categories = [
    {
      id: 1,
      name: "Hair Care & Accessories",
      description: "Essential products for wig maintenance & styling.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      href: "/products?category=Hair Care & Accessories",
      items: "150+ items"
    },
    {
      id: 2,
      name: "Frontals & Closures",
      description: "Premium lace frontals & closures for seamless installs.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      href: "/products?category=Frontals & Closures",
      items: "85+ items"
    },
    {
      id: 3,
      name: "Synthetic Wigs",
      description: "High-quality synthetic wigs in various styles & colors.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      href: "/products?category=Synthetic Wigs",
      items: "45+ items"
    },
    {
      id: 4,
      name: "Human Hair Wigs",
      description: "Luxurious human hair wigs for a natural look & feel.",
      image: "https://images.unsplash.com/photo-1556229174-5e42a09e1d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      href: "/products?category=Human Hair Wigs",
      items: "25+ items"
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900"
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
            Shop by Category
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our carefully curated wig collections, crafted to elevate your beauty and redefine your hair game with timeless elegance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:-translate-y-2"
            >
              {/* Category Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.items}
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h3
                  className="text-black dark:text-white font-bold text-xl mb-2 group-hover:text-pink transition-colors duration-300"
                  style={{
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  {category.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-pink font-semibold text-sm">
                  <span>Shop Now</span>
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
