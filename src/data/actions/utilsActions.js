import axios from 'axios'
import {
    NOTE_POST_REQUEST,
    NOTE_POST_SUCCESS,
    NOTE_POST_FAIL,

    NOTE_GET_REQUEST,
    NOTE_GET_SUCCESS,
    NOTE_GET_FAIL,

    NOTE_PUT_REQUEST,
    NOTE_PUT_SUCCESS,
    NOTE_PUT_FAIL,

    NOTE_DELETE_REQUEST,
    NOTE_DELETE_SUCCESS,
    NOTE_DELETE_FAIL,

    TASK_POST_OWNER_OWNER_REQUEST,
    TASK_POST_OWNER_OWNER_SUCCESS,
    TASK_POST_OWNER_OWNER_FAIL,

    TASK_POST_OWNER_WORKER_REQUEST,
    TASK_POST_OWNER_WORKER_SUCCESS,
    TASK_POST_OWNER_WORKER_FAIL,

    TASK_GET_IN_PROGRESS_REQUEST,
    TASK_GET_IN_PROGRESS_SUCCESS,
    TASK_GET_IN_PROGRESS_FAIL,

    TASK_GET_COMPLETE_REQUEST,
    TASK_GET_COMPLETE_SUCCESS,
    TASK_GET_COMPLETE_FAIL,

    TASK_PUT_REQUEST,
    TASK_PUT_SUCCESS,
    TASK_PUT_FAIL,

    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,

    TASK_MAKE_COMPLETE_REQUEST,
    TASK_MAKE_COMPLETE_SUCCESS,
    TASK_MAKE_COMPLETE_FAIL,

    TASK_MAKE_IN_PROGRESS_REQUEST,
    TASK_MAKE_IN_PROGRESS_SUCCESS,
    TASK_MAKE_IN_PROGRESS_FAIL,

    TASK_ADD_COMMENT_REQUEST,
    TASK_ADD_COMMENT_SUCCESS,
    TASK_ADD_COMMENT_FAIL,

    TASK_LIST_COMMENT_REQUEST,
    TASK_LIST_COMMENT_SUCCESS,
    TASK_LIST_COMMENT_FAIL,

    COMMENT_TASK_PUT_REQUEST,
    COMMENT_TASK_PUT_SUCCESS,
    COMMENT_TASK_PUT_FAIL,

    COMMENT_TASK_DELETE_REQUEST,
    COMMENT_TASK_DELETE_SUCCESS,
    COMMENT_TASK_DELETE_FAIL,


} from '../constants/utilsConstants'

export const addNote = (pk, title, content) => async (dispatch) => {
    try{
        dispatch({
            type: NOTE_POST_REQUEST
        })
       
        const response= await axios.post('core/utils/note', {"pk":pk, "title": title, "content": content})
        
        dispatch({
            type:NOTE_POST_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:NOTE_POST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listNotes = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: NOTE_GET_REQUEST
        })
       
        const response= await axios.get('core/utils/note', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:NOTE_GET_SUCCESS,
            payload: response.data.notes
        })

    }catch(error){
        dispatch({
            type:NOTE_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateNote = (pk_note, title, content) => async (dispatch) => {
    try{
        dispatch({
            type: NOTE_PUT_REQUEST
        })

        const response= await axios.put('core/utils/note', {"pk_note": pk_note, "title": title, "content": content})
        
        dispatch({
            type:NOTE_PUT_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:NOTE_PUT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteNote = (pk_note) => async (dispatch) => {
    try{
        dispatch({
            type: NOTE_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/utils/note', {params: {
            pk_note: pk_note,
          },})
        
        dispatch({
            type:NOTE_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:NOTE_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addOwnTask = (pk_owner, title, description, content) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_POST_OWNER_OWNER_REQUEST
        })
       
        const response= await axios.post('core/utils/task', {"pk_owner": pk_owner, "pk_worker": pk_owner, "title": title, "description": description, "content": content})
               
        dispatch({
            type:TASK_POST_OWNER_OWNER_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_POST_OWNER_OWNER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const addWorkerTask = (pk_owner, pk_worker, title, description, content) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_POST_OWNER_WORKER_REQUEST
        })
       
        const response= await axios.post('core/utils/task', {"pk_owner": pk_owner, "pk_worker": pk_worker, "title": title, "description": description, "content": content})
            
        dispatch({
            type:TASK_POST_OWNER_WORKER_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_POST_OWNER_WORKER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListInProgressTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_GET_IN_PROGRESS_REQUEST
        })
       
        const response= await axios.get('core/utils/taskInprogress', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TASK_GET_IN_PROGRESS_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TASK_GET_IN_PROGRESS_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListCompleteTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_GET_COMPLETE_REQUEST
        })
       
        const response= await axios.get('core/utils/taskComplete', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TASK_GET_COMPLETE_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TASK_GET_COMPLETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateTask = (pk, title, description, content) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_PUT_REQUEST
        })

        const response= await axios.put('core/utils/task', {"pk": pk, "title": title,"description": description, "content": content})
        
        dispatch({
            type:TASK_PUT_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_PUT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/utils/task', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:TASK_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const makeCompleteTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_MAKE_COMPLETE_REQUEST
        })
       
        const response= await axios.post('core/utils/makeComplete', {"pk": pk})
            
        dispatch({
            type:TASK_MAKE_COMPLETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_MAKE_COMPLETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const makeInProgressTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_MAKE_IN_PROGRESS_REQUEST
        })
       
        const response= await axios.post('core/utils/makeInprogress', {"pk": pk})
            
        dispatch({
            type:TASK_MAKE_IN_PROGRESS_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_MAKE_IN_PROGRESS_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addCommentTask = (owner ,task, text) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_ADD_COMMENT_REQUEST
        })
       
        const response= await axios.post('core/utils/taskComment', {"owner": owner, "task": task, "text": text})
            
        dispatch({
            type:TASK_ADD_COMMENT_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:TASK_ADD_COMMENT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListCommentTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASK_LIST_COMMENT_REQUEST
        })
       
        const response= await axios.get('core/utils/taskComment', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TASK_LIST_COMMENT_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TASK_LIST_COMMENT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateCommentTask = (pk, text) => async (dispatch) => {
    try{
        dispatch({
            type: COMMENT_TASK_PUT_REQUEST
        })

        const response= await axios.put('core/utils/taskComment', {"pk": pk, "text": text})
        
        dispatch({
            type:COMMENT_TASK_PUT_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:COMMENT_TASK_PUT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteCommentTask = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: COMMENT_TASK_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/utils/taskComment', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:COMMENT_TASK_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:COMMENT_TASK_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}