import React from "react";
import Bannar from "./Bannar";
import Gellery from "./Gellery";
import CategoryList from "./CategoryList";
import ShopByBrand from "./ShopByBrand";
import useTitle from "../../../Titles/useTitle";

const Home = () => {
  useTitle("home");
  return (
    <div className="">
      <Bannar></Bannar>
      <Gellery></Gellery>
      <CategoryList></CategoryList>
      {/* extra section */}
      <ShopByBrand></ShopByBrand>
      <div className="p-4 mt-8 mb-4 text-center rounded-md bg-slate-300">
        <h2 className="text-4xl font-semibold">Subscribe & Save</h2>
        <p>
          Don't miss out! Register your email to get the latest deals and
          exclusive offers. <br /> Plus receive a 10% discount code to use on
          your first order
        </p>
        <div className="w-1/2 mx-auto mt-4 mb-2">
          <input
            type="text"
            placeholder="Type here"
            className="w-full max-w-xs input input-bordered input-info"
          />
          <input
            type="submit"
            className="btn-outline btn-danger btn"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
