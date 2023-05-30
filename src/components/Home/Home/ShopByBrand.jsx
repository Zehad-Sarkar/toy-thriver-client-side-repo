import React from "react";
import { Link } from "react-router-dom";

const ShopByBrand = () => {
  return (
    <div className="mt-6">
      <h2 className="p-4 mb-3 text-6xl font-extrabold text-center rounded-md text-rose-600 bg-slate-300">
        Shop By Brand
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="mt-2 md:shadow-xl card md:w-96 bg-base-100"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/QMT7bhP/images-2.jpg"
              className="w-full h-24 rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <Link className="w-full p-1 font-bold rounded text-blue bg-stone-300">
              Crayola
            </Link>
          </div>
        </div>
        <div
          className="mt-2 shadow-xl card w-96 bg-base-100"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/FqvHMqx/images-3.jpg"
              className="h-24 rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <Link className="w-full p-1 font-bold rounded text-blue bg-stone-300">
              Mega Blocks
            </Link>
          </div>
        </div>
        <div
          className="mt-2 shadow-xl card w-96 bg-base-100"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/FKDHmks/images-6.jpg"
              className="h-24 rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <Link className="w-full p-1 font-bold rounded text-blue bg-stone-300">
              UGLYDOllS
            </Link>
          </div>
        </div>
        <div
          className="mt-2 shadow-xl card w-96 bg-base-100"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/hLfDN8Y/images-5.jpg"
              className="h-24 rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <Link className="w-full p-1 font-bold rounded text-blue bg-stone-300">
              Toy Pro
            </Link>
          </div>
        </div>
        <div
          className="mt-2 shadow-xl card w-96 bg-base-100"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/2t4FbTF/images-4.jpg"
              className="h-24 rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <Link className="w-full p-1 font-bold rounded text-blue bg-stone-300">
              Rubiks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrand;
