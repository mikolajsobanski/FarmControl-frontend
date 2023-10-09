import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Row } from "react-bootstrap"
import LatestCostsListResult from "./LatestCostsListResult"
import './css/costsListResult.css'
import { ListLatestCosts } from "../data/actions/animalActions"

function LatestCostsList({farmer}){

    const dispatch = useDispatch()
    const latestcostsList = useSelector(state => state.latestcostsList)
    const { error, loading, latestcosts} = latestcostsList
    
  
    useEffect(() =>{
        
        dispatch(ListLatestCosts(farmer.id))
        
      },[dispatch])
    return(
        <div className="mainDiv-LatestCostsList">
            <Row>
            {latestcosts && latestcosts.map(cost => (
                <div>
                    <LatestCostsListResult cost={cost} />
                </div>
            ))}
            </Row>
        </div>
    )
}
export default LatestCostsList