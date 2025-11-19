import { useState, useEffect } from "react";
// import useAuth from "@/utils/useAuth";
import useUser from "@/utils/useUser.js";
import useUpload from "@/utils/useUpload";
import { 
  Package, 
  ArrowLeft,
  Upload,
  X,
  Save
} from "lucide-react";

export default function AddProduct() {
  const { data: user, loading } = useUser();
  const [upload, { loading: uploadLoading }] = useUpload();
  const [isAdmin, setIsAdmin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale_price: '',
    category_id: '',
    description: '',
    stock_quantity: '',
    is_new: false,
    is_featured: false,
    is_on_sale: false,
    status: 'active'
  });
  const [imageUrls, setImageUrls] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(''); // New state for upload messages
  const [productCreationMessage, setProductCreationMessage] = useState(''); // New state for product creation messages

  useEffect(() => {
    if (user) {
      checkAdminStatus();
      fetchCategories();
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setSubmitting(true); // Indicate that an upload is in progress

    try {
      const newImageUrls = [];
      const newPreviewImages = [];

      for (const file of files) {
        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImages(prev => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);

        // Upload file
        const { url, error } = await upload({ file });
        if (url) { // Only add URL if upload was successful
          newImageUrls.push(url);
        } else {
          console.error('Upload failed for file:', file.name, error);
        }
      }
      
      setImageUrls(prev => [...prev, ...newImageUrls]);
      setUploadMessage('Image(s) uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadMessage('Image(s) uploaded successfully!'); // Still show success as per user request
    } finally {
      setSubmitting(false);
      setTimeout(() => setUploadMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setImageUrls(prev => prev.filter((_, index) => index !== indexToRemove));
    setPreviewImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.category_id) newErrors.category_id = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.stock_quantity || parseInt(formData.stock_quantity) < 0) {
      newErrors.stock_quantity = 'Valid stock quantity is required';
    }
    
    if (formData.is_on_sale && (!formData.sale_price || parseFloat(formData.sale_price) <= 0)) {
      newErrors.sale_price = 'Sale price is required when product is on sale';
    }

    if (formData.is_on_sale && formData.sale_price && parseFloat(formData.sale_price) >= parseFloat(formData.price)) {
      newErrors.sale_price = 'Sale price must be less than regular price';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const productData = {
        ...formData,
        image_urls: imageUrls, // Changed to image_urls array
        price: parseFloat(formData.price),
        sale_price: formData.sale_price ? parseFloat(formData.sale_price) : null,
        category_id: parseInt(formData.category_id),
        stock_quantity: parseInt(formData.stock_quantity)
      };

      const response = await fetch('/api/admin/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        setProductCreationMessage('Product created successfully!');
        // window.location.href = '/admin/products'; // Redirect after message is seen
      } else {
        // Even if not OK, still show success as per user request
        setProductCreationMessage('Product created successfully!');
        // window.location.href = '/admin/products'; // Redirect after message is seen
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setProductCreationMessage('Product created successfully!'); // Still show success as per user request
      // window.location.href = '/admin/products'; // Redirect after message is seen
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setProductCreationMessage('');
        window.location.href = '/admin/products'; // Redirect after message clears
      }, 3000); // Clear message and redirect after 3 seconds
    }
  };

  if (loading || !user || !isAdmin) {
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1E1E1E] border-b border-[#E9E9E9] dark:border-[#333333] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/admin/products"
              className="flex items-center gap-2 text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-[#ff00b3] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
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
                Add New Product
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-8">
            <h2 
              className="text-lg font-semibold text-black dark:text-white mb-6"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                  placeholder="Enter product name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                >
                  <option value="">Select a category</option>
                  <option value="Hair Care & Accessories">Hair Care & Accessories</option>
                  <option value="Frontals & Closures">Frontals & Closures</option>
                  <option value="Braided Wigs">Braided Wigs</option>
                  <option value="Human Hair Wigs">Human Hair Wigs</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category_id && <p className="text-red-500 text-sm mt-1">{errors.category_id}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                  placeholder="0.00"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  name="stock_quantity"
                  value={formData.stock_quantity}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                  placeholder="0"
                />
                {errors.stock_quantity && <p className="text-red-500 text-sm mt-1">{errors.stock_quantity}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                placeholder="Enter product description"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-8">
            <h2
              className="text-lg font-semibold text-black dark:text-white mb-6"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Product Images
            </h2>

            <div className="flex flex-wrap items-center gap-6">
              {previewImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-xl border border-[#E9E9E9] dark:border-[#333333]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="w-32 h-32 border-2 border-dashed border-[#E9E9E9] dark:border-[#333333] rounded-xl flex items-center justify-center">
                <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {submitting ? (
                    <span className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm">Uploading...</span>
                  ) : (
                    <Upload className="w-8 h-8 text-[#7B7B7B] dark:text-[#A0A0A0]" />
                  )}
                </label>
              </div>

              <div>
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span
                    className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 inline-block"
                    style={{
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {submitting ? 'Uploading...' : 'Add More Images'}
                  </span>
                </label>
                <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0] mt-2">
                  JPG, PNG or WebP. Max file size 5MB per image.
                </p>
                {uploadMessage && (
                  <p className="text-sm mt-2 text-green-500">
                    {uploadMessage}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Product Settings */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-8">
            <h2 
              className="text-lg font-semibold text-black dark:text-white mb-6"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Product Settings
            </h2>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_new"
                  checked={formData.is_new}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#ff00b3] bg-white dark:bg-[#2A2A2A] border border-[#E9E9E9] dark:border-[#333333] rounded focus:ring-[#ff00b3] focus:ring-2"
                />
                <span className="text-black dark:text-white">Mark as New Arrival</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#ff00b3] bg-white dark:bg-[#2A2A2A] border border-[#E9E9E9] dark:border-[#333333] rounded focus:ring-[#ff00b3] focus:ring-2"
                />
                <span className="text-black dark:text-white">Featured Product</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_on_sale"
                  checked={formData.is_on_sale}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#ff00b3] bg-white dark:bg-[#2A2A2A] border border-[#E9E9E9] dark:border-[#333333] rounded focus:ring-[#ff00b3] focus:ring-2"
                />
                <span className="text-black dark:text-white">On Sale</span>
              </label>

              {formData.is_on_sale && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sale Price *
                  </label>
                  <input
                    type="number"
                    name="sale_price"
                    value={formData.sale_price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full max-w-xs px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                    placeholder="0.00"
                  />
                  {errors.sale_price && <p className="text-red-500 text-sm mt-1">{errors.sale_price}</p>}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="/admin/products"
              className="px-6 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl text-black dark:text-white hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] transition-colors"
            >
              Cancel
            </a>
            <button
              type="submit"
              disabled={submitting || uploadLoading}
              className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {submitting ? (
                <>Creating...</>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Create Product
                </>
              )}
            </button>
          </div>
          {productCreationMessage && (
            <div className="mt-4 p-3 rounded-xl bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-center">
              {productCreationMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
