import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    token: null,
}

export default function(state = initialState, action) {

    switch(action.type) {
        case LOGIN_SUCCESS:
            const {token} = action.payload
            localStorage.setItem('token', token);
            return {
                ...state,
                isAuthenticated:true,
                token
            }

        case LOGIN_ERROR:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:false,
                token:null
            }
        
        default: return state;
    }
}