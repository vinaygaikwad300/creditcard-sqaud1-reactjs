// Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Users", path: "/admin/users" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Reports", path: "/admin/reports" },
  { name: "Settings", path: "/admin/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "22px" }}>Admin Panel</h2>

      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "block",
            padding: "12px 15px",
            marginBottom: "10px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#fff",
            backgroundColor:
              location.pathname === item.path ? "#334155" : "transparent",
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;