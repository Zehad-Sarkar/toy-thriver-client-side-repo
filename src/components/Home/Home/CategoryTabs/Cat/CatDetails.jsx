import React from "react";
import { useLoaderData } from "react-router-dom";
import CatDetailsCard from "./CatDetailsCard";

const CatDetails = () => {
  const loadCatDetails = useLoaderData();

  return (
    <div>
      {loadCatDetails.map((loadCatDetail) => (
        <CatDetailsCard
          key={loadCatDetail._id}
          loadCatDetail={loadCatDetail}
        ></CatDetailsCard>
      ))}
    </div>
  );
};

export default CatDetails;
