import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Placeholder for actual authentication logic
    // In a real application, this would send credentials to a backend API
    // and handle the response (e.g., set a token, redirect).
    console.log("Attempting to sign in with:", { email, password });

    if (email === "admin@example.com" && password === "password") {
      // Simulate successful sign-in
      alert("Admin Sign-in successful! Redirecting to admin dashboard.");
      window.location.href = "/admin"; // Redirect to admin dashboard
    } else if (email === "admin@example.com" && password === "password") {
      // Simulate successful user sign-in
      alert("User Sign-in successful! Redirecting to home page.");
      window.location.href = "/dashboard"; // Redirect to home page
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-md w-full bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9EBF0] dark:border-[#333333] p-8 shadow-lg">
          <h1
            className="text-3xl font-bold text-center text-black dark:text-white mb-8"
            style={{
              fontFamily:
                'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Sign In
          </h1>
          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2A2A2A] text-black dark:text-white focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent outline-none transition-all duration-200"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2A2A2A] text-black dark:text-white focus:ring-2 focus:ring-[#ff00b3] focus:border-transparent outline-none transition-all duration-200"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link to="/account/signup" className="text-[#ff00b3] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
