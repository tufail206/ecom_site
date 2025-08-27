import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const admin_routes = () => {
    const navigate=useNavigate()
    const isAdmin=false
  return  isAdmin ? <Outlet/> : navigate("/login")
}

export default admin_routes