import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, ShoppingCart, BarChart2, Settings, X } from "lucide-react";
import type { SidebarItemProps } from "../../types";
import { appPath } from "../../utils/pathConstant";

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <aside
      className={`fixed md:static z-40 top-0 left-0 h-dvh w-64 bg-white shadow-lg transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <div className="p-6 text-xl font-bold border-b flex justify-between items-center">
        <h1>Admin Panel</h1>
        {  open && <X onClick={handleClick}/>} 
      </div>

      <nav className="p-4 space-y-2">
        <SidebarItem
          to={appPath.ADMIN_DASHBOARD}
          icon={<Home size={18} />}
          label="Dashboard"
          onClick={handleClick}
        />
        <SidebarItem
          to={appPath.ADMIN_USERS}
          icon={<Users size={18} />}
          label="Users"
          onClick={handleClick}
        />
        <SidebarItem
          to={appPath.ADMIN_ORDERS}
          icon={<ShoppingCart size={18} />}
          label="Orders"
          onClick={handleClick}
        />
        <SidebarItem
          to={appPath.ADMIN_ANALYTICS}
          icon={<BarChart2 size={18} />}
          label="Analytics"
          onClick={handleClick}
        />
        <SidebarItem
          to={appPath.ADMIN_SETTINGS}
          icon={<Settings size={18} />}
          label="Settings"
          onClick={handleClick}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;


function SidebarItem({ icon, label, to, onClick }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition
        ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
