import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DinosaurDetailsCard from "./DinosaurDetailsCard";

const DinosaurDetails = () => {
  const loadDinosaurDetails = useLoaderData();

  return (
    <div>
      {loadDinosaurDetails.map((dinosaurDetail) => (
        <DinosaurDetailsCard
          key={dinosaurDetail._id}
          dinosaurDetail={dinosaurDetail}
        ></DinosaurDetailsCard>
      ))}
    </div>
  );
};

export default DinosaurDetails;
