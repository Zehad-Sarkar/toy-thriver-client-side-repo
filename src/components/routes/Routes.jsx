import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Home/Home/Home";
import Login from "../sharedPages/Login/Login";
import Register from "../sharedPages/Register/Register";
import Blog from "../sharedPages/Blog/Blog";
import AllToys from "../sharedPages/AllToys/AllToys";
import AddToys from "../sharedPages/AddToys/AddToys";
import MyToys from "../sharedPages/MyToys/MyToys";
import Details from "../sharedPages/AllToys/Details";
import ProtectedPages from "./ProtectedPages";
import ErrorPage from "../sharedPages/ErrorPage/ErrorPage";
import UpdatePage from "../sharedPages/MyToys/UpdatePage";
import TeddyDetails from "../Home/Home/CategoryTabs/TeddyBear/TeddyDetails";
import DinosaurDetails from "../Home/Home/CategoryTabs/Dinosaur/DinosaurDetails";
import CatDetails from "../Home/Home/CategoryTabs/Cat/CatDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teddyDetails/:id",
        element: (
          <ProtectedPages>
            <TeddyDetails></TeddyDetails>
          </ProtectedPages>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-thriver-server.vercel.app/teddyDetails/${params.id}`
          ),
      },

      {
        path: "/dinosaurDetails/:id",
        element: (
          <ProtectedPages>
            <DinosaurDetails></DinosaurDetails>
          </ProtectedPages>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-thriver-server.vercel.app/dinosaurDetails/${params.id}`
          ),
      },
      {
        path: "/catDetails/:id",
        element: (
          <ProtectedPages>
            {" "}
            <CatDetails></CatDetails>
          </ProtectedPages>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-thriver-server.vercel.app/catDetails/${params.id}`
          ),
      },

      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-thriver-server.vercel.app/alltoys"),
      },

      {
        path: "/alltoys/:id",
        element: (
          <ProtectedPages>
            <Details></Details>
          </ProtectedPages>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-thriver-server.vercel.app/alltoys/${params.id}`),
      },
      {
        path: "/addtoys",
        element: (
          <ProtectedPages>
            <AddToys></AddToys>
          </ProtectedPages>
        ),
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/mytoys/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`https://toy-thriver-server.vercel.app/mytoys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
