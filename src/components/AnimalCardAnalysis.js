import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TotalCostAnimalByCategory } from "../data/actions/analysisActions"

import './css/animalCard.css'
import CostCategoryAnimalPie from "./charts/CostCategoryAnimalPie"


function AnimalCardAnalysis({animalId}){

    const dispatch = useDispatch()
    const totalCostAnimalCategory = useSelector(state => state.totalCostAnimalCategory)
    const {error: errortotalCostAnimalCategory, loading: loadingtotalCostAnimalCategory, costByCategory} = totalCostAnimalCategory

    useEffect(() => {
        dispatch(TotalCostAnimalByCategory(animalId))
    },[dispatch])

    return(
        <div className="mainDiv-AnimalCardAnalysis">
            <CostCategoryAnimalPie data={costByCategory} />
        </div>
    )
}
export default AnimalCardAnalysis