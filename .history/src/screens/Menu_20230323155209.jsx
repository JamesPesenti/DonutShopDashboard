import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        <Card title={"Menu"} style={{ margin: 20 }}>
            <Descriptions >
            <p>{donuts.flavor}</p>
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
            </Descriptions>
        </Card>
    </>
  )
}

export default Menu
