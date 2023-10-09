import { useEffect } from "react"
import { ListHealth } from "../data/actions/animalActions"
import { useDispatch, useSelector } from "react-redux"
import HealthResult from "./HealthResult"
import './css/healthResult.css'


function HealthList({pk_animal}){
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(ListHealth(pk_animal))
    },[dispatch])

    const healthList = useSelector(state => state.healthList)
    const { error, loading, healths} = healthList


    return(
        <div className="mainDiv-HealthList">
            {healths && healths.map(health => (
                <div>   
                    <HealthResult health={health}/>
                </div>
                    
            ))}
            
        </div>
    )
}
export default HealthList