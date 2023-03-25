import OrderDetails from "./screens/OrderDetails";
import Orders from "../src/screens/Orders"
import { Card, Table, Tag } from "antd"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/order:id" element={<OrderDetails />} />
      </Routes>
    </>
  );
}

export default App;
