import orders from "../data/orders"

const Orders = () => {

    const tableColums = [
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
                columns={}
                renderItem={() }
            />
        </Card>
    </>
  )
}

export default Orders

