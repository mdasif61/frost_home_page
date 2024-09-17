import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./allComponent/Home/Home";
import Download from "./allComponent/sideBarComponents/Download";
import Community from "./allComponent/sideBarComponents/Community";
import Library from "./allComponent/library/Library";
import Categories from "./allComponent/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/categories",
        element:<Categories/>
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
