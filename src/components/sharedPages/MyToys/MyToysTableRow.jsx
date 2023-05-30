import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysTableRow = ({ toy, handleDelete }) => {
  const {
    sellerName,
    _id,
    subCategory,
    toysName,
    photoUrl,
    price,
    rating,
    description,
    email,
    quantity,
  } = toy;

  return (
    <tr>
      <th>
        <img src={photoUrl} alt="" />
      </th>
      <th>{sellerName}</th>
      <td>{email}</td>
      <td>{subCategory}</td>
      <td>{toysName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{description}</td>
      <td>
        <Link to={`/mytoys/${_id}`}>
          <button className="text-sm btn-outline btn btn-primary">
            <FaEdit></FaEdit>
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="text-sm font-bold btn-circle btn-outline btn btn-primary"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default MyToysTableRow;
