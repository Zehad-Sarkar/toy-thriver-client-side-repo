import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto mt-4">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
);
