import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/context'
import fetchData from '../../util/fetch'
import * as actions from './action'

const ArticleList: React.FC<any> = () => {
  const context = useContext(AppContext)

  const moduleState = context.store.articleList // context中所维护的关于自己的状态
  const { dispatch } = context

  console.log('rende me')
  const { apiResponse } = moduleState
  const articles = apiResponse && apiResponse.result // 文章列表数据

  useEffect(() => {
    if (articles) return // 存在数据的话就不执行实际的effect了
    fetchData('/api/article/query', 'post').then(res => {
      dispatch({ type: actions.setArticleListResponse, data: res })
    })
  }, [])

  if (articles) {
    return <h1>ah</h1>
  } else {
    return <h1>loading</h1>
  }
}

export default ArticleList