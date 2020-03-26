import {IS_LOADING, DONE_LOADING} from '../actions/types'

const initialState = {
    isLoading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case IS_LOADING:
            return {
                isLoading: true
            }
        case DONE_LOADING: 
            return {
                isLoading: false
            }
        default: return state
    }
}