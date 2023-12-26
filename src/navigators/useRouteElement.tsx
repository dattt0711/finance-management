import { useRoutes } from "react-router-dom";
import { AdminLayout } from "../../src/layouts";

export default function useRouteElement() {
  const useRouteElement = useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <>
          <AdminLayout />
        </>
      ),
    },
  ]);
  return useRouteElement;
}
