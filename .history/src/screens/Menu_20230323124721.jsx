import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        <Card>
            <p>Menu</p>
            <List>
            <div>{donuts.flavor}</div>
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
           </List>
        </Card>
       
    </>
  )
}

export default Menu
