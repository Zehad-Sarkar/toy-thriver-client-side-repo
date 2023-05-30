import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";

const DinosaurCard = ({ dinosaur }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <progress className="w-56 progress"></progress>;
  }
  const handleMessage = () => {
    if (!user) {
      Swal.fire("You have to log in first to view details");
    }
  };

  return (
    <div
      className="space-y-2 bg-gray-400 card md:w-96 glass"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <figure>
        <img
          className="w-full p-3 h-80 roundrounded-md"
          src={dinosaur?.img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {dinosaur?.name}</h2>
        <p>price: {dinosaur?.price}</p>
        <p>rating:{dinosaur?.rating}</p>
        <div className="justify-end card-actions">
          <Link
            to={`/dinosaurDetails/${dinosaur._id}`}
            className="btn btn-primary"
            onClick={handleMessage}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DinosaurCard;
