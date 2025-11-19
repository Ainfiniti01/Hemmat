import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Trash2, MessageCircle, MinusCircle, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppBulkOrder = () => {
    let message = "Hi, I’d like to order the following wigs in bulk:\n\n";
    cartItems.forEach((item) => {
      message += `${item.quantity} × ${item.name} (${formatCurrency(item.numericPrice)} each)\n`;
    });
    message += `\nTotal: ${formatCurrency(getTotalPrice())}\n\nPlease confirm availability.`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    clearCart(); // Clear cart after initiating bulk order
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-black dark:text-white font-bold mb-8 text-center"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily:
                'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Your Cart (Bulk Orders)
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-20 h-20 text-[#7B7B7B] dark:text-[#A0A0A0] mx-auto mb-6" />
              <p
                className="text-[#7B7B7B] dark:text-[#A0A0A0] text-lg mb-4"
                style={{
                  fontFamily:
                    'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Your cart is empty.
              </p>
              <Link
                to="/products"
                className="bg-[#ff00b3] hover:bg-[#FFB6C1 ] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-[#E9EBF0] dark:border-[#333333] p-6 md:p-8">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-[#E9EBF0] dark:border-[#333333] pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#F5F5F7] dark:bg-[#2A2A2A]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-black dark:text-white font-semibold text-lg mb-1"
                        style={{
                          fontFamily:
                            'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[#7B7B7B] dark:text-[#A0A0A0] text-sm mb-2">
                        {formatCurrency(item.numericPrice)} each
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          className="text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-red-500 transition-colors"
                        >
                          <MinusCircle size={20} />
                        </button>
                        <span className="text-black dark:text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#7B7B7B] dark:text-[#A0A0A0] hover:text-green-500 transition-colors"
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-black dark:text-white font-bold text-xl mb-2">
                        {formatCurrency(item.numericPrice * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E9EBF0] dark:border-[#333333] flex justify-between items-center">
                <p
                  className="text-black dark:text-white font-bold text-2xl"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  Total: {formatCurrency(getTotalPrice())}
                </p>
                <button
                  onClick={handleWhatsAppBulkOrder}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                  style={{
                    fontFamily:
                      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <MessageCircle size={20} />
                  Contact via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
