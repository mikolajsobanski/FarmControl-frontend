import { combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { farmerInfoReducer, farmerLoginReducer, farmerRegisterReducer, farmerForgotReducer, farmerResetReducer, farmerUpdateEmailReducer, farmerUpdateNamesReducer, farmerUpdatePasswordReducer, farmerDeleteReducer, farmerDeleteWorkerReducer, farmerContactSupportReducer, farmerUpdatePhotoReducer, farmerWorkerListReducer, farmerRegisterWorkerReducer, farmerCoworkerListReducer, farmerShortDetailsOwnerReducer, farmerShortDetailsWorkerReducer } from './reducers/farmerReducers';
import { commentTaskDeleteReducer, commentTaskPutReducer, noteDeleteReducer, noteGetReducer, notePostReducer, notePutReducer, taskAddCommentReducer, taskDeleteReducer, taskGetCompleteReducer, taskGetInProgressReducer, taskListCommentReducer, taskMakeCompleteReducer, taskMakeInProgressReducer, taskPostOwnReducer, taskPostWorkerReducer, taskPutReducer } from './reducers/utilsReducers';


const reducer = combineReducers({
    farmerRegister: farmerRegisterReducer,
    farmerRegisterWorker: farmerRegisterWorkerReducer,
    farmerLogin: farmerLoginReducer,
    farmerInfo: farmerInfoReducer,
    farmerForgot: farmerForgotReducer,
    farmerResetInfo: farmerResetReducer,
    farmerShortDetailsOwner: farmerShortDetailsOwnerReducer,
    farmerShortDetailsWorker: farmerShortDetailsWorkerReducer,

    farmerUpdateEmail: farmerUpdateEmailReducer,
    farmerUpdateNames: farmerUpdateNamesReducer,
    farmerUpdateCredentails: farmerUpdatePasswordReducer,
    farmerUpdatePhoto: farmerUpdatePhotoReducer,

    farmerDelete: farmerDeleteReducer,
    farmerDeleteWorker: farmerDeleteWorkerReducer,

    farmerContactSupport: farmerContactSupportReducer,

    farmerWorkerList: farmerWorkerListReducer,
    farmerCoworkerList: farmerCoworkerListReducer,

    noteAdd: notePostReducer,
    noteList: noteGetReducer,
    noteUpdate: notePutReducer,
    noteDelete: noteDeleteReducer,

    taskAddOwn: taskPostOwnReducer,
    taskAddWorker: taskPostWorkerReducer,
    taskGetInProgres: taskGetInProgressReducer,
    taskGetComplete: taskGetCompleteReducer,
    taskPut: taskPutReducer,
    taskDelete: taskDeleteReducer,
    taskMakeComplete: taskMakeCompleteReducer,
    taskMakeInProgress: taskMakeInProgressReducer,
    taskAddComment: taskAddCommentReducer,
    taskListComment: taskListCommentReducer,
    taskPutComment: commentTaskPutReducer,
    taskdeleteComment: commentTaskDeleteReducer,
})

const initialState = {
    
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store