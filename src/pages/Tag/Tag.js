import {Table} from 'antd'
import React, {useEffect, useState} from 'react'
import {getTagList} from '../../api'
export default function Tag() {
  const [tagList, setTagList] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const {list} = await getTagList()
    setTagList(() => list)
  }, [])
  const columns = [
    {
      title: '标签',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'operation',
      width: 250,
      key: 'operation',
      // eslint-disable-next-line react/display-name
      render: () => {
        return <div>actions</div>
      },
    },
  ]
  return (
    <div className="tag">
      <Table rowKey="id" size="small" columns={columns} dataSource={tagList} pagination={{showSizeChanger: true}} />
    </div>
  )
}
