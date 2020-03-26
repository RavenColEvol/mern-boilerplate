import {IS_LOADING, DONE_LOADING} from './types'

export const setLoading = () => ({
    type: IS_LOADING
})

export const doneLoading = () => ({
    type: DONE_LOADING
})