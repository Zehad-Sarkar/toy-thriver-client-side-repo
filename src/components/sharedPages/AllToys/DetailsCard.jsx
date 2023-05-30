import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

const DetailsCard = ({ singleDetails }) => {
  return (
    <div className="w-3/4 mx-auto mt-8 mb-4 shadow-xl card bg-base-100">
      <figure className="">
        <img
          src={singleDetails?.photoUrl}
          className="w-full p-4 rounded-md h-96"
        />
      </figure>
      <div className=" card-body">
        <h4 className="">Toy Name: {singleDetails?.toysName}</h4>
        <p className="">Seller Name: {singleDetails?.sellerName}</p>
        <h2 className="">Seller email: {singleDetails?.email}</h2>
        <p>Price: {singleDetails?.price}</p>
        <div className="">
          <p>Rating</p>
          <Rating
            placeholderRating={singleDetails?.rating}
            emptySymbol={<FaStarHalf className="text-yellow-400"></FaStarHalf>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
          />
        </div>
        <p>Quantity: {singleDetails?.quantity}</p>
        <p>Description: {singleDetails?.description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
