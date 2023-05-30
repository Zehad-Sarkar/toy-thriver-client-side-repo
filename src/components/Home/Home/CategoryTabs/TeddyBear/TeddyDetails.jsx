import React from "react";

import { useLoaderData } from "react-router-dom";
import TeddyDetailsCard from "./TeddyDetailsCard";

const TeddyDetails = () => {
  const teddyLoader = useLoaderData();

  return (
    <div>
      {teddyLoader.map((teddyDetail) => (
        <TeddyDetailsCard
          key={teddyDetail._id}
          teddyDetail={teddyDetail}
        ></TeddyDetailsCard>
      ))}
    </div>
  );
};

export default TeddyDetails;
