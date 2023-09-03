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

export const notePostReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTE_POST_REQUEST:
            return { loading: true }

        case NOTE_POST_SUCCESS:
            return { loading: false, message: action.payload }

        case NOTE_POST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const noteGetReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTE_GET_REQUEST:
            return { loading: true }

        case NOTE_GET_SUCCESS:
            return { loading: false, notes: action.payload }

        case NOTE_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const notePutReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTE_PUT_REQUEST:
            return { loading: true }

        case NOTE_PUT_SUCCESS:
            return { loading: false, message: action.payload }

        case NOTE_PUT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const noteDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTE_DELETE_REQUEST:
            return { loading: true }

        case NOTE_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case NOTE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskPostOwnReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_POST_OWNER_OWNER_REQUEST:
            return { loading: true }

        case TASK_POST_OWNER_OWNER_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_POST_OWNER_OWNER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskPostWorkerReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_POST_OWNER_WORKER_REQUEST:
            return { loading: true }

        case TASK_POST_OWNER_WORKER_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_POST_OWNER_WORKER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskGetInProgressReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_GET_IN_PROGRESS_REQUEST:
            return { loading: true }

        case TASK_GET_IN_PROGRESS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case TASK_GET_IN_PROGRESS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskGetCompleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_GET_COMPLETE_REQUEST:
            return { loading: true }

        case TASK_GET_COMPLETE_SUCCESS:
            return { loading: false, tasks: action.payload }

        case TASK_GET_COMPLETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskPutReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_PUT_REQUEST:
            return { loading: true }

        case TASK_PUT_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_PUT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_DELETE_REQUEST:
            return { loading: true }

        case TASK_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskMakeCompleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_MAKE_COMPLETE_REQUEST:
            return { loading: true }

        case TASK_MAKE_COMPLETE_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_MAKE_COMPLETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskMakeInProgressReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_MAKE_IN_PROGRESS_REQUEST:
            return { loading: true }

        case TASK_MAKE_IN_PROGRESS_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_MAKE_IN_PROGRESS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskAddCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_ADD_COMMENT_REQUEST:
            return { loading: true }

        case TASK_ADD_COMMENT_SUCCESS:
            return { loading: false, message: action.payload }

        case TASK_ADD_COMMENT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskListCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_LIST_COMMENT_REQUEST:
            return { loading: true }

        case TASK_LIST_COMMENT_SUCCESS:
            return { loading: false, comments: action.payload }

        case TASK_LIST_COMMENT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const commentTaskPutReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENT_TASK_PUT_REQUEST:
            return { loading: true }

        case COMMENT_TASK_PUT_SUCCESS:
            return { loading: false, message: action.payload }

        case COMMENT_TASK_PUT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const commentTaskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENT_TASK_DELETE_REQUEST:
            return { loading: true }

        case COMMENT_TASK_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case COMMENT_TASK_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}