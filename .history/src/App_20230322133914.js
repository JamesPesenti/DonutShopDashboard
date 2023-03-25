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
        <List />
      </Card>
    </>
  );
}

export default App;
