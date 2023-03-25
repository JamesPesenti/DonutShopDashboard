import OrderDetails from "../../src/screens/OrderDetails";
import Orders from "../../src/screens/Orders"
import OrderHistory from "../../src/screens/OrderHistory"
import Menu from "../../src/screens/Menu"
import Settings from "../../src/screens/Settings"
import CreateMenuItem from "../components/CreateMenuItem"

import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <>
          <Routes>
              <Route path="/" element={<Orders />} />
              <Route path="order/:id" element={<OrderDetails />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="menu/create" element={<CreateMenuItem />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
        </>
    )
}

export default AppRoutes