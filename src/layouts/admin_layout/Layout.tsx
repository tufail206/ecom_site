import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AdminDashboard() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 w-full">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content */}
      <div className="flex-1 w-full  ">
       <Header open={open} setOpen={setOpen}/>

       <Outlet/>
      </div>
    </div>
  );
}

