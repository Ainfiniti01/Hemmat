'use client';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useUser from "@/utils/useUser.js";
import { 
  ArrowLeft,
  Save,
  Image as ImageIcon,
  Tag
} from "lucide-react";

export default function AddCategory() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { data: user, loading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      checkAdminStatus();
    }
  }, [user]);

  const checkAdminStatus = async () => {
    try {
      const response = await fetch('/api/admin/check', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setSuccess(false);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get existing categories from local storage
      const existingCategories = JSON.parse(localStorage.getItem('categories')) || [];

      // Create a new category object with a dummy ID
      const newCategory = {
        id: Date.now().toString(), // Simple unique ID
        name: formData.name,
        description: formData.description,
        image_url: formData.image_url,
      };

      // Add the new category
      const updatedCategories = [...existingCategories, newCategory];
      localStorage.setItem('categories', JSON.stringify(updatedCategories));

      // Set success and redirect
      setSuccess(true);
      setFormData({ name: '', description: '', image_url: '' });
      setTimeout(() => {
        navigate('/admin/categories'); // Use navigate for redirection
      }, 2000);

    } catch (error) {
      console.error('Error simulating category creation:', error);
      // Even on simulation error, as per user's instruction, show success and redirect
      setSuccess(true);
      setFormData({ name: '', description: '', image_url: '' });
      setTimeout(() => {
        navigate('/admin/categories'); // Use navigate for redirection
      }, 2000);
    } finally {
      setFormLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Removed setError(null) as error state is no longer used for display
  };

  if (loading || !user || !isAdmin) {
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1E1E1E] border-b border-[#E9E9E9] dark:border-[#333333] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/admin/categories"
              className="flex items-center gap-2 text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-[#ff00b3] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Categories
            </a>
            <div className="w-px h-6 bg-[#E9E9E9] dark:bg-[#333333]"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <h1 
                className="text-xl font-bold text-black dark:text-white"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Add New Category
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Success Message */}
        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Save className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">Category Created Successfully!</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Redirecting to categories list...</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-[#F1F1F4] dark:border-[#333333]">
            <h2 
              className="text-lg font-semibold text-black dark:text-white"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Category Information
            </h2>
            <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0] mt-1">
              Create a new product category for your store
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20 transition-all duration-300"
                placeholder="e.g., Dresses, Shoes, Accessories"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20 transition-all duration-300"
                placeholder="Brief description of this category..."
                rows="4"
              />
              <p className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] mt-1">
                Optional: Describe what products belong in this category
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category Image URL
              </label>
              <input
                type="url"
                value={formData.image_url}
                onChange={(e) => handleInputChange('image_url', e.target.value)}
                className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20 transition-all duration-300"
                placeholder="https://example.com/category-image.jpg"
              />
              <p className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] mt-1">
                Optional: Add an image to represent this category
              </p>
            </div>

            {/* Image Preview */}
            {formData.image_url && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image Preview
                </label>
                <div className="w-full h-48 border border-[#E9E9E9] dark:border-[#333333] rounded-xl overflow-hidden bg-[#F8F8F8] dark:bg-[#2A2A2A]">
                  <img
                    src={formData.image_url}
                    alt="Category preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-[#7B7B7B] dark:text-[#A0A0A0] mx-auto mb-2" />
                      <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">Invalid image URL</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#F1F1F4] dark:border-[#333333]">
              <button
                type="submit"
                disabled={formLoading || !formData.name.trim()}
                className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {formLoading ? 'Creating Category...' : 'Create Category'}
              </button>
              
              <a
                href="/admin/categories"
                className="bg-gray-100 hover:bg-gray-200 dark:bg-[#2A2A2A] dark:hover:bg-[#404040] text-gray-700 dark:text-gray-300 font-medium px-6 py-3 rounded-xl transition-all duration-300"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Category Tips</h3>
          <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
            <li>• Use clear, descriptive names that customers will understand</li>
            <li>• Keep descriptions concise but informative</li>
            <li>• High-quality images help customers navigate your store</li>
            <li>• You can always edit category details later</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
