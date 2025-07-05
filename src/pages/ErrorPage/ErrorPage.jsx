import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser } from "../../redux/features/auth/authSlice";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  if (pathname.length > 100) {
    const path = pathname.split("/");
    const token = path[1];
    localStorage.setItem("token", token);
    dispatch(setUser({ token }));
  }

  return <Navigate to="/"></Navigate>;
};

export default ErrorPage;
