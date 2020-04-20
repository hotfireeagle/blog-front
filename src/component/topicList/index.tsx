import React, { useContext, useEffect} from 'react'
import appContext from '../../context/context'
import LoadingWrapper from '../loadingWrapper'
import * as actions from './action'
import fetchData from '../../util/fetch'
import './index.scss'

const TopicList = () => {
  const context = useContext(appContext)

  const moduleState = context.store.topicList // context中所维护的关于该模块的状态数据
  const { dispatch } = context
  const { apiResponse, loading, activeTag } = moduleState

  // 设置加载数据的loading
  useEffect(() => {
    dispatch({ type: actions.setLoading, data: true })
    fetchData('/api/tag/all', 'get').then(res => {
      dispatch({ type: actions.setTopicList, data: res })
      dispatch({ type: actions.setLoading, data: false })
    })
  }, [])

  // 监听标签的点击事件
  const tagClickHandler = (id: number) => {
    dispatch({ type: actions.setActiveTag, data: id })
  }

  const returnTagClassName = (id: number) => {
    if (id === activeTag) return 'tagItem activeTagItem'
    return 'tagItem'
  }

  return (
    <LoadingWrapper
      height={60}
      loading={loading}
    >
      <div className='tagWrapperComponent'>
        {
          apiResponse.map(tagObj => (
            <span
              key={tagObj.id} className={returnTagClassName(tagObj.id)}
              onClick={() => tagClickHandler(tagObj.id)}
            >
              <span className='tag'>#</span>{tagObj.name}
            </span>
          ))
        }
      </div>
    </LoadingWrapper>
  )
}

export default TopicList