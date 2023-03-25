import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        <Card title={"Menu"}>
            <Descriptions title={"www"}>
            {donuts.flavor}
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
            </Descriptions>
        </Card>
    </>
  )
}

export default Menu
