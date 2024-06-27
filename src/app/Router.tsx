import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseRoute from "./routes/Browse";

const AppRouter = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          Component: BrowseRoute,
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
