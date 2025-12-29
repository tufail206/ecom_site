import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-24 pb-12 mt-20 rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="text-3xl font-black text-white">
              My<span className="text-green-500">Store</span>
            </Link>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              We provide the finest selection of premium products curated for quality and sustainability. Join our journey to a better lifestyle.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Support</h3>
            <ul className="space-y-4">
              <FooterLink to="#">Shipping Policy</FooterLink>
              <FooterLink to="#">Return & Refunds</FooterLink>
              <FooterLink to="#">Privacy Policy</FooterLink>
              <FooterLink to="#">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Our Newsletter</h3>
            <p className="text-gray-400 font-medium">Get the latest news and special offers directly in your inbox.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-hidden focus:border-green-500 focus:bg-white/10 transition-all font-bold placeholder:text-gray-500"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all active:scale-95">
                <ArrowRight size={20} />
              </button>
            </form>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-green-500" />
                <span className="font-bold">+92 333 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-green-500" />
                <span className="font-bold">support@mystore.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 font-bold text-sm">
            © 2025 <span className="text-white">MyStore</span>. Designed with passion by Antigravity.
          </p>
          <div className="flex items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-400 font-bold hover:text-green-500 transition-colors flex items-center group">
      <span className="w-0 group-hover:w-4 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all hover:-translate-y-1">
    {icon}
  </a>
);
