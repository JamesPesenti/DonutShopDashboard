import { Form, Input, Button, Card, InputNumber } from "antd"

const CreateMenuItem = () => {
    return (
        <>
          <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item label="Donut Flavor" required>
                    <Input placeholder="Enter flavor"/>
                </Form.Item>
                <Form.Item label="Price" required>
                    <Input placeholder="Enter price"/>
                </Form.Item>
                <Form.Item label="Description" required>
                    <Input placeholder="Enter donut description"/>
                </Form.Item>
            </Form>
          </Card>
        </>
    )
}

export default CreateMenuItem