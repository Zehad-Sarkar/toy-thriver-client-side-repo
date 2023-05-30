import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";

const Cat = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("https://toy-thriver-server.vercel.app/cat")
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      {cats.map((cat) => (
        <CatCard key={cat._id} cat={cat}></CatCard>
      ))}
    </div>
  );
};

export default Cat;
