import React from "react";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="bg-base-100 shadow-md">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <Link to="/" className="normal-case text-xl">
              <img src={logo} className="w-[100px]" alt="" />
            </Link>
          </div>
          <div className="flex-none">
            <p className="font-semibold text-slate-800">Paid Total: 0</p>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
