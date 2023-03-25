import orders from "../data/orders"

const Orders = () => {

    const tableColumns = [
        {
            title: "Order ID",
            dataIndex: "orderID",
            key: "orderID"

        },
    ]

  return (
    <>
        <Card title={"Orders"} style={{margin: 20}}>
            <Table 
                dataSource={orders}
                columns={tableColumns}
            ]
            />
        </Card>
    </>
  )
}

export default Orders

