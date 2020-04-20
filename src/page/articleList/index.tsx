import React from 'react'
import ArticleListComponent from '../../component/articleList'
import TopicListComponent from '../../component/topicList'
import './index.scss'

const ArticleList = () => (
  <div className='pageContainer'>
    <h3 className='title'>Topics</h3>
    <TopicListComponent />
    <h3 className='title'>Most recent</h3>
    <ArticleListComponent />
  </div>
)

export default ArticleList