import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    alert("You have been logged out successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-orange-200 text-blue-950 text-lg px-4 flex justify-end py-4 ">
        <NavLink
          to="/dashboard/student-query"
          className="p-2 hover:underline"
        >
          Student Query
        </NavLink>
        <NavLink
          to="/dashboard/new-admission"
          className="p-2  hover:underline"
        >
          New Admission
        </NavLink>
        <button className="p-2 hover:underline" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Dashboard;
