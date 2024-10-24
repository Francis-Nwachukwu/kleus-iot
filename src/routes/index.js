import { Outlet, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routePaths";
// import { useSelector } from "react-redux";

const PrivateRoute = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  // if (isAuthenticated) {
  //   return <Outlet />;
  // }
  // return <Navigate to="/" replace />;
  return <Outlet />;
};

const Routing = () => (
  <Routes>
    {privateRoutes.map((route, index) => {
      return (
        <Route key={`${index}-xxx`} element={<PrivateRoute />}>
          <Route
            key={Math.random()}
            path={route.path}
            element={route.element}
          />
        </Route>
      );
    })}
    {publicRoutes.map((publicRoute) => {
      return (
        <Route
          key={Math.random()}
          path={publicRoute.path}
          element={publicRoute.element}
        />
      );
    })}
  </Routes>
);

export default Routing;
