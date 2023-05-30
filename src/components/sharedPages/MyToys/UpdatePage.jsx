import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const loadData = useLoaderData();

  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user?.displayName || "");
      setEmail(user?.email || "");
    }
  }, [user]);
  const {
    register,
    handleSubmit,
    defaultValue,
    watch,
    formState: { errors },
  } = useForm();

  //update items action
  const onSubmit = (data) => {
    Swal.fire({
      title: "want to update it?",
      text: "If you confirm update ,You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-thriver-server.vercel.app/updateToys/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((updateData) => {
            if (updateData.modifiedCount > 0) {
              Swal.fire("Updated!", "Your file has been updated.", "success");
            }
          });
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
            // disabled
            readOnly
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Seller Email</label>
          <input
            type="email"
            className="p-2 border rounded"
            value={user?.email || ""}
            {...register("email")}
            readOnly
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="">Price</label>
          <input
            type="text"
            className="p-2 border rounded"
            defaultValue={loadData?.[0]?.price}
            {...register("price")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Available Quantity</label>
          <input
            type="number"
            className="p-2 border rounded"
            defaultValue={loadData?.[0]?.quantity}
            {...register("quantity")}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Description</label>
          <textarea
            className="p-2 border rounded"
            defaultValue={loadData?.[0]?.description}
            {...register("description")}
          />
        </div>

        <input
          type="submit"
          value="Update"
          className="w-32 mt-2 text-2xl font-bold btn btn-primary"
        />
      </form>
    </>
  );
};

export default UpdatePage;
