import { combineReducers } from 'redux'

import userClick from './userClick'

export default combineReducers({
    user: userClick
})