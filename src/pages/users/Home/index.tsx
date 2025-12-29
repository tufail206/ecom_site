
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Headphones, Zap } from "lucide-react";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import Card from "../../../components/common/Card";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const featuredProducts = products?.slice(0, 4) || [];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-[3rem] overflow-hidden bg-gray-900 group">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-12 md:px-24">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-1.5 bg-green-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full">
              New Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Elevate Your <span className="text-green-500">Everyday</span> Style.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg">
              Discover our curated selection of premium products designed for the modern lifestyle. Quality meets elegance in every piece.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center gap-2 transition-all shadow-xl shadow-green-900/20 active:scale-95"
              >
                Shop Collection <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all active:scale-95"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        <FeatureCard
          icon={<Truck className="text-green-600" size={32} />}
          title="Fast Shipping"
          desc="Free shipping on orders over $100"
        />
        <FeatureCard
          icon={<ShieldCheck className="text-green-600" size={32} />}
          title="Secure Payment"
          desc="100% secure payment processing"
        />
        <FeatureCard
          icon={<Zap className="text-green-600" size={32} />}
          title="Instant Support"
          desc="24/7 dedicated customer service"
        />
        <FeatureCard
          icon={<Headphones className="text-green-600" size={32} />}
          title="Quality Assured"
          desc="Every product is hand-checked"
        />
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Shop by Categories</h2>
            <p className="text-gray-500 font-medium">Browse our wide range of premium categories.</p>
          </div>
          <Link to="/products" className="text-green-600 font-black flex items-center gap-2 group">
            View All Categories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="Electronics"
            count="120+ Products"
            image="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000"
            color="bg-blue-500"
          />
          <CategoryCard
            title="Fashion"
            count="350+ Products"
            image="https://images.unsplash.com/photo-1445205170230-053b830c6039?auto=format&fit=crop&q=80&w=1000"
            color="bg-purple-500"
          />
          <CategoryCard
            title="Home Decor"
            count="85+ Products"
            image="https://images.unsplash.com/photo-1513519247388-193ad51c50be?auto=format&fit=crop&q=80&w=1000"
            color="bg-amber-500"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Our Best Sellers</h2>
            <p className="text-gray-500 font-medium">
              Handpicked favorites from our community. These pieces define our commitment to quality and style.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-[400px] bg-white rounded-3xl animate-pulse border border-gray-100" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center pt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-gray-200"
            >
              Explore All Products <ShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-green-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white space-y-8">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Join the Inner Circle</h2>
            <p className="text-green-50 max-w-xl mx-auto text-lg font-medium opacity-90">
              Subscribe to stay updated on new arrivals, exclusive offers, and community stories.
            </p>
          </div>

          <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-green-100 font-bold outline-hidden focus:bg-white/20 transition-all text-lg"
            />
            <button className="px-10 py-5 bg-white text-green-600 font-black rounded-2xl hover:bg-green-50 transition-all active:scale-95 shadow-xl shadow-green-900/20">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="p-4 bg-green-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-black text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">{desc}</p>
  </div>
);

const CategoryCard = ({ title, count, image, color }: { title: string, count: string, image: string, color: string }) => (
  <Link to="/products" className="group relative h-80 rounded-[2.5rem] overflow-hidden block">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
      <div className="space-y-1">
        <h3 className="text-2xl font-black text-white">{title}</h3>
        <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">{count}</p>
      </div>
      <div className={`p-3 rounded-xl ${color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <ArrowRight size={20} />
      </div>
    </div>
  </Link>
);

export { Home as Component };
