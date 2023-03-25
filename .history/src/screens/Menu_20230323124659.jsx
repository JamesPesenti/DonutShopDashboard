import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        <Card>
            <p>Menu</p>
        </Card>
      
           <List>
            <div>{donuts.flavor}</div>
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
           </List>
       
    </>
  )
}

export default Menu
