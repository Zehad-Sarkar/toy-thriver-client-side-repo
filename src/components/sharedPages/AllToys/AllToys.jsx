import React, { useEffect, useState } from "react";
import AllToysTableRow from "./AllToysTableRow";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Titles/useTitle";

const AllToys = () => {
  // const loadAll = useLoaderData();
  const [loadAllToys, setLoadAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");
  useTitle("all toys");

  useEffect(() => {
    fetch(`https://toy-thriver-server.vercel.app/alltoys?text=${text}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadAllToys(data);
      });
  }, [text]);

  //seacrh action
  const handleSearch = (e) => {
    setText(searchText);
  };

  return (
    <div className="mt-8 mb-4 overflow-x-auto">
      <div className="w-1/3 mx-auto mt-3 mb-4 form-control">
        <div className="input-group">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search…"
            className="input input-bordered w-80"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Qty</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loadAllToys.map((toy) => (
            <AllToysTableRow key={toy._id} toy={toy}></AllToysTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
