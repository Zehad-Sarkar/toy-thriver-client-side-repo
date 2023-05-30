import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const loadDetails = useLoaderData();

  return (
    <div className="">
      {loadDetails.map((singleDetails) => (
        <DetailsCard
          singleDetails={singleDetails}
          key={singleDetails._id}
        ></DetailsCard>
      ))}
    </div>
  );
};

export default Details;
