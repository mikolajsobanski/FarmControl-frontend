import axios from 'axios'
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

export const CountedWorkers = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: COUNTED_WORKERS_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/countedworkers', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:COUNTED_WORKERS_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:COUNTED_WORKERS_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const TaskRatio = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TASKRATIO_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/taskratio', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TASKRATIO_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TASKRATIO_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const TotalCostAnimals = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TOTAL_COST_ANIMAL_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/animalcostsum', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TOTAL_COST_ANIMAL_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TOTAL_COST_ANIMAL_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const TotalCostAnimalByCategory = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TOTAL_COST_ANIMAL_BY_CATEGORY_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/animalcostbycategory', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TOTAL_COST_ANIMAL_BY_CATEGORY_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TOTAL_COST_ANIMAL_BY_CATEGORY_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const HealthRatio = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: HEALTH_STATUS_RATIO_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/healthratio', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:HEALTH_STATUS_RATIO_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:HEALTH_STATUS_RATIO_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const TotalCostByCategory = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TOTAL_COST_BY_CATEGORY_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/categoryCosts', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TOTAL_COST_BY_CATEGORY_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TOTAL_COST_BY_CATEGORY_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const TotalCostsMonth = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: TOTAL_COST_BY_MONTH_GET_REQUEST,
        })
       
        const response= await axios.get('analysis/costssixmonths', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:TOTAL_COST_BY_MONTH_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:TOTAL_COST_BY_MONTH_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}