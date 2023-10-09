import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartValue = useSelector((state) => state.cart.cart) || [];

  return (
    <div className="h-16 shadow-md flex items-center bg-slate-50 justify-between p-10 mb-5 sticky top-0">
      <Link to={"/"} className="font-bold text-2xl text-red-900 cursor-pointer">
        Logo
      </Link>
      <ul className="flex gap-x-4">
        <Link
          to={"/"}
          className="font-semibold text-lg cursor-pointer hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          to={"/cart"}
          className="font-semibold text-lg cursor-pointer hover:text-blue-600"
        >
          Cart
          {cartValue.length > 0 && (
            <span className="px-2 py-1 rounded-full bg-blue-300 ml-3 ">
              {cartValue.length}
            </span>
          )}
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
