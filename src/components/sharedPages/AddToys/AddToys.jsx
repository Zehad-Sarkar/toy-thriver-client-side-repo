import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../Titles/useTitle";

const AddToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useTitle("add toys");

  useEffect(() => {
    if (user) {
      setName(user?.displayName || "");
      setEmail(user?.email || "");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://toy-thriver-server.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((toyData) => {
        if (toyData.insertedId) {
          Swal.fire("Toys Added Successfully");
        }
      });
  };

  if (loading) {
    return <progress className="w-56 progress"></progress>;
  }

  return (
    <>
      <h1 className="mt-8 text-5xl font-extrabold text-center text-slate-400">
        Add Your Toys
      </h1>
      <form
        className="w-1/2 p-4 m-4 mx-auto font-medium rounded-md bg-slate-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-1">
          <label htmlFor="">Seller Name</label>
          <input
            type="text"
            className="p-2 border rounded"
            value={user?.displayName || ""}
            {...register("sellerName")}
            readOnly
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Seller Email</label>
          <input
            type="email"
            className="p-2 border rounded"
            value={user?.email || ''}
            {...register("email")}
            readOnly
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Toy Name</label>
          <input
            type="text"
            placeholder="toy name"
            className="p-2 border rounded"
            {...register("toysName")}
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Photo Url</label>
          <input
            type="url"
            className="p-2 border rounded"
            placeholder="photo url"
            {...register("photoUrl")}
          />
        </div>

        <div className="grid gap-1 font-medium">
          <label htmlFor="">Sub Category</label>

          <select {...register("subCategory")}>
            <option value="Teddy Bear">Teddy Bear</option>
            <option value="Dinosaur">Dinosaur</option>
            <option value="Cat">Cat</option>
            <option value="Unicorn">Unicorn</option>
            <option value="Cows">Cows</option>
            <option value="Dogs">Dogs</option>
            <option value="Horse">Horse</option>
          </select>
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Price</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="price $"
            {...register("price")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Available Quantity</label>
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="type quantity"
            {...register("quantity")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Ratings</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="give rating"
            {...register("rating")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Description</label>
          <textarea
            className="p-2 border rounded"
            placeholder="write description"
            {...register("description")}
          />
        </div>

        <input
          type="submit"
          value="Add Toy"
          className="w-32 mt-2 text-2xl font-bold btn btn-primary"
        />
      </form>
    </>
  );
};

export default AddToys;
