import { Menu } from "antd"

const SideMenu = () => {

    const menuItems = [
        {
            key: "/",
            label: "Orders" 
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
          style={{backgroundColor: "pink"}}
        />
    </>
  )
}

export default SideMenu
