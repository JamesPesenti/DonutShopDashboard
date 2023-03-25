import OrderDetails from "./screens/OrderDetails";
import Orders from "../src/screens/Orders"
import OrderHistory from "../src/screens/OrderHistory"
import Menu from "../src/screens/Menu"
import Settings from "../src/screens/Settings"
import SideMenu from "../src/components/SideMenu"
import CreateMenuItem from "../src/components/CreateMenuItem"
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
            src="https://t4.ftcdn.net/jpg/05/55/29/13/360_F_555291384_Nei0LAgroqUgZEbfsin84FYK8msFHDmQ.jpg" />
          <SideMenu />
        </Sider>
       <Layout>
          <Content style={{backgroundColor: "white"}}>
            <Routes>
              <Route path="/" element={<Orders />} />
              <Route path="order/:id" element={<OrderDetails />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="menu/create" element={<CreateMenuItem />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
          <Footer style={{textAlign: "center"}}>
            Donut Shop Dashboard @2023
          </Footer>
       </Layout>
    </Layout>
    </>
  );
}

export default App;
