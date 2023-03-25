import { Form, Input, Button, Card, InputNumber } from "antd"

const { TextArea } = Input

const CreateMenuItem = () => {
    return (
        <>
          <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item label="Donut" required style={{padding: 10}}>
                    <Input style={{width: 120}} placeholder="Enter flavor" />
                </Form.Item>

                <Form.Item label="Price" required style={{padding: 10}} >
                    <Input style={{width: 110}} placeholder="Enter price"/>
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