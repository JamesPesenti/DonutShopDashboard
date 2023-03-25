import { Menu } from "antd"
import { useNavigate } from "react-router-dom"


const SideMenu = () => {

    const navigate = useNavigate()

    const menuItems = [
        {
            key: "/",
            label: "Orders" 
        },
        {
            key: "menu",
            label: "Menu" 
        },{
            key: "order-history",
            label: "Order History" 
        },
        {
            key: "settings",
            label: "Settings" 
        },
    ]


  return (
    <>
        <Menu 
          items={menuItems}
          onClick={(menuItem) => navigate(menuItem.key)}
          style={{backgroundColor: "#ED91AD", color: "white"}}
        />
    </>
  )
}

export default SideMenu
