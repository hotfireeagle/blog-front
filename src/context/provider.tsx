import React, { useReducer } from 'react'
import { IAppContext, initialState } from '../data.interface'
import AppContext from './context'
import { reducer } from './reducer'

interface IProps {
  children: any
}

const Provider: React.FC<IProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: IAppContext = {
    store: state,
    dispatch,
  }
  const AppProvider = AppContext.Provider

  return (
    <AppProvider value={value}>
      {props.children}
    </AppProvider>
  )
}

export default Provider