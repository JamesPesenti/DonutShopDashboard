import AppRoutes from "../src/components/AppRoutes"
import { Layout, Image } from "antd"
import SideMenu from "../src/components/SideMenu"

const { Sider, Content, Footer } = Layout

function App() {
  return (
    <>
      <Layout>
        <Sider style={{height: "100vh", backgroundColor: "#ED91AD"}}>
          <Image 
            preview={false}
            src="https://t4.ftcdn.net/jpg/05/55/29/13/360_F_555291384_Nei0LAgroqUgZEbfsin84FYK8msFHDmQ.jpg" />
          <SideMenu />
        </Sider>
       <Layout>
          <Content style={{backgroundColor: "white"}}>
            <AppRoutes />
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
