import { Form, Input, Button, Card, InputNumber } from "antd"

const { TextArea } = Input

const CreateMenuItem = () => {
    return (
        <>
          <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item
                    required
                    style={{padding: 20}} 
                    label="Donut Flavor"
                >
                    <Input 
                        style={{width: 50}}
                        placeholder="Enter flavor"/>
                </Form.Item>
                <Form.Item label="Price" required>
                    <Input placeholder="Enter price"/>
                </Form.Item>
                <Form.Item label="Description" required>
                    <TextArea placeholder="Enter donut description"/>
                </Form.Item>
            </Form>
          </Card>
        </>
    )
}

export default CreateMenuItem