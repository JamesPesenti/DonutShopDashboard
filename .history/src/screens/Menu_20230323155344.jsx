import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        <Card title={"Menu"} style={{ margin: 20 }}>
           <span>{donuts.flavor}</span>
        </Card>
    </>
  )
}

export default Menu
