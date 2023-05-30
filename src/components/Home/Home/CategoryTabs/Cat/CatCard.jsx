import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";
import Swal from "sweetalert2";

const CatCard = ({ cat }) => {
  const { loading, user } = useContext(AuthContext);

  const handleMessage = () => {
    if (!user) {
      Swal.fire("You have to log in first to view details");
    }
  };
  if (loading) {
    return <progress className="w-56 progress"></progress>;
  }

  return (
    <div
      className="space-y-2 bg-gray-400 card md:w-96 glass"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <figure>
        <img className="w-full p-3 roundrounded-md" src={cat?.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {cat?.name}</h2>
        <p>price: {cat?.price}</p>
        <p>rating:{cat?.rating}</p>
        <div className="justify-end card-actions">
          <Link
            to={`/catDetails/${cat._id}`}
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

export default CatCard;
