import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function AdminLayout() {
  return (
    <div className="admin-wrapper">
      <p>sidebar will come</p>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout