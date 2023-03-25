import { Card, Table, Tag } from "antd"
import orders from "../data/orders"

const Orders = () => {

    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "Accepted") {
            return <Tag color={"green"}>{orderStatus}</Tag>
        }
        if (orderStatus === "Pending") {
            return <Tag color={"yellow"}>{orderStatus}</Tag>
        }
        if (orderStatus === "Declined") {
            return <Tag color={"red"}>{orderStatus}</Tag>
        }
    }

    const tableColumns = [
        {
            title: "Order ID",
            dataIndex: "orderID",
            key: "orderID"
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (total) => `$ ${total}`
        },
        {
            title: "Order Status",
            dataIndex: "orderStatus",
            key: "orderStatus",
            render: renderOrderStatus
        },
    ]

  return (
    <>
        <Card title={"Orders"} style={{margin: 20}}>
            <Table 
                dataSource={orders}
                columns={tableColumns}
            />
        </Card>
    </>
  )
}

export default Orders

