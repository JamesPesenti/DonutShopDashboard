import { Form, Input, Card, Button } from "antd"

const Settings = () => {
  return (
    <>
       <Card title="Sign In">
        <Form>
          <Form.Item>
            <Input placeholder="Email"/>
            <Input  placeholder="Password"/>
          </Form.Item>
          
        </Form>
       </Card>
    </>
  )
}

export default Settings
