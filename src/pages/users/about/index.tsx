
import { Target, Rocket, Award, Heart, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-[3rem] overflow-hidden bg-gray-900 group">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
          alt="Our Team"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Changing the way you <span className="text-green-500">experience</span> shopping.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium">
              We started with a simple idea: to bring quality, sustainability, and style together in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-green-600 font-black uppercase tracking-[0.2em] text-sm">Our Mission</span>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">Driven by Quality, Inspired by Our Community.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              At MyStore, our mission is to provide an unparalleled shopping experience by delivering high-quality products that reflect your unique personality. We believe that everyone deserves access to premium goods without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <Target className="text-green-600" size={24} />
              <h3 className="font-bold text-gray-900">Precision Focus</h3>
              <p className="text-sm text-gray-500">Every product is curated with meticulous attention to detail.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <Rocket className="text-green-600" size={24} />
              <h3 className="font-bold text-gray-900">Innovation First</h3>
              <p className="text-sm text-gray-500">Constantly evolving to bring you the latest trends and tech.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-green-100 rounded-[3rem] -z-10 rotate-3" />
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2024"
            alt="Office"
            className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">The Values We Live By</h2>
            <p className="text-gray-500 font-medium text-lg">
              Our culture is built on a foundation of integrity, creativity, and a relentless pursuit of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Award className="text-purple-600" size={32} />}
              title="Excellence"
              desc="We never settle for 'good enough'. We aim for extraordinary in everything we do."
              color="bg-purple-100"
            />
            <ValueCard
              icon={<Heart className="text-red-600" size={32} />}
              title="Passion"
              desc="We love what we do, and that energy is reflected in the quality of our service."
              color="bg-red-100"
            />
            <ValueCard
              icon={<ShieldCheck className="text-blue-600" size={32} />}
              title="Integrity"
              desc="Transparency and honesty are at the core of our relationship with you."
              color="bg-blue-100"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-green-600 font-black uppercase tracking-[0.2em] text-sm">The Dream Team</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Meet the Minds Behind MyStore</h2>
          </div>
          <button className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-all">
            Join Our Team
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamCard
            name="Alex Thompson"
            role="Founder & CEO"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamCard
            name="Sarah Jenkins"
            role="Creative Director"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamCard
            name="Michael Chen"
            role="Head of Operations"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
          />
          <TeamCard
            name="Elena Rodriguez"
            role="Lead Developer"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatItem value="10k+" label="Happy Customers" />
          <StatItem value="500+" label="Premium Products" />
          <StatItem value="15+" label="Global Awards" />
          <StatItem value="24/7" label="Active Support" />
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const TeamCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="space-y-4 group">
    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-black text-gray-900">{name}</h3>
      <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{role}</p>
    </div>
  </div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="space-y-2">
    <div className="text-4xl md:text-5xl font-black text-white">{value}</div>
    <div className="text-green-500 font-bold text-xs uppercase tracking-widest">{label}</div>
  </div>
);

export { About as Component };
