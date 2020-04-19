import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Provider from './context/provider'
import ArticleList from './page/articleList/index'

const App = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact path='/'>
          <ArticleList />
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App