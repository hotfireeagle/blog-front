import React from 'react'
import ArticleListComponent from '../../component/articleList'
import './index.scss'

const ArticleList = () => (
  <div className='pageContainer'>
    <h3 className='title'>Topics</h3>
    <h3 className='title'>Most recent</h3>
    <ArticleListComponent />
  </div>
)

export default ArticleList