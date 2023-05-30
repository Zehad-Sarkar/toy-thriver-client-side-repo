import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";
import Swal from "sweetalert2";

const TeddyCard = ({ teddyBear }) => {
  const { user, loading } = useContext(AuthContext);

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
          src={teddyBear?.img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {teddyBear?.name}</h2>
        <p>price: {teddyBear?.price}</p>
        <p>rating:{teddyBear?.rating}</p>
        <div className="justify-end card-actions">
          <Link
            to={`/teddyDetails/${teddyBear._id}`}
            onClick={handleMessage}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeddyCard;
