import React, { useContext } from "react";
import logo from "../../../assets/toylogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../Titles/useTitle";

const Navbar = () => {
  useTitle("home");
  const { user, userLogout, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="w-56 progress"></progress>;
  }

  // logout handler
  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire("Sign Out Successfull");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navmenu = (
    <>
      <Link className="ml-4 text-xl font-bold" to="/">
        Home
      </Link>
      <Link className="ml-4 text-xl font-bold" to="/alltoys">
        All Toys
      </Link>

      {user && user ? (
        <>
          <Link to="/addtoys" className="ml-4 text-xl font-bold">
            Add Toys
          </Link>
          <Link to="/mytoys" className="ml-4 text-xl font-bold">
            My Toys
          </Link>
        </>
      ) : (
        ""
      )}
      <Link className="ml-4 text-xl font-bold" to="/blog">
        Blog
      </Link>
    </>
  );
  return (
    <div className="mb-8 rounded-md navbar bg-slate-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {navmenu}
          </ul>
        </div>
        <img src={logo} alt="" className="w-10 h-8" />
        <Link to="/" className="text-xl normal-case btn btn-ghost">
          Toy Thriver
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navmenu}</ul>
      </div>
      <div className="navbar-end">
        {user && user ? (
          <>
            <img
              className="w-8 h-8 rounded-full fb-tooltip fb-tooltip-bg-blue-500"
              src={user?.photoURL}
              title={user?.displayName}
            />
            <button onClick={handleLogout} className="ml-3 text-xl font-bold">
              SignOut
            </button>
          </>
        ) : (
          <Link to="/login" className="mr-4 text-xl font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
