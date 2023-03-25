import { Card, Table, Button  } from "antd"
import donuts from "../data/donuts"

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
            dataIndex: "action",
            key: "price",
            render: () => <Button type={"danger"}></Button>
        },
    ]

  return (
    <>
        <Card title={"Menu"} style={{ margin: 20 }}>
            <Table dataSource={donuts} columns={tableColumns} rowKey="id"/>
        </Card>
    </>
  )
}

export default Menu
