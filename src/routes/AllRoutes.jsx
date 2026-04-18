import { Routes, Route } from "react-router-dom";
import {CustomerForm} from '../pages/user/customerForm/CustomerForm'
import PublicLayout from "../layout/publicLayout";
//import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/adminLayout";

// import Home from "../pages/public/Home";
// import About from "../pages/public/About";

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

import Dashboard from "../pages/admin/dashboard/dashboard";
//import Users from "../pages/admin/Users";

export const AllRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<CustomerForm />} />
      </Route>

      {/* Auth Routes */}
      {/* <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route> */}

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};