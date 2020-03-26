import {combineReducers} from 'redux'
import auth from './auth.reducer'
import loading from './loading.reducer'
import message from './message.reducer'

export default combineReducers({
    auth,
    loading,
    message
})