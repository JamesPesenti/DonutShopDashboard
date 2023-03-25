import OrderDetails from "./screens/OrderDetails";
import Orders from "../src/screens/Orders"
import { Layout, Image } from "antd"
import { Routes, Route } from "react-router-dom"

const { Sider, Content, Footer } = Layout

function App() {
  return (
    <>
    <Layout>
       <Sider style={{height: "10vh", backgroundColor: "pink"}}>
        <Image />
       </Sider>
    </Layout>
      {/* <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="order/:id" element={<OrderDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
