import {
    COUNTED_WORKERS_GET_REQUEST,
    COUNTED_WORKERS_GET_SUCCESS,
    COUNTED_WORKERS_GET_FAIL,

    TASKRATIO_GET_REQUEST,
    TASKRATIO_GET_SUCCESS,
    TASKRATIO_GET_FAIL,

    HEALTH_STATUS_RATIO_GET_REQUEST,
    HEALTH_STATUS_RATIO_GET_SUCCESS,
    HEALTH_STATUS_RATIO_GET_FAIL,

    TOTAL_COST_ANIMAL_GET_REQUEST,
    TOTAL_COST_ANIMAL_GET_SUCCESS,
    TOTAL_COST_ANIMAL_GET_FAIL,

    TOTAL_COST_ANIMAL_BY_CATEGORY_GET_REQUEST,
    TOTAL_COST_ANIMAL_BY_CATEGORY_GET_SUCCESS,
    TOTAL_COST_ANIMAL_BY_CATEGORY_GET_FAIL,

    TOTAL_COST_BY_CATEGORY_GET_REQUEST,
    TOTAL_COST_BY_CATEGORY_GET_SUCCESS,
    TOTAL_COST_BY_CATEGORY_GET_FAIL,

    TOTAL_COST_BY_MONTH_GET_REQUEST,
    TOTAL_COST_BY_MONTH_GET_SUCCESS,
    TOTAL_COST_BY_MONTH_GET_FAIL,
} from '../constants/analysisConstants'

export const countedWorkersReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNTED_WORKERS_GET_REQUEST:
            return { loading: true }

        case COUNTED_WORKERS_GET_SUCCESS:
            return { loading: false, countedworkers: action.payload }

        case COUNTED_WORKERS_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskRatioReducer = (state = {}, action) => {
    switch (action.type) {
        case TASKRATIO_GET_REQUEST:
            return { loading: true }

        case TASKRATIO_GET_SUCCESS:
            return { loading: false, inProgres: action.payload.inProgres, complete: action.payload.complete }

        case TASKRATIO_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const totalCostAnimalsReducer = (state = {}, action) => {
    switch (action.type) {
        case TOTAL_COST_ANIMAL_GET_REQUEST:
            return { loading: true }

        case TOTAL_COST_ANIMAL_GET_SUCCESS:
            return { loading: false, totalCosts: action.payload }

        case TOTAL_COST_ANIMAL_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const totalCostAnimalByCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case TOTAL_COST_ANIMAL_BY_CATEGORY_GET_REQUEST:
            return { loading: true }

        case TOTAL_COST_ANIMAL_BY_CATEGORY_GET_SUCCESS:
            return { loading: false, costByCategory: action.payload }

        case TOTAL_COST_ANIMAL_BY_CATEGORY_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const healthRatioReducer = (state = {}, action) => {
    switch (action.type) {
        case HEALTH_STATUS_RATIO_GET_REQUEST:
            return { loading: true }

        case HEALTH_STATUS_RATIO_GET_SUCCESS:
            return { loading: false, healthy: action.payload.healthy, ill: action.payload.ill }

        case HEALTH_STATUS_RATIO_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const totalCostByCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case TOTAL_COST_BY_CATEGORY_GET_REQUEST:
            return { loading: true }

        case TOTAL_COST_BY_CATEGORY_GET_SUCCESS:
            return { loading: false, costsByCategory: action.payload }

        case TOTAL_COST_BY_CATEGORY_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const totalCostMonthReducer = (state = {}, action) => {
    switch (action.type) {
        case TOTAL_COST_BY_MONTH_GET_REQUEST:
            return { loading: true }

        case TOTAL_COST_BY_MONTH_GET_SUCCESS:
            return { loading: false, monthly_costs: action.payload.monthly_costs }

        case TOTAL_COST_BY_MONTH_GET_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}