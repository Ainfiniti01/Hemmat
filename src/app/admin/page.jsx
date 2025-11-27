"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Users,
  Star,
  FileText,
  Settings,
  BarChart3,
  ShoppingBag,
  Eye,
  Plus,
  TrendingUp,
  Mail,
  MessageSquare,
  Image,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    overview: { products: 120, reviews: 45,},
    products: { total: 120, active: 110 },
    categories: { total: 15 },
    reviews: { total: 45, avg_rating: 4.8 },
    recent_activity: [
      {
        title: "New product 'Luxury Lace Front Wig' was added.",
        action: "product_add",
        time_ago: "2 hours ago",
      },
      {
        title: "Category 'Hair Extensions' was updated.",
        action: "category_update",
        time_ago: "5 hours ago",
      },
      {
        title: "A new review was submitted for 'Human Hair Wig'.",
        action: "review_add",
        time_ago: "1 day ago",
      },
    ],
  });
  const [loadingStats, setLoadingStats] = useState(false);
  const [error, setError] = useState("");

  // Safe getter function to prevent object rendering errors
  const getSafeValue = (obj, path, defaultValue = 0) => {
    try {
      const value = path
        .split(".")
        .reduce((current, key) => current?.[key], obj);
      return value !== undefined && value !== null ? value : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Menu items with safe value extraction
  const menuItems = [
    {
      name: "Products",
      icon: Package,
      href: "/admin/products",
      count: getSafeValue(stats, "overview.products", 0),
      color: "from-blue-500 to-blue-600",
    },
    // {
    //   name: "Categories",
    //   icon: BarChart3,
    //   href: "/admin/categories",
    //   count: getSafeValue(stats, "categories.total", 0),
    //   color: "from-green-500 to-green-600",
    // },
    {
      name: "Reviews",
      icon: Star,
      href: "/admin/reviews",
      count: getSafeValue(stats, "overview.reviews", 0),
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1E1E1E] border-b border-[#E9E9E9] dark:border-[#333333] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ff00b3 0%, #FFB6C1  100%)",
                boxShadow: "0 2px 8px rgba(255, 215, 0, 0.3)",
              }}
            >
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1
                className="text-xl font-bold text-black dark:text-white"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Admin Dashboard
              </h1>
              <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                Welcome, Admin
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-[#ff00b3] transition-colors"
            >
              <Eye className="w-4 h-4" />
              View Store
            </Link>
            <Link
              to="/"
              className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Disclaimer for Static Site */}
        <div className="mb-8 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 rounded-lg">
          <p className="font-semibold mb-2">Notice:</p>
          <p className="text-sm">
            This Admin Dashboard is for UI/UX demonstration purposes only.
            Backend functionality for managing products, categories, and reviews is disabled in this static version.
          </p>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h2
            className="text-2xl font-bold text-black dark:text-white mb-2"
            style={{
              fontFamily:
                'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Welcome to Heemat's Collection Admin (Demo)
          </h2>
          <p className="text-[#7B7B7B] dark:text-[#A0A0A0]">
            Manage your wig and hair stylish store from this central dashboard
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9EBF0] dark:border-[#333333] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-black dark:text-white">
                  {getSafeValue(stats, "overview.products", 0)}
                </p>
                <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                  Products
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                Active
              </span>
              <span className="text-sm font-medium text-green-500">
                {getSafeValue(stats, "products.active", 0)}
              </span>
            </div>
          </div>


          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9EBF0] dark:border-[#333333] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-500 bg-opacity-20 p-3 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-black dark:text-white">
                  {getSafeValue(stats, "overview.reviews", 0)}
                </p>
                <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                  Reviews
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                Avg Rating
              </span>
              <span className="text-sm font-medium text-yellow-500">
                {String(getSafeValue(stats, "reviews.avg_rating", "0.0"))}
              </span>
            </div>
          </div>

          {/* Removed Subscribers overview stat */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3
                className="font-semibold text-black dark:text-white mb-1"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                {item.name}
              </h3>
              <p className="text-2xl font-bold text-[#ff00b3] mb-2">
                {loadingStats ? "..." : item.count}
              </p>
              <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
                Total {item.name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Link
            to="/admin/products/add"
            className="bg-gradient-to-r from-[#ff00b3] to-[#FFB6C1 ] rounded-2xl p-6 text-black hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <h3
                className="font-semibold"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Add Product
              </h3>
            </div>
            <p className="text-sm opacity-90">Add new items to your store</p>
          </Link>


          {/* <Link
            to="/admin/categories/add"
            className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <h3
                className="font-semibold text-black dark:text-white"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Add Category
              </h3>
            </div>
            <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
              Create categories
            </p>
          </Link> */}

          <a
            href="/admin/reviews/add"
            className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3
                className="font-semibold text-black dark:text-white"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Add Reviews
              </h3>
            </div>
            <p className="text-sm text-[#7B7B7B] dark:text-[#A0A0A0]">
              Approve reviews
            </p>
          </a>
        </div>

        {/* Recent Activity */}
        {stats?.recent_activity && stats.recent_activity.length > 0 && (
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9EBF0] dark:border-[#333333] p-6">
            <h2 className="text-black dark:text-white font-bold text-xl mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {stats.recent_activity.slice(0, 5).map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-[#F9F9F9] dark:bg-[#2A2A2A] rounded-lg"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-[#1E1E1E]">
                    <Activity className="w-4 h-4 text-[#ff00b3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black dark:text-white line-clamp-2">
                      {activity.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0] capitalize">
                        {activity.action}
                      </span>
                      <span className="text-xs text-[#7B7B7B] dark:text-[#A0A0A0]">
                        {activity.time_ago}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
