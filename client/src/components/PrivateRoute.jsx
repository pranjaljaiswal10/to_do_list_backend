import { useContext } from "react";
import { UserContext } from "../utils/usercontext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { state } = useContext(UserContext);
  const location = useLocation();
  if (!state?.userData?.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
