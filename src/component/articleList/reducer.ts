import * as actions from './action'
import { IModuleArticleList, IAction } from '../../data.interface'

export const articleList = (moduleState: IModuleArticleList, action: IAction) => {
  switch (action.type) {
    case actions.setArticleListResponse:
      return { ...moduleState, apiResponse: action.data }
    default:
      return moduleState
  }
}