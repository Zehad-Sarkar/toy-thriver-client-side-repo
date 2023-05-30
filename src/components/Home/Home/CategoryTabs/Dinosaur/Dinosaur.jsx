import React, { useEffect, useState } from "react";
import DinosaurCard from "./DinosaurCard";

const Dinosaur = () => {
  const [dinosaurs, setDinosaurs] = useState([]);
  useEffect(() => {
    fetch("https://toy-thriver-server.vercel.app/dinosaur")
      .then((res) => res.json())
      .then((data) => setDinosaurs(data));
  }, []);
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      {dinosaurs.map((dinosaur) => (
        <DinosaurCard key={dinosaur._id} dinosaur={dinosaur}></DinosaurCard>
      ))}
    </div>
  );
};

export default Dinosaur;
