import { useState } from "react";
import { Search, UserCheck, UserPlus, Shield, Mail, Calendar, MoreVertical, Trash2, Edit } from "lucide-react";

// Mock Users Data
const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "admin", status: "active", joined: "2025-01-15" },
  { id: "2", name: "Sarah Smith", email: "sarah@example.com", role: "user", status: "active", joined: "2025-02-10" },
  { id: "3", name: "Mike Johnson", email: "mike@example.com", role: "user", status: "suspended", joined: "2025-03-05" },
  { id: "4", name: "Emma Wilson", email: "emma@example.com", role: "user", status: "active", joined: "2025-04-12" },
  { id: "5", name: "Alex Brown", email: "alex@example.com", role: "user", status: "active", joined: "2025-05-20" },
];

const Admin_User = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users] = useState(mockUsers);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">User Directory</h1>
          <p className="text-gray-500 font-medium">Manage permissions and monitor user activity.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border-2 border-gray-100 text-gray-900 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
            <UserPlus size={20} />
            Invite User
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Total Members</p>
            <h3 className="text-3xl font-black text-gray-900">1,284</h3>
          </div>
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <UserCheck size={28} />
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Administrators</p>
            <h3 className="text-3xl font-black text-gray-900">12</h3>
          </div>
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <Shield size={28} />
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">New this month</p>
            <h3 className="text-3xl font-black text-gray-900">+142</h3>
          </div>
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
            <UserPlus size={28} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/30">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or email..."
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
                <th className="px-8 py-5">User Profile</th>
                <th className="px-8 py-5">Permission</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Joined Date</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-black text-lg shadow-sm border border-green-100">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          <Mail size={12} /> {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${user.role === 'admin'
                        ? "bg-purple-50 text-purple-600 border-purple-100"
                        : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-sm font-bold text-gray-700 capitalize">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <Calendar size={14} className="text-gray-300" />
                      {new Date(user.joined).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all cursor-pointer">
                        <Edit size={18} />
                      </button>
                      <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all cursor-pointer">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="p-20 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-100 text-gray-300">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No members found</h3>
            <p className="text-gray-400">Refine your search parameters or invite a new member.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Admin_User as Component };