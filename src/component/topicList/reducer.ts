import * as actions from './action'
import { IModuleTopicList, IAction } from '../../data.interface'
import { getActions } from '../../util/tool'

const reducer = (moduleState: IModuleTopicList, action: IAction) => {
  switch (action.type) {
    case actions.setTopicList:
      return { ...moduleState, apiResponse: action.data }
    case actions.setLoading:
      return { ...moduleState, loading: action.data }
    case actions.setActiveTag:
      return { ...moduleState, activeTag: action.data }
    default:
      return moduleState
  }
}

const obj = {
  actions: getActions(actions),
  reducer,
}

export default obj