import { Home, NotFound } from "pages";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

interface Page {
  path: string;
  element: JSX.Element;
}

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
] satisfies Page[];

const Routes = () => {
  return (
    <ReactRouterRoutes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </ReactRouterRoutes>
  );
};

export default Routes;
