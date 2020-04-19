// 应用context中所维护的数据类型
export interface IAppState {
  articleList: IModuleArticleList
  [k: string]: any
}

// 整个应用的初始数据，用在useReducer上面
export const initialState: IAppState = {
  articleList: {
    apiResponse: {}
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

export interface IModuleArticleList {
  apiResponse: any
}

// 整个应用的action类型
export interface IAction {
  type: string
  [key: string]: any
}