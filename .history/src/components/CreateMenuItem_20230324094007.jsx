import { Form, Input, Button, Card, InputNumber } from "antd"

const CreateMenuItem = () => {
    return (
        <>
          <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item label="Donut Flavor" required>
                    <Input placeholder="Enter falvor"/>
                </Form.Item>
            </Form>
          </Card>
        </>
    )
}

export default CreateMenuItem