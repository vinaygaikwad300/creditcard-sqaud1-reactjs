import { Routes, Route } from "react-router-dom"
import { CustomerForm } from "../pages/customerForm/CustomerForm"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CustomerForm />} />
    </Routes>
  )
}
