// AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/sidebar";

function AdminLayout() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sidebar + Content */}
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f8fafc",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;