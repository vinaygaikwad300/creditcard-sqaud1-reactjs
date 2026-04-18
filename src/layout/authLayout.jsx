import Login from "../pages/auth/Login";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Login/>
      <Outlet />
    </>
  );
}
export default AuthLayout