import {
    SPECIES_GET_REQUEST,
    SPECIES_GET_SUCCESS,
    SPECIES_GET_FAIL,

    SPECIES_SEARCH_REQUEST,
    SPECIES_SEARCH_SUCCESS,
    SPECIES_SEARCH_FAIL,

    SPECIES_SHORT_REQUEST,
    SPECIES_SHORT_SUCCESS,
    SPECIES_SHORT_FAIL,


    ANIMAL_POST_REQUEST,
    ANIMAL_POST_SUCCESS,
    ANIMAL_POST_FAIL,

    ANIMAL_GET_REQUEST,
    ANIMAL_GET_SUCCESS,
    ANIMAL_GET_FAIL,

    ANIMAL_DELETE_REQUEST,
    ANIMAL_DELETE_SUCCESS,
    ANIMAL_DELETE_FAIL,

    ANIMAL_UPDATE_REQUEST,
    ANIMAL_UPDATE_SUCCESS,
    ANIMAL_UPDATE_FAIL,

    COSTS_CATEGORY_GET_REQUEST,
    COSTS_CATEGORY_GET_SUCCESS,
    COSTS_CATEGORY_GET_FAIL,

    VACCINATION_POST_REQUEST,
    VACCINATION_POST_SUCCESS,
    VACCINATION_POST_FAIL,

    VACCINATION_GET_REQUEST,
    VACCINATION_GET_SUCCESS,
    VACCINATION_GET_FAIL,

    VACCINATION_DELETE_REQUEST,
    VACCINATION_DELETE_SUCCESS,
    VACCINATION_DELETE_FAIL,

    VACCINATION_UPDATE_REQUEST,
    VACCINATION_UPDATE_SUCCESS,
    VACCINATION_UPDATE_FAIL,

    HEALTH_POST_REQUEST,
    HEALTH_POST_SUCCESS,
    HEALTH_POST_FAIL,

    HEALTH_GET_REQUEST,
    HEALTH_GET_SUCCESS,
    HEALTH_GET_FAIL,

    HEALTH_DELETE_REQUEST,
    HEALTH_DELETE_SUCCESS,
    HEALTH_DELETE_FAIL,

    HEALTH_UPDATE_REQUEST,
    HEALTH_UPDATE_SUCCESS,
    HEALTH_UPDATE_FAIL,

    COSTS_POST_REQUEST,
    COSTS_POST_SUCCESS,
    COSTS_POST_FAIL,

    COSTS_GET_REQUEST,
    COSTS_GET_SUCCESS,
    COSTS_GET_FAIL,

    COSTS_DELETE_REQUEST,
    COSTS_DELETE_SUCCESS,
    COSTS_DELETE_FAIL,

    COSTS_UPDATE_REQUEST,
    COSTS_UPDATE_SUCCESS,
    COSTS_UPDATE_FAIL,

    SINGLE_COST_CATEGORY_GET_REQUEST,
    SINGLE_COST_CATEGORY_GET_SUCCESS,
    SINGLE_COST_CATEGORY_GET_FAIL,

    LATEST_COSTS_GET_REQUEST,
    LATEST_COSTS_GET_SUCCESS,
    LATEST_COSTS_GET_FAIL,

    FARMER_ANIMAL_SPECIES_GET_REQUEST,
    FARMER_ANIMAL_SPECIES_GET_SUCCESS,
    FARMER_ANIMAL_SPECIES_GET_FAIL,

    FARMER_ANIMAL_SPECIES_RESULT_GET_REQUEST,
    FARMER_ANIMAL_SPECIES_RESULT_GET_SUCCESS,
    FARMER_ANIMAL_SPECIES_RESULT_GET_FAIL,
} from '../constants/animalConstants'

export const speciesListReducer = (state = {}, action) => {
    switch (action.type) {
        case SPECIES_GET_REQUEST:
            return { loading: true }

        case SPECIES_GET_SUCCESS:
            return { loading: false, species: action.payload }

        case SPECIES_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const speciesSearchReducer = (state = {}, action) => {
    switch (action.type) {
        case SPECIES_SEARCH_REQUEST:
            return { loading: true }

        case SPECIES_SEARCH_SUCCESS:
            return { loading: false, species: action.payload }

        case SPECIES_SEARCH_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const speciesShortReducer = (state = {}, action) => {
    switch (action.type) {
        case SPECIES_SHORT_REQUEST:
            return { loading: true }

        case SPECIES_SHORT_SUCCESS:
            return { loading: false, species: action.payload }

        case SPECIES_SHORT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const animalAddReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_POST_REQUEST:
            return { loading: true }

        case ANIMAL_POST_SUCCESS:
            return { loading: false, animal: action.payload.animal, message: action.payload.message }

        case ANIMAL_POST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const animalListReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_GET_REQUEST:
            return { loading: true }

        case ANIMAL_GET_SUCCESS:
            return { loading: false, animals: action.payload }

        case ANIMAL_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const animalDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_DELETE_REQUEST:
            return { loading: true }

        case ANIMAL_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case ANIMAL_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}


export const animalPutReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_UPDATE_REQUEST:
            return { loading: true }

        case ANIMAL_UPDATE_SUCCESS:
            return { loading: false, message: action.payload }

        case ANIMAL_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const costsCategoryListReducer = (state = {}, action) => {
    switch (action.type) {
        case COSTS_CATEGORY_GET_REQUEST:
            return { loading: true }

        case COSTS_CATEGORY_GET_SUCCESS:
            return { loading: false, category: action.payload }

        case COSTS_CATEGORY_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}


export const vaccinationAddReducer = (state = {}, action) => {
    switch (action.type) {
        case VACCINATION_POST_REQUEST:
            return { loading: true }

        case VACCINATION_POST_SUCCESS:
            return { loading: false,  message: action.payload.message }

        case VACCINATION_POST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const vaccinationListReducer = (state = {}, action) => {
    switch (action.type) {
        case VACCINATION_GET_REQUEST:
            return { loading: true }

        case VACCINATION_GET_SUCCESS:
            return { loading: false, vaccinations: action.payload }

        case VACCINATION_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const vaccinationDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case VACCINATION_DELETE_REQUEST:
            return { loading: true }

        case VACCINATION_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case VACCINATION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}


export const vaccinationPutReducer = (state = {}, action) => {
    switch (action.type) {
        case VACCINATION_UPDATE_REQUEST:
            return { loading: true }

        case VACCINATION_UPDATE_SUCCESS:
            return { loading: false, message: action.payload }

        case VACCINATION_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const healthAddReducer = (state = {}, action) => {
    switch (action.type) {
        case HEALTH_POST_REQUEST:
            return { loading: true }

        case HEALTH_POST_SUCCESS:
            return { loading: false,  message: action.payload.message }

        case HEALTH_POST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const healthListReducer = (state = {}, action) => {
    switch (action.type) {
        case HEALTH_GET_REQUEST:
            return { loading: true }

        case HEALTH_GET_SUCCESS:
            return { loading: false, healths: action.payload }

        case HEALTH_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const healthDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case HEALTH_DELETE_REQUEST:
            return { loading: true }

        case HEALTH_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case HEALTH_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const costsAddReducer = (state = {}, action) => {
    switch (action.type) {
        case COSTS_POST_REQUEST:
            return { loading: true }

        case COSTS_POST_SUCCESS:
            return { loading: false,  message: action.payload.message }

        case COSTS_POST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const costsListReducer = (state = {}, action) => {
    switch (action.type) {
        case COSTS_GET_REQUEST:
            return { loading: true }

        case COSTS_GET_SUCCESS:
            return { loading: false, costs: action.payload }

        case COSTS_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const costsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case COSTS_DELETE_REQUEST:
            return { loading: true }

        case COSTS_DELETE_SUCCESS:
            return { loading: false, message: action.payload }

        case COSTS_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const healthPutReducer = (state = {}, action) => {
    switch (action.type) {
        case HEALTH_UPDATE_REQUEST:
            return { loading: true }

        case HEALTH_UPDATE_SUCCESS:
            return { loading: false, message: action.payload }

        case HEALTH_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}



export const costsPutReducer = (state = {}, action) => {
    switch (action.type) {
        case COSTS_UPDATE_REQUEST:
            return { loading: true }

        case COSTS_UPDATE_SUCCESS:
            return { loading: false, message: action.payload }

        case COSTS_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const latestCostsListReducer = (state = {}, action) => {
    switch (action.type) {
        case LATEST_COSTS_GET_REQUEST:
            return { loading: true }

        case LATEST_COSTS_GET_SUCCESS:
            return { loading: false, latestcosts: action.payload }

        case LATEST_COSTS_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerAnimalSpeciesListReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_ANIMAL_SPECIES_GET_REQUEST:
            return { loading: true }

        case FARMER_ANIMAL_SPECIES_GET_SUCCESS:
            return { loading: false, farmerAnimalspecies: action.payload }

        case FARMER_ANIMAL_SPECIES_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const farmerAnimalSpeciesResultListReducer = (state = {}, action) => {
    switch (action.type) {
        case FARMER_ANIMAL_SPECIES_RESULT_GET_REQUEST:
            return { loading: true }

        case FARMER_ANIMAL_SPECIES_RESULT_GET_SUCCESS:
            return { loading: false, farmerAnimalspeciesresult: action.payload }

        case FARMER_ANIMAL_SPECIES_RESULT_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}