import React from "react";
import logo from "../../../assets/toylogo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-gray-600 rounded-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-16 h-12" />
            <span className="text-lg font-bold">Toy Thriver</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-gray-400">
              <h2 className="mb-2 font-bold">Contact</h2>
              <p>+880 1900078000</p>
              <p>+880 1900088000</p>
            </div>
            <div className="text-gray-400">
              <h2 className="mb-2 font-bold">Social Media</h2>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaFacebook className="w-8 h-8 mb-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
            </div>
            <div className="text-gray-400">
              <h2 className="mb-2 font-bold">Address</h2>
              <p>Sector 7, Uttara</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Toy Thriver. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
