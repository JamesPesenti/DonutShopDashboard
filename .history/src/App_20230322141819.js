import { Card, Descriptions, Divider, List, Button } from "antd"
import donuts from "../src/data/donuts"

function App() {
  return (
    <>
      <Card style={{ margin: 20 }} title={"Donut Shop"}>
        <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
          <Descriptions.Item label="Customer">
            James Pesenti
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
        <div>
          <h4>Total: $20.99</h4>
        </div>
        <Button />
      </Card>
    </>
  );
}

export default App;
