import { Card, Table, Tag, Button } from "antd"
import orders from "../data/orders"
import { useNavigate } from "react-router-dom"




const OrderHistory = () => {
  return (
    <>
         <Card title={"Orders"} style={{margin: 20}}>
            <Table 
                dataSource={orders}
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




    

 


