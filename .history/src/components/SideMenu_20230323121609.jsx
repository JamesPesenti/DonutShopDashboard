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

        />
    </>
  )
}

export default SideMenu
