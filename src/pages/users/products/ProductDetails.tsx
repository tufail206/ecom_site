import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Star, ShoppingCart, Heart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useGetProductByIdQuery } from "../../../redux/api/productApi";
import { addItem } from "../../../redux/features/cart/cartSlice";
import { mockProducts } from "../../../utils/mockData";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { data: productData, isLoading } = useGetProductByIdQuery(id || "");

    // Fallback to mock data for demo
    const product = productData || mockProducts.find(p => p.id === id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                <Link to="/products" className="text-green-600 hover:underline mt-4 block">Back to Products</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-green-600 mb-8 transition-colors gap-2">
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Shop</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Product Image Section */}
                <div className="relative group">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="flex flex-col">
                    <div className="mb-2">
                        <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            {product.category}
                        </span>
                    </div>

                    <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4">{product.name}</h1>

                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"} />
                                ))}
                            </div>
                            <span className="font-bold text-gray-900">{product.rating}</span>
                            <span className="text-gray-400">({product.numReviews} Reviews)</span>
                        </div>
                        <div className="h-4 w-px bg-gray-200"></div>
                        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>

                    <div className="mb-10">
                        <p className="text-gray-500 text-lg leading-relaxed italic">"{product.description}"</p>
                    </div>

                    <div className="flex items-center gap-4 mb-10">
                        <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                        <span className="text-gray-400 line-through text-xl font-medium">${(product.price * 1.2).toFixed(2)}</span>
                        <span className="bg-red-50 text-red-500 px-3 py-1 rounded-lg text-sm font-bold animate-pulse">20% OFF</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-green-100 flex items-center justify-center gap-3 transition-all active:scale-95"
                        >
                            <ShoppingCart size={24} />
                            Add to Shopping Bag
                        </button>
                        <button className="p-5 bg-white border-2 border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 rounded-2xl shadow-sm transition-all">
                            <Heart size={24} />
                        </button>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-50 rounded-xl text-green-600">
                                <Truck size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Free Delivery</h4>
                                <p className="text-gray-400 text-xs">On orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-50 rounded-xl text-green-600">
                                <RotateCcw size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">30 Days Return</h4>
                                <p className="text-gray-400 text-xs">No questions asked</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-50 rounded-xl text-green-600">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Secure Payment</h4>
                                <p className="text-gray-400 text-xs">100% Encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ProductDetails as Component };
