import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import { Home } from "./views";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<Navigate replace to="/not-found-cover" />} /> */}
    </ReactRoutes>
  );
};

export default Routes;
