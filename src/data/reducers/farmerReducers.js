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

    FARMER_FORGOT_REQUEST,
    FARMER_FORGOT_SUCCESS,
    FARMER_FORGOT_FAIL,

    FARMER_RESET_REQUEST,
    FARMER_RESET_SUCCESS,
    FARMER_RESET_FAIL,

    FARMER_INFO_REQUEST,
    FARMER_INFO_SUCCESS,
    FARMER_INFO_FAIL,

    FARMER_LOGOUT,
    FARMER_INFO_RESET,

    FARMER_UPDATE_EMAIL_REQUEST,
    FARMER_UPDATE_EMAIL_SUCCESS,
    FARMER_UPDATE_EMAIL_FAIL,

    FARMER_UPDATE_NAMES_REQUEST,
    FARMER_UPDATE_NAMES_SUCCESS,
    FARMER_UPDATE_NAMES_FAIL,

    FARMER_UPDATE_PHOTO_REQUEST,
    FARMER_UPDATE_PHOTO_SUCCESS,
    FARMER_UPDATE_PHOTO_FAIL,

    FARMER_UPDATE_PASSWORD_REQUEST,
    FARMER_UPDATE_PASSWORD_SUCCESS,
    FARMER_UPDATE_PASSWORD_FAIL,

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

export const farmerRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_REGISTER_REQUEST:
            return { loading: true }

        case FARMER_REGISTER_SUCCESS:
            return {loading: false, UserInfo: action.payload }

        case FARMER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        
        case FARMER_LOGOUT:
            return {}    

        default:
            return state
    }
}

export const farmerRegisterWorkerReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_REGISTER_WORKER_REQUEST:
            return { loading: true }

        case FARMER_REGISTER_WORKER_SUCCESS:
            return {loading: false, UserInfo: action.payload }

        case FARMER_REGISTER_WORKER_FAIL:
            return { loading: false, error: action.payload }
        
        case FARMER_LOGOUT:
            return {}    

        default:
            return state
    }
}

export const farmerLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_LOGIN_REQUEST:
            return { loading: true }

        case FARMER_LOGIN_SUCCESS:
            return { loading: false, farmer: action.payload }

        case FARMER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        
        case FARMER_LOGOUT:
            return {}    

        default:
            return state
    }
}

export const farmerInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_INFO_REQUEST:
            return { loading: true }

        case FARMER_INFO_SUCCESS:
            return { loading: false, farmer: action.payload }

        case FARMER_INFO_FAIL:
            return { loading: false, error: action.payload }
        
        case FARMER_INFO_RESET:
            return {farmer: {}}    
        
        default:
            return state
    }
}

export const farmerForgotReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_FORGOT_REQUEST:
            return { loading: true }

        case FARMER_FORGOT_SUCCESS:
            return { loading: false, email: action.payload }

        case FARMER_FORGOT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerResetReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_RESET_REQUEST:
            return { loading: true }

        case FARMER_RESET_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_RESET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerUpdateEmailReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_UPDATE_EMAIL_REQUEST:
            return { loading: true }

        case FARMER_UPDATE_EMAIL_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_UPDATE_EMAIL_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerUpdatePhotoReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_UPDATE_PHOTO_REQUEST:
            return { loading: true }

        case FARMER_UPDATE_PHOTO_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_UPDATE_PHOTO_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerUpdateNamesReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_UPDATE_NAMES_REQUEST:
            return { loading: true }

        case FARMER_UPDATE_NAMES_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_UPDATE_NAMES_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerUpdatePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_UPDATE_PASSWORD_REQUEST:
            return { loading: true }

        case FARMER_UPDATE_PASSWORD_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_UPDATE_PASSWORD_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_DELETE_REQUEST:
            return { loading: true }

        case FARMER_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerDeleteWorkerReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_DELETE_WORKER_REQUEST:
            return { loading: true }

        case FARMER_DELETE_WORKER_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_DELETE_WORKER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerContactSupportReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_CONTACT_SUPPORT_REQUEST:
            return { loading: true }

        case FARMER_CONTACT_SUPPORT_SUCCESS:
            return { loading: false, message: action.payload }

        case FARMER_CONTACT_SUPPORT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerWorkerListReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_WORKER_REQUEST:
            return { loading: true }

        case FARMER_WORKER_SUCCESS:
            return { loading: false, workers: action.payload }

        case FARMER_WORKER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerCoworkerListReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_COWORKER_REQUEST:
            return { loading: true }

        case FARMER_COWORKER_SUCCESS:
            return { loading: false, coworkers: action.payload }

        case FARMER_COWORKER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerShortDetailsOwnerReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_SHORT_DETAILS_OWNER_REQUEST:
            return { loading: true }

        case FARMER_SHORT_DETAILS_OWNER_SUCCESS:
            return { loading: false, details: action.payload }

        case FARMER_SHORT_DETAILS_OWNER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerShortDetailsWorkerReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_SHORT_DETAILS_WORKER_REQUEST:
            return { loading: true }

        case FARMER_SHORT_DETAILS_WORKER_SUCCESS:
            return { loading: false, details: action.payload }

        case FARMER_SHORT_DETAILS_WORKER_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}