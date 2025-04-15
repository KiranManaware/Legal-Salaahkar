import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className="bg-[#001331] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#C49603] text-xl font-bold">
          Legal Salaahkar
        </Link>
        <div>
          {user ? (
            <>
              {/* Determine the correct dashboard link */}
              <Link
                to={
                  user.isAdmin
                    ? "/admin-dashboard"
                    : user.isLawyer
                    ? "/lawyer-dashboard"
                    : "/client-dashboard"
                }
                className="bg-[#C49603] text-[#001331] mx-2 px-4 py-2 rounded-sm shadow"
              >
                My Dashboard
              </Link>

              {/* Logout Button */}
              <Link
                onClick={handleLogOut}
                className="bg-red-600 text-white mx-2 px-4 py-2 rounded-sm shadow"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              {/* Login & Register Buttons */}
              <Link
                to="/login"
                className="bg-[#C49603] text-[#001331] mx-2 px-4 py-2 rounded-sm shadow"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#C49603] text-[#001331] px-4 py-2 rounded-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
