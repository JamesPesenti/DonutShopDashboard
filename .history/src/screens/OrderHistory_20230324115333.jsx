import { Card, Table, Tag, Button } from "antd"
import orderHistory from "../data/orderHistory"
import { useNavigate } from "react-router-dom"


    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "COMPLETED") {
            return <Tag color={"green"}>{orderStatus}</Tag>
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

const OrderHistory = () => {

  const navigate = useNavigate()

  return (
    <>
      <Card title={"Order History"} style={{margin: 20}}>
            <Table 
                dataSource={orderHistory}
                columns={tableColumns}
                rowKey="orderID"
                onRow={(orderItem) => ({
                    onClick: () => navigate(`order/${orderItem.orderID}`)
                })}
            />
        </Card>
    </>
  )
}

export default OrderHistory




    

 


