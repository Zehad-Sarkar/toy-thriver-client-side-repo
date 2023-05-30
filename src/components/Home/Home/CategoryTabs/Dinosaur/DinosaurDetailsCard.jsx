import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

const DinosaurDetailsCard = ({ dinosaurDetail }) => {
  return (
    <div className="w-3/4 mx-auto mt-8 mb-4 space-y-2 shadow-xl card bg-base-100">
      <figure className="">
        <img src={dinosaurDetail?.img} className="w-full p-4 rounded-md h-96" />
      </figure>
      <div className=" card-body">
        <h4 className="">Toy Name: {dinosaurDetail?.name}</h4>
        <p className="">Seller Name: {dinosaurDetail?.sellerName}</p>
        <h2 className="">Seller email: {dinosaurDetail?.email}</h2>
        <p>Price: {dinosaurDetail?.price}</p>
        <div className="">
          <p>Rating</p>
          <Rating
            placeholderRating={dinosaurDetail?.rating}
            emptySymbol={<FaStarHalf className="text-yellow-400"></FaStarHalf>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
          />
        </div>

        <p>Quantity: {dinosaurDetail?.quantity}</p>
        <p>Description: {dinosaurDetail?.description}</p>
      </div>
    </div>
  );
};

export default DinosaurDetailsCard;
