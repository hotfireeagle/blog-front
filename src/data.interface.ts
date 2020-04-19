// 每篇文章对象数据的建模
export interface IArticle {
  id: number
  title: string
  tags: Array<number>
  date: string
}

// 后端中api/article/query接口所返回的数据类型建模
export interface IArticleQueryResponse {
  result: Array<IArticle>
  total: number
}

// 文章列表模块所维护的状态
export interface IModuleArticleList {
  apiResponse: IArticleQueryResponse
  loading: boolean
}

// 应用context中所维护的数据类型
export interface IAppState {
  articleList: IModuleArticleList
  [k: string]: any
}

// 整个应用的初始数据，用在useReducer上面
export const initialState: IAppState = {
  articleList: {
    apiResponse: { result: [], total: 0 },
    loading: false,
  }
}

export interface IAppContext {
  store: IAppState
  dispatch: any
}

export const defaultAppContext: IAppContext = {
  store: initialState,
  dispatch: () => {}
}

export interface IReducerParam {
  [key: string]: any
}

// 整个应用的action类型
export interface IAction {
  type: string
  [key: string]: any
}