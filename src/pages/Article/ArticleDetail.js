import {useRouteMatch} from 'react-router-dom'
import {getArtilceDetail} from '../../api'
import React, {useEffect, useState, Suspense} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function ArticleDetail() {
  const {params} = useRouteMatch()
  const [detail, setDetail] = useState({content: ''})
  // const rawHtmlData = {
  //   __html: detail.content // 这里有个下划线
  // }
  const getDetail = async id => {
    const data = await getArtilceDetail(id)
    console.error(data)
    setDetail(data)
  }
  useEffect(() => {
    getDetail(params.id)
  }, [params.id])
  return (
    <div>
      detail {params.id}
      <div>
        <Suspense fallback={() => 'loading'}>
          <ReactQuill readOnly value={detail.content} toolbar={[]} />
        </Suspense>
      </div>
    </div>
  )
}
