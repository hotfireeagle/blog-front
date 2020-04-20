import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IArticleQuery } from '../../data.interface'
import AppContext from '../../context/context'
import fetchData from '../../util/fetch'
import LoadingWrapper from '../loadingWrapper'
import * as actions from './action'
import './index.scss'

const ArticleList: React.FC<any> = () => {
  const context = useContext(AppContext)

  const moduleState = context.store.articleList // context中所维护的关于自己的状态
  const topicModuleState = context.store.topicList // context中所维护的关于topicList模块的状态
  const { dispatch } = context

  const { apiResponse, loading } = moduleState
  const { activeTag } = topicModuleState
  const articles = apiResponse && apiResponse.result // 文章列表数据

  // 加载文章的包装方法
  const fetchArticle = () => {
    const obj: IArticleQuery = {}
    if (activeTag) { obj.tagId = activeTag }
    return fetchData('/api/article/query', 'post', obj)
  }

  // 设置文章列表数据的effect
  useEffect(() => {
    dispatch({ type: actions.setLoading, data: true })
    fetchArticle().then(res => {
      dispatch({ type: actions.setArticleListResponse, data: res })
      dispatch({ type: actions.setLoading, data: false })
    })
  }, [activeTag])

  return (
    <LoadingWrapper
      loading={loading}
      height="500px"
    >
      <div className='articleListWrapper'>
        {
          articles.map(articleObj => (
            <div className='articleItem' key={articleObj.id}>
              <Link to={`/articleDetail/${articleObj.id}`} className='title'>{articleObj.title}</Link>
              <span className='flexg' />
              <span className='date'>{articleObj.date}</span>
            </div>
          ))
        }
      </div>
    </LoadingWrapper>
  )
}

export default ArticleList