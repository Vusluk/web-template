import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import App from './App'

export default combineReducers({
  routing,
  app: App.reducer,
})
