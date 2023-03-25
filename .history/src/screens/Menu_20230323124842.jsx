import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = (donuts) => {
  return (
    <>
        <Card>
            <p>{donuts.flavor}</p>
            <Descriptions>
            <div>{donuts.flavor}</div>
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
            </Descriptions>
        </Card>
       
    </>
  )
}

export default Menu
