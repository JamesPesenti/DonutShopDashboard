import { Card, Table, Button  } from "antd"
import donuts from "../data/donuts"
import { Link } from "react-router-dom"


const Menu = () => {

    const tableColumns = [
        {
            title: "Menu Items",
            dataIndex: "flavor",
            key: "flavor"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price}`
        },
        {
            title: "Quantity Remaining",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Action",
            key: "price",
            render: () => <Button danger>Remove</Button>
        },
    ]

    const renderNewItemButton = () => (
        <Link to={"create"}>
            Add New Item
        </Link>
    )

  return (
    <>
        <Card title={"Menu"} style={{ margin: 20 }} extra={renderNewItemButton()}>
            <Table dataSource={donuts} columns={tableColumns} rowKey="id"/>
        </Card>
    </>
  )
}

export default Menu
