import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MyToysTableRow from "./MyToysTableRow";

import Swal from "sweetalert2";
import useTitle from "../../../Titles/useTitle";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("");
  useTitle("my toys");

  useEffect(() => {
    fetch(`https://toy-thriver-server.vercel.app/mytoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        let sortingData = [...data];
        if (sortingOrder === "ascending") {
          sortingData = sortingData.sort((a, b) => a.price - b.price);
        } else if (sortingOrder === "descending") {
          sortingData = sortingData.sort((a, b) => b.price - a.price);
        }
        setMyToys(sortingData);
      });
  }, [user, sortingOrder]);

  if (loading) {
    return <progress className="w-56 progress"></progress>;
  }

  const handleAscending = () => {
    setSortingOrder("ascending");
  };
  const handleDescending = () => {
    setSortingOrder("descending");
  };

  //delete button action
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you confirm delete, you won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-thriver-server.vercel.app/deleteToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deletedData) => {
            if (deletedData.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                const remain = myToys.filter((toys) => toys._id !== id);
                setMyToys(remain);
              });
            }
          });
      }
    });
  };

  return (
    <div className="mb-3">
      <div className="flex justify-end mb-2">
        <div className="dropdown dropdown-hover ">
          <label tabIndex={0} className="w-32 m-1 btn btn-primary">
            Sort by
          </label>
          <ul
            tabIndex={0}
            className="p-2 font-bold shadow dropdown-content menu bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={handleAscending}>Ascending</button>
            </li>
            <li>
              <button onClick={handleDescending}>Descending</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th> Email</th>
              <th>Sub Category</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th> Quantity</th>
              <th>Rating</th>
              <th>Description</th>
              <th className="mr-8">Update Action</th>
              <th className="mr-8">Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysTableRow
                toy={toy}
                key={toy._id}
                handleDelete={handleDelete}
              ></MyToysTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
