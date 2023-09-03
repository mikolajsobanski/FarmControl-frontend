import axios from 'axios'
import {
    FARMER_REGISTER_REQUEST,
    FARMER_REGISTER_SUCCESS,
    FARMER_REGISTER_FAIL,

    FARMER_REGISTER_WORKER_REQUEST,
    FARMER_REGISTER_WORKER_SUCCESS,
    FARMER_REGISTER_WORKER_FAIL,

    FARMER_LOGIN_REQUEST,
    FARMER_LOGIN_SUCCESS,
    FARMER_LOGIN_FAIL,

    FARMER_INFO_REQUEST,
    FARMER_INFO_SUCCESS,
    FARMER_INFO_FAIL,
    FARMER_INFO_RESET,

    FARMER_LOGOUT,

    FARMER_FORGOT_REQUEST,
    FARMER_FORGOT_SUCCESS,
    FARMER_FORGOT_FAIL,

    FARMER_RESET_REQUEST,
    FARMER_RESET_SUCCESS,
    FARMER_RESET_FAIL,

    FARMER_UPDATE_EMAIL_REQUEST,
    FARMER_UPDATE_EMAIL_SUCCESS,
    FARMER_UPDATE_EMAIL_FAIL,

    
    FARMER_UPDATE_NAMES_REQUEST,
    FARMER_UPDATE_NAMES_SUCCESS,
    FARMER_UPDATE_NAMES_FAIL,

    FARMER_UPDATE_PASSWORD_REQUEST,
    FARMER_UPDATE_PASSWORD_SUCCESS,
    FARMER_UPDATE_PASSWORD_FAIL,

    FARMER_UPDATE_PHOTO_REQUEST,
    FARMER_UPDATE_PHOTO_SUCCESS,
    FARMER_UPDATE_PHOTO_FAIL,

    FARMER_DELETE_REQUEST,
    FARMER_DELETE_SUCCESS,
    FARMER_DELETE_FAIL,

    FARMER_DELETE_WORKER_REQUEST,
    FARMER_DELETE_WORKER_SUCCESS,
    FARMER_DELETE_WORKER_FAIL,

    FARMER_CONTACT_SUPPORT_REQUEST,
    FARMER_CONTACT_SUPPORT_SUCCESS,
    FARMER_CONTACT_SUPPORT_FAIL,

    FARMER_WORKER_REQUEST,
    FARMER_WORKER_SUCCESS,
    FARMER_WORKER_FAIL,

    FARMER_COWORKER_REQUEST,
    FARMER_COWORKER_SUCCESS,
    FARMER_COWORKER_FAIL,

    FARMER_SHORT_DETAILS_OWNER_REQUEST,
    FARMER_SHORT_DETAILS_OWNER_SUCCESS,
    FARMER_SHORT_DETAILS_OWNER_FAIL,

    FARMER_SHORT_DETAILS_WORKER_REQUEST,
    FARMER_SHORT_DETAILS_WORKER_SUCCESS,
    FARMER_SHORT_DETAILS_WORKER_FAIL,

} from '../constants/farmerConstants'



export const register = (firstName, lastName, email, password, passwordConfirm) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'auth/register',
            {'first_name':firstName,'last_name':lastName, 'email': email, 'password': password, 'password_confirm': passwordConfirm},
            config
            )

        dispatch({
            type:FARMER_REGISTER_SUCCESS,
            payload:data
        })

        


    }catch(error){
        dispatch({
            type:FARMER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const registerWorker = (firstName, lastName, email, password, passwordConfirm, pk) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_REGISTER_WORKER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'auth/register',
            {'first_name':firstName,'last_name':lastName, 'email': email, 'password': password, 'password_confirm': passwordConfirm, 'is_owner': false, 'id_owner': pk},
            config
            )

        dispatch({
            type:FARMER_REGISTER_WORKER_SUCCESS,
            payload:data
        })

        
    }catch(error){
        dispatch({
            type:FARMER_REGISTER_WORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'auth/login', 
            {'email': email, 'password': password},
            config
            )

        dispatch({
            type:FARMER_LOGIN_SUCCESS,
            payload:data
        })
      
        localStorage.setItem('access_token', JSON.stringify(data.token))
        localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token))
        

    }catch(error){
        dispatch({
            type:FARMER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerDetails = () => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_INFO_REQUEST
        })
        const token = JSON.parse(localStorage.getItem('access_token'))
        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const {data} = await axios.get('auth/farmer', config)

        dispatch({
            type:FARMER_INFO_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:FARMER_INFO_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => async (dispatch) =>  {
    const token = JSON.parse(localStorage.getItem('refresh_token'))
    const response = await axios.post('auth/logout', {'refresh_token': token})
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')
    dispatch({ type: FARMER_LOGOUT })
    dispatch({ type: FARMER_INFO_RESET })
}

export const farmerForgot = (email) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_FORGOT_REQUEST
        })
        
        const {response} = await axios.post('auth/forgot', {'email': email})
        
        if(response.status === 500){
            throw new Error('User not found!')
        }

        dispatch({
            type:FARMER_FORGOT_SUCCESS,
            payload: response
        })

    }catch(error){
        dispatch({
            type:FARMER_FORGOT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerReset = (token, password, password_confirm) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_RESET_REQUEST
        })
        
        const {response} = await axios.post('auth/reset', {'token': token, 'password': password, 'password_confirm': password_confirm})
        

        dispatch({
            type:FARMER_RESET_SUCCESS,
            payload: response
        })

    }catch(error){
        dispatch({
            type:FARMER_RESET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const farmerEmailUpdate = (pk, haslo, email) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_UPDATE_EMAIL_REQUEST
        })

        const response= await axios.patch('auth/update', {'pk': pk, 'haslo': haslo, 'email': email})
        
        dispatch({
            type:FARMER_UPDATE_EMAIL_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:FARMER_UPDATE_EMAIL_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerPhotoUpdate = (formData) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_UPDATE_PHOTO_REQUEST
        })
 
        const response= await axios.post('auth/photo', formData)
        
        dispatch({
            type:FARMER_UPDATE_PHOTO_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:FARMER_UPDATE_PHOTO_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerNamesUpdate = (pk, haslo, first_name, last_name) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_UPDATE_NAMES_REQUEST
        })

        const response= await axios.patch('auth/update', {'pk': pk, 'haslo': haslo, 'first_name': first_name, 'last_name': last_name})
        
        dispatch({
            type:FARMER_UPDATE_NAMES_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:FARMER_UPDATE_NAMES_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerPasswordUpdate = (pk, haslo, password) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_UPDATE_PASSWORD_REQUEST
        })

        const response= await axios.patch('auth/update', {'pk': pk, 'haslo': haslo, 'password': password})
        
        dispatch({
            type:FARMER_UPDATE_PASSWORD_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:FARMER_UPDATE_PASSWORD_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerDelete = (pk, haslo) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_DELETE_REQUEST
        })

        const response = await axios.delete('auth/delete', {params: {
            pk: pk,
            haslo: haslo,
        },})

        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        dispatch({ type: FARMER_LOGOUT })
        dispatch({ type: FARMER_INFO_RESET })
            
        dispatch({
            type:FARMER_DELETE_SUCCESS,
            payload: response.data.message
        })
        

    }catch(error){
        dispatch({
            type:FARMER_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerDeleteWorker = (pk, haslo, pk_worker) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_DELETE_WORKER_REQUEST
        })
        console.log(pk)
        console.log(pk_worker)
        const response = await axios.delete('auth/deleteWorker', {params: {
            pk: pk,
            haslo: haslo,
            pk_worker: pk_worker,
        },})

            
        dispatch({
            type:FARMER_DELETE_WORKER_SUCCESS,
            payload: response.data.message
        })
        

    }catch(error){
        dispatch({
            type:FARMER_DELETE_WORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerContactSupport = (email, content) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_CONTACT_SUPPORT_REQUEST
        })

        const response = await axios.post('auth/contactSupport', {
            email: email,
            content: content,
          })

        dispatch({
            type:FARMER_CONTACT_SUPPORT_SUCCESS,
            payload: response
        })

    }catch(error){
        dispatch({
            type:FARMER_CONTACT_SUPPORT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerWorkerList = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_WORKER_REQUEST
        })
       
        const response= await axios.get('auth/employees', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:FARMER_WORKER_SUCCESS,
            payload: response.data.employees
        })

    }catch(error){
        dispatch({
            type:FARMER_WORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerCoworkerList = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_COWORKER_REQUEST
        })
       
        const response= await axios.get('auth/coworkers', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:FARMER_COWORKER_SUCCESS,
            payload: response.data.coworkers
        })

    }catch(error){
        dispatch({
            type:FARMER_COWORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerShortDetailsOwner = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_SHORT_DETAILS_OWNER_REQUEST
        })
       
        const response= await axios.get('auth/shortDetails', { params: { pk: pk } })
        
        dispatch({
            type:FARMER_SHORT_DETAILS_OWNER_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:FARMER_SHORT_DETAILS_OWNER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const farmerShortDetailsWorker = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: FARMER_SHORT_DETAILS_WORKER_REQUEST
        })
       
        const response= await axios.get('auth/shortDetails', { params: { pk: pk } })
        
        dispatch({
            type:FARMER_SHORT_DETAILS_WORKER_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:FARMER_SHORT_DETAILS_WORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}