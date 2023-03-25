import { Card, Descriptions, Divider, List, Button } from "antd"
import donuts from "../data/donuts"
import { useParams } from "react-router-dom"

const OrderDetails = () => {

    const {id} = useParams()

  return (
    <>
    <Card style={{ margin: 20 }} title={`Order ${id}`}>
      <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
        <Descriptions.Item label="Customer">
          John Smith
        </Descriptions.Item>
        <Descriptions.Item label="Order Date">
          02/21/23
        </Descriptions.Item>
        <Descriptions.Item label="Order Total">
          $26.59
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List 
        dataSource={donuts} 
        renderItem={(donutItem) => (
          <List.Item>
            <div style={{fontWeight: "bold"}}>{donutItem.flavor}   &#8226; {donutItem.quantity}</div>
            <div>${donutItem.price}</div>
          </List.Item>
        )} 
      />
      <Divider />
      <div style={styles.totalContainer}>
        <h4>Total:</h4>
        <h4 style={styles.price}>$22.99</h4>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button style={styles.button} block type="danger" size="large">
          Decline Order
        </Button>
        <Button style={{backgroundColor: "pink", color: "white"}} block size="large">
          Accept Order
        </Button>
      </div>
    </Card>
  </>
  )
}

export default OrderDetails

const styles = {
    totalContainer: {
      display: "flex",
      flexDirection: "row",
    },
    price: {
      marginLeft: "auto",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      marginHorizontal: 50,
      paddingBottom: 30
    },
    button: {
      marginRight: 20,
      marginLeft: 20
    }
  }
  