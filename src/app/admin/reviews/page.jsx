"use client";

import { useState, useEffect } from "react";
import {
  Star,
  Eye,
  Check,
  X,
  Trash2,
  Filter,
  Search,
  ArrowLeft,
  Plus,
} from "lucide-react";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [actionLoading, setActionLoading] = useState({});
  const [isAdmin, setIsAdmin] = useState(true); // Assuming admin for this page


  useEffect(() => {
    fetchReviews();
  }, [statusFilter]);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/admin/reviews/list?status=${statusFilter}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Fetch reviews error:", error);
    } finally {
      setLoading(false);
    }
  };


  // Update review status (Post/Reject)
  const updateReviewStatus = async (reviewId, status) => {
    try {
      setActionLoading((prev) => ({ ...prev, [reviewId]: status }));

      const response = await fetch("/api/admin/reviews/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId, status }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${status} review`);
      }

      setSuccess(`Review ${status} successfully!`);
      setTimeout(() => setSuccess(""), 3000);
      fetchReviews();
    } catch (error) {
      console.error(`Update review status (${status}) error:`, error);
      setError(`Failed to ${status} review`);
      setTimeout(() => setError(""), 3000);
    } finally {
      setActionLoading((prev) => ({ ...prev, [reviewId]: null }));
    }
  };

  // Delete review
  const deleteReview = async (reviewId) => {
    if (
      !confirm(
        "Are you sure you want to delete this review? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      setActionLoading((prev) => ({ ...prev, [reviewId]: "deleting" }));

      const response = await fetch("/api/admin/reviews/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete review");
      }

      setSuccess("Review deleted successfully!");
      setTimeout(() => setSuccess(""), 3000);
      fetchReviews();
    } catch (error) {
      console.error("Delete review error:", error);
      setError("Failed to delete review");
      setTimeout(() => setError(""), 3000);
    } finally {
      setActionLoading((prev) => ({ ...prev, [reviewId]: null }));
    }
  };

  // Render stars
  const renderStars = (rating, setRating = null) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer ${
          i < rating ? "text-[#ff00b3] fill-current" : "text-gray-300"
        }`}
        onClick={() => setRating && setRating(i + 1)}
      />
    ));
  };

  // Filter reviews based on search term
  const filteredReviews = reviews.filter(
    (review) =>
      review.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.review_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.country?.toLowerCase().includes(searchTerm.toLowerCase()), // Include country in search
  );

  // Get status badge color
  const getStatusBadge = (status) => {
    const colors = {
      pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      approved:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    return colors[status] || colors.pending;
  };

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
                <Star className="w-5 h-5 text-white" />
              </div>
              <h1
                className="text-xl font-bold text-black dark:text-white"
                style={{
                  fontFamily:
                    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Reviews
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-green-600 dark:text-green-400">
            {success}
          </div>
        )}

        {/* Filters and Search */}
        <div className="mb-6 bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#7B7B7B] dark:text-[#A0A0A0]" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                <option value="all">All Reviews</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7B7B7B] dark:text-[#A0A0A0]" />
              <input
                type="text"
                placeholder="Search reviews, customers, or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#2A2A2A] text-black dark:text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#ff00b3] focus:ring-2 focus:ring-[#ff00b3]/20"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              />
            </div>
          </div>
        </div>


        {/* Reviews List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#7B7B7B] dark:text-[#A0A0A0]">
              Loading reviews...
            </p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-12">
            <Eye className="w-16 h-16 text-[#7B7B7B] dark:text-[#A0A0A0] mx-auto mb-4" />
            <h3
              className="text-black dark:text-white font-semibold text-xl mb-2"
              style={{
                fontFamily:
                  'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              No Reviews Found
            </h3>
            <p
              className="text-[#7B7B7B] dark:text-[#A0A0A0]"
              style={{
                fontFamily:
                  'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {searchTerm
                ? "Try adjusting your search terms."
                : "No reviews match the selected filter."}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Product Info */}
                  <div className="flex items-start gap-4 lg:w-1/3">
                    {review.product_image && (
                      <img
                        src={review.product_image}
                        alt={review.product_name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div>
                      <h3
                        className="text-black dark:text-white font-semibold mb-1"
                        style={{
                          fontFamily:
                            'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        {review.product_name}
                      </h3>
                      <p
                        className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm"
                        style={{
                          fontFamily:
                            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        Review #{review.id}
                      </p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-black dark:text-white font-semibold"
                          style={{
                            fontFamily:
                              'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          }}
                        >
                          {review.user_name}
                        </span>
                        {review.country && ( // Display country if available
                          <span
                            className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm"
                            style={{
                              fontFamily:
                                'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                          >
                            ({review.country})
                          </span>
                        )}
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(review.status)}`}
                          style={{
                            fontFamily:
                              'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          }}
                        >
                          {review.status.charAt(0).toUpperCase() +
                            review.status.slice(1)}
                        </span>
                      </div>

                      <span
                        className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm"
                        style={{
                          fontFamily:
                            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        {new Date(review.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    {review.review_text && (
                      <p
                        className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-4 leading-relaxed"
                        style={{
                          fontFamily:
                            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        "{review.review_text}"
                      </p>
                    )}

                    {review.email && (
                      <p
                        className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm mb-4"
                        style={{
                          fontFamily:
                            'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        Email: {review.email}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {(review.status === "pending" ||
                        review.status === "rejected") && (
                        <button
                          onClick={() =>
                            updateReviewStatus(review.id, "approved")
                          }
                          disabled={actionLoading[review.id] === "approved"}
                          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                          style={{
                            fontFamily:
                              'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          }}
                        >
                          <Check className="w-4 h-4" />
                          {actionLoading[review.id] === "approved"
                            ? "Posting..."
                            : "Post"}
                        </button>
                      )}

                      {(review.status === "pending" ||
                        review.status === "approved") && (
                        <button
                          onClick={() =>
                            updateReviewStatus(review.id, "rejected")
                          }
                          disabled={actionLoading[review.id] === "rejected"}
                          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                          style={{
                            fontFamily:
                              'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          }}
                        >
                          <X className="w-4 h-4" />
                          {actionLoading[review.id] === "rejected"
                            ? "Rejecting..."
                            : "Reject"}
                        </button>
                      )}

                      <button
                        onClick={() => deleteReview(review.id)}
                        disabled={actionLoading[review.id] === "deleting"}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                        style={{
                          fontFamily:
                            'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        {actionLoading[review.id] === "deleting"
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
