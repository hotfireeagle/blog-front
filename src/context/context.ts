import { createContext } from 'react'
import { IAppContext, defaultAppContext } from '../data.interface'

const AppContext = createContext<IAppContext>(defaultAppContext)

export default AppContext