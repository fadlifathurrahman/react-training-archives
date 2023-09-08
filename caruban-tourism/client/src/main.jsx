import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Place from "./pages/Place.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
import EditAccount from "./pages/EditAccount.jsx";
import Dish from "./pages/Dish.jsx";
import AllPlaces from "./pages/AllPlaces.jsx";
import AllDishes from "./pages/AllDishes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/auth/edit/:id",
        element: <EditAccount />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/places/all",
        element: <AllPlaces />,
      },
      {
        path: "/places/:id",
        element: <Place />,
      },
      {
        path: "/dishes/all",
        element: <AllDishes />,
      },
      {
        path: "/dishes/:id",
        element: <Dish />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
