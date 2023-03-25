import { Card, Table, Descriptions, Divider, List } from "antd"
import donuts from "../data/donuts"

const Menu = () => {

    const tableColumns = [
        {
            title: donuts.flavor
        },
        {},
    ]

  return (
    <>
        <Card title={"Menu"} style={{ margin: 20 }}>
            <Table dataSource={donuts} columns={tableColumns} rowKey="id"/>
        </Card>
    </>
  )
}

export default Menu
