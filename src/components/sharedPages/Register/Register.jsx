import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../Titles/useTitle";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useTitle("register");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        const userInfo = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateUser(userInfo).then(() => {
          console.log(userInfo);
        });
        navigate("/");
        Swal.fire("Registration Successfull");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-4 form-control">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p className="text-black">
              Allready have an account?{" "}
              <Link to="/login" className="text-blue-400">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
