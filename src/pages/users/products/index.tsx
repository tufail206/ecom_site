import { useState } from "react";
import Card from "../../../components/common/Card";
import { mockProducts } from "../../../utils/mockData";
import { Filter, Grid, List, Search } from "lucide-react";

import { useGetProductsQuery } from "../../../redux/api/productApi";

const Products = () => {
  const { data: productsData, isLoading } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const products = productsData || mockProducts;

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "price-high-low") return b.price - a.price;
      if (sortBy === "reviews") return (b.numReviews || 0) - (a.numReviews || 0);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0; // "newest" or default: keep original order
    });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Our Collection</h1>
            <p className="text-gray-500 text-lg">Quality products curated for your daily needs.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <Grid size={20} className="text-green-600" />
            </button>
            <button className="p-2.5 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all cursor-pointer">
              <List size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-6">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products by name..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-50/50 transition-all outline-hidden text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            <div className="flex items-center gap-2 pr-4 border-r border-gray-100 mr-2 text-gray-400">
              <Filter size={18} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${activeCategory === category
                  ? "bg-green-600 text-white shadow-lg shadow-green-100"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between">
          <p className="text-gray-500 font-medium tracking-tight">
            Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> products
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-bold text-gray-900 outline-hidden cursor-pointer focus:text-green-600 transition-colors"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="reviews">Most Reviews</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} className="text-green-200" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any products matching "{searchTerm}". Try checking your spelling or using different keywords.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("All") }}
              className="mt-8 text-green-600 font-bold hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Products as Component };