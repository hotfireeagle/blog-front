import { IReducerParam, IAction, IAppState } from '../data.interface'
import { articleList } from '../component/articleList/reducer'

const combineReducers = (reducerObj: IReducerParam) => {
  return (state: IAppState, action: IAction) => {
    const keys = Object.keys(reducerObj)
    const newState = { ...state }

    // 现在这样的写法是每个模块都进行了一遍遍历
    keys.forEach(moduleName => {
      const reducerUnitHandler = reducerObj[moduleName]
      const moduleState = newState[moduleName]
      newState[moduleName] = reducerUnitHandler(moduleState, action)
    })
    return newState
  }
}

export const reducer = combineReducers({
  articleList,
})