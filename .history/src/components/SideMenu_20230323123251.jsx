import { Menu } from "antd"

const SideMenu = () => {

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
          style={{backgroundColor: "pink", color: "white"}}
        />
    </>
  )
}

export default SideMenu
