import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

const TeddyDetailsCard = ({ teddyDetail }) => {
  return (
    <div className="w-3/4 mx-auto mt-8 mb-4 space-y-2 shadow-xl card bg-base-100">
      <figure className="">
        <img src={teddyDetail?.img} className="w-full p-4 rounded-md h-96" />
      </figure>
      <div className=" card-body">
        <h4 className="">Toy Name: {teddyDetail?.name}</h4>
        <p className="">Seller Name: {teddyDetail?.sellerName}</p>
        <h2 className="">Seller email: {teddyDetail?.email}</h2>
        <p>Price: {teddyDetail?.price}</p>
        <div className="">
          <p>Rating</p>
          <Rating
            placeholderRating={teddyDetail?.rating}
            emptySymbol={<FaStarHalf className="text-yellow-400"></FaStarHalf>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
          />
        </div>

        <p>Quantity: {teddyDetail?.quantity}</p>
        <p>Description: {teddyDetail?.description}</p>
      </div>
    </div>
  );
};

export default TeddyDetailsCard;
