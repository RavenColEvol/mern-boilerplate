import {CREATE_NOTIFICATION} from './types'

export const setNotification = (message, type) => ({
    type: CREATE_NOTIFICATION,
    payload: {
        message,
        type
    }
})