import * as actions from './action'
import { IModuleArticleList, IAction } from '../../data.interface'
import { getActions } from '../../util/tool'

const reducer = (moduleState: IModuleArticleList, action: IAction) => {
  switch (action.type) {
    case actions.setArticleListResponse:
      return { ...moduleState, apiResponse: action.data }
    case actions.setLoading:
      return { ...moduleState, loading: action.data }
    default:
      return moduleState
  }
}

const obj = {
  actions: getActions(actions),
  reducer,
}

export default obj