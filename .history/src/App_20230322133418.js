import { Card, Descriptions, Divider, List, Button } from "antd"
import donuts from "../src/data/donuts"

function App() {
  return (
    <>
      <Card style={{ margin: 20 }} title={"Donut Title"}>
        <Descriptions>
          <Descriptions.Item label="Customer">
            James Pesenti
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
}

export default App;
