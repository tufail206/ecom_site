import { type Product } from "../../types/product";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem(product));
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-50 block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <Heart size={18} />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors text-sm"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.numReviews})</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="text-xs text-gray-500 font-medium">
            {product.stock > 0 ? "Available" : "Sold Out"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;