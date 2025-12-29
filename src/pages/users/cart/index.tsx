import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { addItem, removeItem, removeFromCart } from "../../../redux/features/cart/cartSlice";
import type { RootState } from "../../../redux/store";
import { appPath } from "../../../utils/pathConstant";

const Cart = () => {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 max-w-md mb-8 italic">Looks like you haven't added anything to your cart yet. Explore our products and find something you love!</p>
        <Link
          to={appPath.PRODUCTS}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-2xl transition-all shadow-lg shadow-green-100 flex items-center gap-2"
        >
          Start Shopping <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-shadow">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-gray-900 truncate pr-4">{item.name}</h3>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-4">{item.category}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-xl border border-gray-100">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="p-1.5 hover:bg-white hover:text-green-600 rounded-lg transition-all text-gray-500 cursor-pointer disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="p-1.5 hover:bg-white hover:text-green-600 rounded-lg transition-all text-gray-500 cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-xl font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="font-bold text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-500 items-center">
                <span>Tax (EST)</span>
                <span className="font-bold text-gray-900">$0.00</span>
              </div>
              <div className="h-px bg-gray-50 my-2"></div>
              <div className="flex justify-between items-center text-2xl font-black text-gray-900 pt-2">
                <span>Total</span>
                <span className="text-green-600">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to={appPath.CHECKOUT}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-3 mt-4"
            >
              Proceed to Checkout <ArrowRight size={20} />
            </Link>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-widest pt-4">
              <ShoppingBag size={14} />
              Secure Checkout Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart as Component };