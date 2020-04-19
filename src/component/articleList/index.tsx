import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/context'
import fetchData from '../../util/fetch'
import LoadingWrapper from '../loadingWrapper'
import * as actions from './action'

const ArticleList: React.FC<any> = () => {
  const context = useContext(AppContext)

  const moduleState = context.store.articleList // context中所维护的关于自己的状态
  const { dispatch } = context

  console.log('rende me')
  const { apiResponse, loading } = moduleState
  const articles = apiResponse && apiResponse.result // 文章列表数据
  console.log('文章列表为', articles)

  useEffect(() => {
    dispatch({ type: actions.setLoading, data: true })
    fetchData('/api/article/query', 'post').then(res => {
      dispatch({ type: actions.setArticleListResponse, data: res })
      dispatch({ type: actions.setLoading, data: false })
    })
  }, [])

  return (
    <LoadingWrapper
      loading={loading}
      height="100vh"
    >
      <div className='articleListWrapper'>
        {
          articles.map(articleObj => (
            <div className='articleItem' key={articleObj.id}>
              <Link to={`/articleDetail/${articleObj.id}`}>{articleObj.title}</Link>
            </div>
          ))
        }
      </div>
    </LoadingWrapper>
  )
}

export default ArticleList