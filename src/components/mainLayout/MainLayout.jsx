import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedPages/Header/Navbar';
import Footer from '../sharedPages/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;