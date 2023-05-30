import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../Titles/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { googleSignIn, userSignIn, resetpassword } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("login");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    userSignIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        //login success message
        Swal.fire("Login Successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reset password event handler
  const handleResetPassword = (event) => {
    resetpassword(emailRef.current.value)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // google sign in handler
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        navigate(from, { replace: true });
        Swal.fire("Login Successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm text-center shadow-2xl card bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <button onClick={handleResetPassword} className=" btn-link">
                  Forgot your password ?
                </button>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-black">
              Dont have an account ?
              <Link className="text-blue-400" to="/register">
                please register
              </Link>
            </p>
          </form>
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 dark:focus:ring-[#4285F4]/55"
          >
            <span className="flex items-center justify-center ">
              <FaGoogle className="mr-2"></FaGoogle> Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

// inline-flex items-center
