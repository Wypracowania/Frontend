import { combineReducers } from "redux"
import { newOrderReducer } from './new-order-reducer'
import { userReducer } from './user-reducer'

export default combineReducers({
    newOrderReducer,
    userReducer,
  });