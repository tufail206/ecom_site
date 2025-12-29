
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-24 space-y-20">
      {/* Header */}
      <section className="text-center space-y-4 pt-10">
        <span className="text-green-600 font-black uppercase tracking-[0.2em] text-sm">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Let's Start a <span className="text-green-500">Conversation</span>.</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
          Have a question or just want to say hi? We'd love to hear from you. Our team is here to help you with anything you need.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfoItem
                icon={<Phone className="text-green-600" size={24} />}
                title="Phone"
                value="+92 333 1234567"
                desc="Mon-Fri from 9am to 6pm"
              />
              <ContactInfoItem
                icon={<Mail className="text-green-600" size={24} />}
                title="Email"
                value="support@mystore.com"
                desc="We'll respond within 24 hours"
              />
              <ContactInfoItem
                icon={<MapPin className="text-green-600" size={24} />}
                title="Office"
                value="Skardu, Baltistan, Pakistan"
                desc="Come say hello at our headquarters"
              />
            </div>
          </div>

          <div className="p-10 bg-gray-900 rounded-[3rem] text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl" />
            <h3 className="text-2xl font-black">Social Connect</h3>
            <p className="text-gray-400 font-medium">Follow us on social media for the latest updates and exclusive offers.</p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={20} />} />
              <SocialLink icon={<Twitter size={20} />} />
              <SocialLink icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-gray-100 relative">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-hidden transition-all font-bold text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-hidden transition-all font-bold text-gray-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-hidden transition-all font-bold text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white outline-hidden transition-all font-bold text-gray-900 resize-none"
              />
            </div>
            <button className="w-full py-5 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 active:scale-95 group">
              Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Preview */}
      <section className="bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-gray-900">Quick Support</h2>
          <p className="text-gray-500 font-medium">Check out our most common questions for instant answers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FAQCard
            icon={<MessageSquare className="text-blue-500" size={24} />}
            title="General Inquiry"
            desc="What is the shipping policy for international orders?"
          />
          <FAQCard
            icon={<Clock className="text-amber-500" size={24} />}
            title="Order Tracking"
            desc="How do I track my order once it's been shipped?"
          />
          <FAQCard
            icon={<Send className="text-purple-500" size={24} />}
            title="Returns & Refunds"
            desc="What is your return policy for damaged items?"
          />
        </div>
      </section>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, value, desc }: { icon: React.ReactNode, title: string, value: string, desc: string }) => (
  <div className="flex gap-6 group">
    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">{title}</h3>
      <p className="text-xl font-black text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 font-medium">{desc}</p>
    </div>
  </div>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-12 h-12 bg-white/10 hover:bg-green-600 rounded-xl flex items-center justify-center text-white transition-all hover:-translate-y-1">
    {icon}
  </a>
);

const FAQCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-left space-y-4 hover:shadow-xl transition-all duration-300">
    <div className="p-3 bg-gray-50 w-fit rounded-xl">{icon}</div>
    <h3 className="font-bold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 font-medium">{desc}</p>
    <button className="text-green-600 text-xs font-black uppercase tracking-widest hover:underline">Read More</button>
  </div>
);

export { Contact as Component };
