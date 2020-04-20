import { IReducerParam, IAction, IAppState } from '../data.interface'
import articleList from '../component/articleList/reducer'
import topicList from '../component/topicList/reducer'

const combineReducers = (reducerObj: IReducerParam) => {
  return (state: IAppState, action: IAction) => {
    const newState = { ...state }
    const moduleNames = Object.keys(reducerObj)

    for (let moduleName of moduleNames) {
      const moduleObj = reducerObj[moduleName]
      const { actions, reducer } = moduleObj
      if (actions.includes(action.type)) { // 被触发的这个action属于当前这个模块
        newState[moduleName] = reducer(state[moduleName], action)
        break
      }
    }
    return newState
  }
}

export const reducer = combineReducers({
  articleList,
  topicList,
})