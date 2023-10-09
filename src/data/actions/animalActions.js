import axios from 'axios'
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
} from '../constants/animalConstants'

export const ListSpecies = () => async (dispatch) => {
    try{
        dispatch({
            type: SPECIES_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/species')
            
        dispatch({
            type:SPECIES_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:SPECIES_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const SearchSpecies = (query) => async (dispatch) => {
    try{
        dispatch({
            type: SPECIES_SEARCH_REQUEST,
        })
       
        const response= await axios.get('core/animals/species/search', {params: {
            query: query,
          },})
            
        dispatch({
            type:SPECIES_SEARCH_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:SPECIES_SEARCH_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ShortSpecies = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: SPECIES_SHORT_REQUEST,
        })
       
        const response= await axios.get('core/animals/species/short', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:SPECIES_SHORT_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:SPECIES_SHORT_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addAnimal = (formData) => async (dispatch) => {
    try{
        dispatch({
            type: ANIMAL_POST_REQUEST
        })
       
        const response= await axios.post('core/animals/animal', formData)
        
        dispatch({
            type:ANIMAL_POST_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:ANIMAL_POST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListAnimals = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: ANIMAL_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/animal', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:ANIMAL_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:ANIMAL_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteAnimal = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: ANIMAL_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/animals/animal', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:ANIMAL_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:ANIMAL_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateAnimal = (pk_animal, status, name,  sex, dob) => async (dispatch) => {
    try{
        dispatch({
            type: ANIMAL_UPDATE_REQUEST
        })

        const response= await axios.put('core/animals/animal', {"pk_animal": pk_animal, "status": status, "name": name,  "sex": sex, "dob": dob })
        
        dispatch({
            type:ANIMAL_UPDATE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:ANIMAL_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListCostsCategory = () => async (dispatch) => {
    try{
        dispatch({
            type: COSTS_CATEGORY_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/costscategory')
            
        dispatch({
            type:COSTS_CATEGORY_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:COSTS_CATEGORY_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addVaccination = (pk_animal, name, date, expiration_date) => async (dispatch) => {
    try{
        dispatch({
            type: VACCINATION_POST_REQUEST
        })
       
        const response= await axios.post('core/animals/vaccination', {"pk_animal": pk_animal, "name": name,  "date": date, "expiration_date": expiration_date})
        
        dispatch({
            type:VACCINATION_POST_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:VACCINATION_POST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListVacination = (pk_animal) => async (dispatch) => {
    try{
        dispatch({
            type: VACCINATION_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/vaccination', {params: {
            pk_animal: pk_animal,
          },})
            
        dispatch({
            type:VACCINATION_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:VACCINATION_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteVaccination = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: VACCINATION_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/animals/vaccination', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:VACCINATION_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:VACCINATION_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateVaccination = (pk_vaccination, name, date, expiration_date) => async (dispatch) => {
    try{
        dispatch({
            type: VACCINATION_UPDATE_REQUEST
        })

        const response= await axios.put('core/animals/vaccination', {"pk_vaccination": pk_vaccination, "name": name,  "date": date, "expiration_date": expiration_date})
        
        dispatch({
            type:VACCINATION_UPDATE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:VACCINATION_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addHealth = (pk_animal, name, description) => async (dispatch) => {
    try{
        dispatch({
            type: HEALTH_POST_REQUEST
        })
       
        const response= await axios.post('core/animals/health', {"pk_animal": pk_animal, "name": name,  "description": description})
        
        dispatch({
            type:HEALTH_POST_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:HEALTH_POST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListHealth = (pk_animal) => async (dispatch) => {
    try{
        dispatch({
            type: HEALTH_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/health', {params: {
            pk_animal: pk_animal,
          },})
            
        dispatch({
            type:HEALTH_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:HEALTH_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteHealth = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: HEALTH_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/animals/health', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:HEALTH_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:HEALTH_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateHealth = (pk_health, name, description) => async (dispatch) => {
    try{
        dispatch({
            type: HEALTH_UPDATE_REQUEST
        })

        const response= await axios.put('core/animals/health', {"pk_health": pk_health, "name": name,  "description": description})
        
        dispatch({
            type:HEALTH_UPDATE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:HEALTH_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addCosts = (pk_animal, name, amount, category) => async (dispatch) => {
    try{
        dispatch({
            type: COSTS_POST_REQUEST
        })
       
        const response= await axios.post('core/animals/costs', {"pk_animal": pk_animal, "name": name,  "amount": amount, "category": category})
        
        dispatch({
            type:COSTS_POST_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:COSTS_POST_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListCosts = (pk_animal) => async (dispatch) => {
    try{
        dispatch({
            type: COSTS_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/costs', {params: {
            pk_animal: pk_animal,
          },})
            
        dispatch({
            type:COSTS_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:COSTS_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const ListLatestCosts = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: LATEST_COSTS_GET_REQUEST,
        })
       
        const response= await axios.get('core/animals/latestcosts', {params: {
            pk: pk,
          },})
            
        dispatch({
            type:LATEST_COSTS_GET_SUCCESS,
            payload: response.data
        })

    }catch(error){
        dispatch({
            type:LATEST_COSTS_GET_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteCosts = (pk) => async (dispatch) => {
    try{
        dispatch({
            type: COSTS_DELETE_REQUEST
        })
       
        const response= await axios.delete('core/animals/costs', {params: {
            pk: pk,
          },})
        
        dispatch({
            type:COSTS_DELETE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:COSTS_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateCosts = (pk_cost, name, amount, category) => async (dispatch) => {
    try{
        dispatch({
            type: COSTS_UPDATE_REQUEST
        })

        const response= await axios.put('core/animals/costs', {"pk_cost": pk_cost, "name": name,  "amount": amount, "category": category})
        
        dispatch({
            type:COSTS_UPDATE_SUCCESS,
            payload: response.data.message
        })

    }catch(error){
        dispatch({
            type:COSTS_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}