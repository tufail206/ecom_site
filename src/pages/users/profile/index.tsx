import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User, Mail, MapPin, Phone, Package, Heart, LogOut, Camera, Save, Edit2 } from "lucide-react";
import type { RootState } from "../../../redux/store";
import { logout, setCredentials } from "../../../redux/features/auth/authSlice";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: "+92 333 1234567",
    address: "Skardu, Baltistan, Pakistan"
  });

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  const handleSave = () => {
    // In a real app, you'd call an API mutation here
    dispatch(setCredentials({ user: { ...user, name: formData.name, email: formData.email }, token: localStorage.getItem("token") || "" }));
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Side Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-600" />
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center text-4xl font-black text-green-600 border-4 border-white shadow-lg mx-auto overflow-hidden">
                {formData.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 p-2.5 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all border-2 border-white">
                <Camera size={16} />
              </button>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">{formData.name}</h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">{user?.role || "Member"}</p>

            <div className="space-y-2 text-left">
              <SidebarLink icon={<Package size={18} />} label="My Orders" badge="3" />
              <SidebarLink icon={<Heart size={18} />} label="Wishlist" badge="8" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-all mt-4"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Account Settings</h1>
                <p className="text-gray-400 font-medium">Update your persona and contact information.</p>
              </div>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all shadow-md active:scale-95 ${isEditing
                  ? "bg-green-600 text-white hover:bg-green-700 shadow-green-100"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
              >
                {isEditing ? <><Save size={18} /> Save Changes</> : <><Edit2 size={18} /> Edit Profile</>}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProfileField
                label="Full Name"
                value={formData.name}
                icon={<User size={18} />}
                isEditing={isEditing}
                onChange={(val: string) => setFormData({ ...formData, name: val })}
              />
              <ProfileField
                label="Email Address"
                value={formData.email}
                icon={<Mail size={18} />}
                isEditing={isEditing}
                type="email"
                onChange={(val: string) => setFormData({ ...formData, email: val })}
              />
              <ProfileField
                label="Phone Number"
                value={formData.phone}
                icon={<Phone size={18} />}
                isEditing={isEditing}
                onChange={(val: string) => setFormData({ ...formData, phone: val })}
              />
              <ProfileField
                label="Residential Address"
                value={formData.address}
                icon={<MapPin size={18} />}
                isEditing={isEditing}
                onChange={(val: string) => setFormData({ ...formData, address: val })}
              />
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-1">Security & Privacy</h3>
              <p className="text-gray-400 font-medium text-sm">Update your password and manage sessions.</p>
            </div>
            <button className="text-green-600 font-black text-sm uppercase tracking-widest hover:underline px-4 py-2 hover:bg-green-50 rounded-xl transition-all">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, badge }: { icon: any, label: string, badge?: string }) => (
  <button className="w-full flex items-center justify-between p-4 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 hover:text-green-600 transition-all group">
    <div className="flex items-center gap-3">
      <span className="text-gray-400 group-hover:text-green-600 transition-colors">{icon}</span>
      {label}
    </div>
    {badge && (
      <span className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-lg font-black">{badge}</span>
    )}
  </button>
);

const ProfileField = ({ label, value, icon, isEditing, type = "text", onChange }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative">
      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditing ? "text-green-600" : "text-gray-300"}`}>
        {icon}
      </div>
      <input
        type={type}
        readOnly={!isEditing}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all font-bold text-gray-900 outline-hidden border-2 ${isEditing
          ? "bg-white border-green-500 shadow-lg shadow-green-50"
          : "bg-gray-50 border-transparent text-gray-500"
          }`}
      />
    </div>
  </div>
);

export { Profile as Component };