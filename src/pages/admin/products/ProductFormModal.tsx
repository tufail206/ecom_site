import { useState } from "react";
import { X, Upload, Save, Loader2 } from "lucide-react";
import type { Product } from "../../../types/product";

interface ProductFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (productData: Partial<Product>) => void;
    product?: Product | null;
    isLoading?: boolean;
}

const ProductFormModal = ({ isOpen, onClose, onSubmit, product, isLoading }: ProductFormModalProps) => {
    const [formData, setFormData] = useState<Partial<Product>>(
        product || {
            name: "",
            description: "",
            price: 0,
            category: "",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60",
            stock: 0,
        }
    );

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "price" || name === "stock" ? Number(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-gray-50/50">
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 leading-none mb-2">
                            {product ? "Edit Product" : "New Collection Item"}
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">Fill in the details below</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100 shadow-sm">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Product Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Minimalist Watch"
                                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium"
                            />
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Category</label>
                            <select
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium"
                            >
                                <option value="">Select Category</option>
                                <option value="Footwear">Footwear</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Apparel">Apparel</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Price ($)</label>
                            <input
                                required
                                type="number"
                                name="price"
                                step="0.01"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium"
                            />
                        </div>

                        {/* Stock */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Inventory Level</label>
                            <input
                                required
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                            <Upload size={16} /> Cover Image URL
                        </label>
                        <input
                            required
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium text-xs font-mono"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Description</label>
                        <textarea
                            required
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-hidden text-gray-900 font-medium resize-none"
                            placeholder="Tell customers why they need this..."
                        />
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-[2] bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-green-100 flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                            {product ? "Update Product" : "Launch Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFormModal;
