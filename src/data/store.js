import { combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { farmerInfoReducer, farmerLoginReducer, farmerRegisterReducer, farmerForgotReducer, farmerResetReducer, farmerUpdateEmailReducer, farmerUpdateNamesReducer, farmerUpdatePasswordReducer, farmerDeleteReducer, farmerDeleteWorkerReducer, farmerContactSupportReducer, farmerUpdatePhotoReducer, farmerWorkerListReducer, farmerRegisterWorkerReducer, farmerCoworkerListReducer, farmerShortDetailsOwnerReducer, farmerShortDetailsWorkerReducer } from './reducers/farmerReducers';
import { commentTaskDeleteReducer, commentTaskPutReducer, noteDeleteReducer, noteGetReducer, notePostReducer, notePutReducer, taskAddCommentReducer, taskDeleteReducer, taskGetCompleteReducer, taskGetInProgressReducer, taskListCommentReducer, taskMakeCompleteReducer, taskMakeInProgressReducer, taskPostOwnReducer, taskPostWorkerReducer, taskPutReducer } from './reducers/utilsReducers';
import { animalAddReducer, animalDeleteReducer, animalListReducer, animalPutReducer, costsAddReducer, costsCategoryListReducer, costsDeleteReducer, costsListReducer, costsPutReducer, healthAddReducer, healthDeleteReducer, healthListReducer, healthPutReducer, latestCostsListReducer, singleCostCategoryReducer, speciesListReducer, speciesSearchReducer, speciesShortReducer, vaccinationAddReducer, vaccinationDeleteReducer, vaccinationListReducer, vaccinationPutReducer } from './reducers/animalReducers';
import { countedWorkersReducer, taskRatioReducer, totalCostAnimalByCategoryReducer, totalCostAnimalsReducer } from './reducers/analysisReducers';


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

    speciesList: speciesListReducer,
    speciesSearch: speciesSearchReducer,
    speciesShort: speciesShortReducer,

    animalAdd: animalAddReducer,
    animalList: animalListReducer,
    animalDelete: animalDeleteReducer,
    animalUpdate: animalPutReducer,

    costsCategoryList: costsCategoryListReducer,

    vaccinationAdd: vaccinationAddReducer,
    vaccinationList: vaccinationListReducer,
    vaccinationDelete: vaccinationDeleteReducer,
    vaccinationUpdate: vaccinationPutReducer,

    healthAdd: healthAddReducer,
    healthList: healthListReducer,
    healthDelete: healthDeleteReducer,
    healthUpdate: healthPutReducer,

    costsAdd: costsAddReducer,
    costsList: costsListReducer,
    costsDelete: costsDeleteReducer,
    costsUpdate: costsPutReducer,
    latestcostsList: latestCostsListReducer,

    countedWorkers: countedWorkersReducer,
    taskRatio: taskRatioReducer,
    totalCostAnimals: totalCostAnimalsReducer,
    totalCostAnimalCategory: totalCostAnimalByCategoryReducer,
})

const initialState = {
    
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store