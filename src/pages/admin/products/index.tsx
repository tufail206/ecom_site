import { useState } from "react";
import { Plus, Search, Edit, Trash2, Package, Loader2 } from "lucide-react";
import { mockProducts } from "../../../utils/mockData";
import type { Product } from "../../../types/product";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} from "../../../redux/api/productApi";
import ProductFormModal from "./ProductFormModal";

const Admin_Products = () => {
  const { data: productsData, isLoading } = useGetProductsQuery();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = productsData || mockProducts;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (product: Product | null = null) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData: Partial<Product>) => {
    try {
      if (selectedProduct) {
        await updateProduct({ id: selectedProduct.id, body: formData }).unwrap();
      } else {
        await createProduct(formData).unwrap();
      }
      handleCloseModal();
    } catch (error) {
      console.error("Failed to save product:", error);
      // In demo/mock mode, we'll just close it
      handleCloseModal();
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Inventory</h1>
          <p className="text-gray-500 font-medium">Add, update or remove items from your store.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-green-100 transition-all active:scale-95 cursor-pointer"
        >
          <Plus size={24} />
          Create Product
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between flex-wrap gap-4 bg-gray-50/30">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Find products by name..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-100 focus:outline-hidden focus:ring-4 focus:ring-green-50 focus:border-green-500 transition-all text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-gray-400 text-xs font-black uppercase tracking-widest border-b border-gray-100">
                <th className="px-8 py-5">Product Details</th>
                <th className="px-8 py-5">Collection</th>
                <th className="px-8 py-5">Price</th>
                <th className="px-8 py-5">Availability</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-8 py-32 text-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <Loader2 className="animate-spin text-green-600" size={48} />
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Syncing Database...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-green-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">{product.name}</div>
                          <div className="text-xs text-gray-400 font-medium truncate max-w-[200px]">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-600 text-[10px] font-black uppercase tracking-wider">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-black text-gray-900 text-lg">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                          <Package size={14} className="text-gray-300" />
                          {product.stock} units
                        </div>
                        <div className={`text-[10px] font-black uppercase tracking-widest ${product.stock > 10 ? "text-green-500" : product.stock > 0 ? "text-amber-500" : "text-red-500"}`}>
                          {product.stock > 10 ? "Optimal" : product.stock > 0 ? "Low Stock" : "Deprecated"}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleOpenModal(product)}
                          className="p-3 bg-white text-gray-400 hover:text-green-600 border border-gray-100 hover:border-green-100 rounded-xl shadow-sm transition-all"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-3 bg-white text-gray-400 hover:text-red-600 border border-gray-100 hover:border-red-100 rounded-xl shadow-sm transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && !isLoading && (
          <div className="p-20 text-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
              <Package size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory is empty</h3>
            <p className="text-gray-400 max-w-xs mx-auto">No products found for "{searchTerm}". Expand your search or create a new item.</p>
          </div>
        )}
      </div>

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        product={selectedProduct}
        isLoading={isCreating || isUpdating}
      />
    </div>
  );
};

export { Admin_Products as Component };


export { Admin_Products as Component };