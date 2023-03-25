import OrderDetails from "./screens/OrderDetails";
import Orders from "../src/screens/Orders"
import { Layout, Image } from "antd"
import { Routes, Route } from "react-router-dom"

const { Sider, Content, Footer } = Layout

function App() {
  return (
    <>
    <Layout>
       <Sider style={{height: "100vh", backgroundColor: "pink"}}>
        <Image 
          preview={false}
          src="https://t4.ftcdn.net/jpg/05/55/29/13/360_F_555291384_Nei0LAgroqUgZEbfsin84FYK8msFHDmQ.jpg"/>
       </Sider>
       <Layout>
          <Content>
            <p>Orders</p>
            <p>Settings</p>
            <p>Sign In</p>
          </Content>
          <Footer>
            Donut Shop @2023
          </Footer>
       </Layout>
    </Layout>
      {/* <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="order/:id" element={<OrderDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
