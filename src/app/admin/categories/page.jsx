import { useState, useEffect } from "react";
import { 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  ArrowLeft,
  Image as ImageIcon
} from "lucide-react";

export default function CategoriesManagement() {
  const [categories, setCategories] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));

      const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
      setCategories(storedCategories);
    } catch (error) {
      console.error('Error fetching categories from local storage:', error);
      setCategories([]); // Fallback to empty array on error
    } finally {
      setLoadingData(false);
    }
  };

  const deleteCategory = async (categoryId) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));

      let updatedCategories = JSON.parse(localStorage.getItem('categories')) || [];
      updatedCategories = updatedCategories.filter(c => c.id !== categoryId);
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
      setCategories(updatedCategories); // Update state immediately

    } catch (error) {
      console.error('Error deleting category from local storage:', error);
      alert('Error deleting category');
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 
                className="text-xl font-bold text-black dark:text-white"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Category Management
              </h1>
            </div>
          </div>
          <a
            href="/admin/categories/add"
            className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7B7B7B] dark:text-[#A0A0A0] w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
            />
          </div>
        </div>

        {/* Categories Grid */}
        {loadingData ? (
          <div className="text-center py-12">
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0]">Loading categories...</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-[#7B7B7B] dark:text-[#A0A0A0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">No Categories Found</h3>
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6">
              {searchTerm ? 'Try adjusting your search' : 'Get started by adding your first category'}
            </p>
            <a
              href="/admin/categories/add"
              className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Add First Category
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Category Image */}
                <div className="aspect-video bg-[#F8F8F8] dark:bg-[#2A2A2A] relative overflow-hidden">
                  {category.image_url ? (
                    <img
                      src={category.image_url}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-[#7B7B7B] dark:text-[#A0A0A0]" />
                    </div>
                  )}
                </div>

                {/* Category Details */}
                <div className="p-6">
                  <h3 
                    className="font-semibold text-black dark:text-white mb-2"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {category.name}
                  </h3>
                  
                  {category.description && (
                    <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0] mb-4 line-clamp-2">
                      {category.description}
                    </p>
                  )}

                  <div className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] mb-4">
                    Created: {new Date(category.created_at).toLocaleDateString()}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`/admin/categories/edit/${category.id}`}
                      className="flex-1 bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </a>
                    <button
                      onClick={() => deleteCategory(category.id)}
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
