import { Card, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {
  return (
    <>
        
        <Descriptions>
            <div>{donuts.flavor}</div>
            <div>{donuts.price}</div>
            <div>{donuts.descriptiion}</div>
            </Descriptions>
       
    </>
  )
}

export default Menu
