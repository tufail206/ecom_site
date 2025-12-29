import { useState } from "react";
import { Search, Filter, ShoppingBag, Eye, CheckCircle, Clock, Truck, AlertCircle } from "lucide-react";

const mockOrders = [
    { id: "ORD-8291", customer: "John Doe", date: "2025-05-20", total: 289.98, status: "delivered", items: 2 },
    { id: "ORD-9102", customer: "Sarah Smith", date: "2025-05-19", total: 159.99, status: "processing", items: 1 },
    { id: "ORD-7362", customer: "Mike Johnson", date: "2025-05-18", total: 849.50, status: "shipped", items: 4 },
    { id: "ORD-5521", customer: "Emma Wilson", date: "2025-05-18", total: 45.99, status: "pending", items: 1 },
    { id: "ORD-3329", customer: "Alex Brown", date: "2025-05-17", total: 129.99, status: "cancelled", items: 2 },
];

const Admin_Orders = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [orders] = useState(mockOrders);

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'delivered': return 'bg-green-50 text-green-600 border-green-100';
            case 'processing': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'shipped': return 'bg-purple-50 text-purple-600 border-purple-100';
            case 'pending': return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'cancelled': return 'bg-red-50 text-red-600 border-red-100';
            default: return 'bg-gray-50 text-gray-600 border-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'delivered': return <CheckCircle size={14} />;
            case 'processing': return <Clock size={14} />;
            case 'shipped': return <Truck size={14} />;
            case 'pending': return <AlertCircle size={14} />;
            case 'cancelled': return <AlertCircle size={14} />;
            default: return null;
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Order Management</h1>
                <p className="text-gray-500 font-medium">Fulfill requests and manage customer purchases.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/30 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Find orders by ID or customer..."
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-100 focus:outline-hidden focus:ring-4 focus:ring-green-50 focus:border-green-500 transition-all text-sm font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-100 rounded-2xl text-gray-600 font-bold text-sm hover:shadow-md transition-all cursor-pointer">
                        <Filter size={18} />
                        Filter Orders
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-400 text-xs font-black uppercase tracking-widest border-b border-gray-100">
                                <th className="px-8 py-5">Order ID</th>
                                <th className="px-8 py-5">Customer</th>
                                <th className="px-8 py-5">Date</th>
                                <th className="px-8 py-5">Value</th>
                                <th className="px-8 py-5">Progress</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="font-black text-gray-900">{order.id}</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{order.items} Items</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-gray-700">{order.customer}</div>
                                    </td>
                                    <td className="px-8 py-6 text-gray-500 font-medium text-sm">
                                        {new Date(order.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-8 py-6 font-black text-gray-900">
                                        ${order.total.toFixed(2)}
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm ${getStatusStyle(order.status)}`}>
                                            {getStatusIcon(order.status)}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right font-medium">
                                        <button className="p-3 bg-white text-gray-400 hover:text-green-600 border border-gray-100 hover:border-green-100 rounded-xl shadow-sm transition-all cursor-pointer group-hover:scale-110">
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {orders.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                            <ShoppingBag size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">No orders yet</h3>
                        <p className="text-gray-400">Your store hasn't received any orders matching your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export { Admin_Orders as Component };
