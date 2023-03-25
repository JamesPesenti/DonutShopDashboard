import { Card, Table, Tag } from "antd"
import orders from "../data/orders"

const Orders = () => {

    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "ACCEPTED") {
            return <Tag color={"green"}>{orderStatus}</Tag>
        }
        if (orderStatus === "PENDING") {
            return <Tag color={"yellow"}>{orderStatus}</Tag>
        }
        if (orderStatus === "DECLINED") {
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
                rowKey="orderID"
                onRow={(orderItem) => ({
                    onClick: () => console.log(orderItem)
                })}
            />
        </Card>
    </>
  )
}

export default Orders

