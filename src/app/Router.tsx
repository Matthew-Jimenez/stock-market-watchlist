import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Browse from "./routes/Browse";

const AppRouter = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          Component: Browse,
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
