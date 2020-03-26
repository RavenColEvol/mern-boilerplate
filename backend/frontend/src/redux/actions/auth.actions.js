import axios from 'axios'
import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, REGISTER_ERROR, REGISTER_SUCCESS} from './types'
import {setLoading, doneLoading} from './loading.actions'
import {setNotification} from './message.actions'

export const login = (formData) => async dispatch => {
    const config = {
        header:{
            'Content-Type': 'application/json'
        }
    }
    dispatch(setLoading());
    try {
        
        const response = await axios.post('http://localhost:5000/api/user/login', formData, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(doneLoading())
        
        dispatch(setNotification('Login was successful', 'success'))
    
    } catch(err) {
        dispatch({
            type: LOGIN_ERROR,
        })
    
        dispatch(doneLoading())
    
        console.log(err.response)
    }
}

export const register = (formData) => async dispatch => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    dispatch(setLoading());
    try {
        const response = await axios.post('http://localhost:5000/api/user/register', formData, config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })

        dispatch(doneLoading())
        
        dispatch(setNotification('Successfully registered.', 'success'))

    } catch(err) {
        dispatch({
            type: REGISTER_ERROR,
        })
    
        dispatch(doneLoading())
    
        console.log(err.response)
    }
}


export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}