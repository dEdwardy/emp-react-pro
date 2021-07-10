/* eslint-disable react/display-name */
import {Table} from 'antd'
import React, {useState, useEffect} from 'react'
import {getCategoryList} from '../../api'
export default function Category() {
  const [categoryList, setCategoryList] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      const {list} = await getCategoryList()
      setCategoryList(() => list)
    }
    fetchData()
  }, [])
  const columns = [
    {
      title: '类目',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'operation',
      width: 250,
      key: 'operation',
      render: () => {
        return <div>actions</div>
      },
    },
  ]
  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={categoryList} />
    </div>
  )
}
