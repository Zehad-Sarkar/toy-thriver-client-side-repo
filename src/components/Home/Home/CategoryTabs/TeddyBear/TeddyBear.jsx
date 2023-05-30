import React, { useEffect, useState } from "react";
import TeddyCard from "./TeddyCard";

const TeddyBear = () => {
  const [teddyBears, setTeddyBears] = useState([]);
  useEffect(() => {
    fetch("https://toy-thriver-server.vercel.app/teddyBear")
      .then((res) => res.json())
      .then((data) => setTeddyBears(data));
  }, []);
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      {teddyBears.map((teddyBear) => (
        <TeddyCard key={teddyBear._id} teddyBear={teddyBear}></TeddyCard>
      ))}
    </div>
  );
};

export default TeddyBear;
