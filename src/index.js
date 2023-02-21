import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects";
import Photos from "./components/Photos.js";
import AirBnB from "./components/Projects/AirBnB.js";
import Google from "./components/Projects/Google.js";
import MagiKards from "./components/Projects/MagiKards.js";
import Claudia from "./components/Projects/Claudia.js";
import Bookmarker from "./components/Projects/Bookmarker.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Photos",
    element: <Photos />,
  },
  {
    path: "/Claudia",
    element: <Claudia />,
  },
  {
    path: "/Google",
    element: <Google />,
  },
  {
    path: "/MagiKards",
    element: <MagiKards />,
  },
  {
    path: "/AirBnB",
    element: <AirBnB />,
  },
  {
    path: "/Bookmarker",
    element: <Bookmarker />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
