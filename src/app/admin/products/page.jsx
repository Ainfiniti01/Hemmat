import { useState, useEffect } from "react";
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  Eye,
  ArrowLeft,
  Star,
  DollarSign
} from "lucide-react";

export default function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products/list', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/admin/categories/list', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const deleteProduct = async (productId) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`/api/admin/products/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: productId })
      });

      if (response.ok) {
        setProducts(products.filter(p => p.id !== productId));
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category_id === parseInt(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1E1E1E] border-b border-[#E9E9E9] dark:border-[#333333] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/admin"
              className="flex items-center gap-2 text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-[#ff00b3] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </a>
            <div className="w-px h-6 bg-[#E9E9E9] dark:bg-[#333333]"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h1 
                className="text-xl font-bold text-black dark:text-white"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Products Management
              </h1>
            </div>
          </div>
          <a
            href="/admin/products/add"
            className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7B7B7B] dark:text-[#A0A0A0] w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
          >
            <option value="">All Categories</option>
            <option value="New">New</option>
            <option value="Sales">Sales</option>
            <option value="Featured">Featured</option>
            <option value="Braided Wigs">Braided Wigs</option>
            <option value="Human Hair Wigs">Human Hair Wigs</option>
            <option value="Frontals & Closures">Frontals & Closures</option>
            <option value="Hair Care & Accessories">Hair Care & Accessories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {loadingData ? (
          <div className="text-center py-12">
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0]">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-[#7B7B7B] dark:text-[#A0A0A0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">No Products Found</h3>
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6">
              {searchTerm || selectedCategory ? 'Try adjusting your filters' : 'Get started by adding your first product'}
            </p>
            <a
              href="/admin/products/add"
              className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Add First Product
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="aspect-square bg-[#F8F8F8] dark:bg-[#2A2A2A] relative overflow-hidden">
                  {product.image_urls && product.image_urls.length > 0 ? (
                    <img
                      src={product.image_urls[0]} // Display the first image from the array
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-12 h-12 text-[#7B7B7B] dark:text-[#A0A0A0]" />
                    </div>
                  )}
                  
                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.is_new && (
                      <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {product.is_featured && (
                      <span className="bg-[#ff00b3] text-black text-xs font-semibold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    {product.is_on_sale && (
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Sale
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 
                      className="font-semibold text-black dark:text-white line-clamp-1"
                      style={{
                        fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      }}
                    >
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0] mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#ff00b3]" />
                      <span className="font-bold text-[#ff00b3]">
                        {product.is_on_sale && product.sale_price ? (
                          <>
                            ${product.sale_price}
                            <span className="text-[#7B7B7B] dark:text-[#A0A0A0] line-through ml-2">
                              ${product.price}
                            </span>
                          </>
                        ) : (
                          `$${product.price}`
                        )}
                      </span>
                    </div>
                    <span className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                      Stock: {product.stock_quantity}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <span className="text-xs bg-[#F8F8F8] dark:bg-[#2A2A2A] text-[#7B7B7B] dark:text-[#A0A0A0] px-2 py-1 rounded-full">
                      {categories.find(c => c.id === product.category_id)?.name || 'Uncategorized'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`/admin/products/edit/${product.id}`}
                      className="flex-1 bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </a>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
