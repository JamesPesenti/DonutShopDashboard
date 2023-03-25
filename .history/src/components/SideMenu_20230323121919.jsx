import { Menu } from "antd"

const SideMenu = () => {

    const menuItems = [
        {
            key: "/",
            label: "Orders" 
        },
        {
            key: "/Menu",
            label: "Menu" 
        },
        {
            key: "/Settings",
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
