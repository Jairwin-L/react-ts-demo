import React, { useRef, useState } from 'react'
import { Table, Space, Divider } from 'antd';
import { ColumnsType } from 'antd/es/table';
interface ListItem {
  id: string,
  name: string,
  age: number,
  address: string,
  tags: string[],
}
export default (): JSX.Element => {
  const [id, setId] = useState<string>('')
  const [editId, setEditId] = useState<string>('')
  const editIdRef = useRef<string>(editId)
  const editIdRefCurrent = editIdRef.current
  console.log(`editIdRefCurrent==========>：`, editIdRefCurrent);
  const onDel = (item: any) => {
    console.log(`item==========>：`, item);
    setId(item.id)
    console.log(`useState的id：第一次点击不能拿到Id==========>：`, id);
  }
  const onEdit = (item: ListItem) => {
    console.log(`item==========>：`, item);
    setEditId(item.id)
    editIdRef.current = item.id
    console.log(`useState的editId==========>：`, editId);
    console.log(`editIdRefCurrent：第一次点击能拿到Id==========>：`, editIdRef.current);
  }
  const columns: ColumnsType<ListItem> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: any) => (
        <Space size="middle">
          <a onClick={() => onDel(item)}>Delete</a>
          <Divider type="vertical" />
          <a onClick={() => onEdit(item)}>Edit</a>
        </Space>
      ),
    },
  ];

  const data: ListItem[] = [
    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <Table<ListItem> rowKey="id" columns={columns} dataSource={data} />
    </>
  )
}
