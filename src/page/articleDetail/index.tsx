import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../util/fetch'
import { IArticleDetail } from '../../data.interface'
import LoadingWrapper from '../../component/loadingWrapper'

interface IParam {
  articleId: string
}

const ArticleDetail: React.FC<any> = (props) => {
  const param = useParams<IParam>()

  const { articleId } = param
  const [loading, setLoading] = useState(true) // 是否处于加载过程
  const [apiResponse, setApiResponse] = useState<IArticleDetail>({} as IArticleDetail) // 文章详情数据

  // 设置文章数据的effect
  useEffect(() => {
    setLoading(true)
    fetchData(`/api/article/${articleId}`, 'GET').then(res => {
      setApiResponse(res)
    })
    setLoading(false)
  }, [articleId])

  // 设置代码颜色的effect
  useEffect(() => {
    if (!apiResponse.content) return
    document.querySelectorAll('figure').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [apiResponse])

  return (
    <LoadingWrapper
      height='100vh'
      loading={loading}
    >
      <div className='pageWrapper'>
        <div dangerouslySetInnerHTML={{ __html: apiResponse.content }} />
      </div>
    </LoadingWrapper>
  )
}

export default ArticleDetail