import { ShoppingBag } from "lucide-react";

export default function LogoutPage() {
  const { signOut } = useAuth();
  
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{
              background: "linear-gradient(135deg, #ff00b3 0%, #FFB6C1  100%)",
              boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
            }}
          >
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h1 
            className="text-2xl font-bold text-black dark:text-white mb-2"
            style={{
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Sign Out of Zee Sparkles
          </h1>
          <p className="text-[#7B7B7B] dark:text-[#A0A0A0]">Thank you for shopping with us!</p>
        </div>

        {/* Sign Out Form */}
        <div className="bg-white dark:bg-[#1E1E1E] border border-[#F1F1F4] dark:border-[#333333] rounded-2xl p-8 shadow-lg text-center">
          <div className="space-y-6">
            <div className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6">
              <p>Are you sure you want to sign out?</p>
              <p className="text-sm mt-2">You'll need to sign in again to access your account.</p>
            </div>

            <button
              onClick={handleSignOut}
              className="w-full bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,215,0,0.4)] active:scale-95"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                boxShadow: "0 2px 8px rgba(255, 215, 0, 0.3)",
              }}
            >
              Yes, Sign Me Out
            </button>

            <a
              href="/"
              className="block w-full bg-transparent border-2 border-[#ff00b3] text-[#ff00b3] hover:bg-[#ff00b3] hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Cancel & Continue Shopping
            </a>
          </div>
        </div>

        {/* Back to Store */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-[#ff00b3] text-sm transition-colors"
          >
            ← Back to Store
          </a>
        </div>
      </div>
    </div>
  );
}