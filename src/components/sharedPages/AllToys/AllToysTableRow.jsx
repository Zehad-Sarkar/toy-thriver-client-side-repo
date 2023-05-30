import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AllToysTableRow = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const handleMessage = () => {
    if (!user) {
      Swal.fire("You have to log in first to view details");
    }
  };

  return (
    <tr>
      <th>{toy?.sellerName}</th>
      <td>{toy?.toysName}</td>
      <td>{toy?.subCategory}</td>
      <td>{toy?.price}</td>
      <td>{toy?.quantity}</td>
      <td>
        <Link
          onClick={handleMessage}
          to={`/alltoys/${toy._id}`}
          className="btn-outline btn btn-primary"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysTableRow;
