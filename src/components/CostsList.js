import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ListCosts } from "../data/actions/animalActions"
import { Col, Row } from "react-bootstrap"
import CostsListResult from "./CostsListResult"
import './css/costsListResult.css'

function CostsList({pk_animal, categories}){

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(ListCosts(pk_animal))
    },[dispatch, pk_animal])

    const costsList = useSelector(state => state.costsList)
    const { error, loading, costs} = costsList
    

    return(
        <div  className="mainDiv-CostsList">
            <Row>
                <Col md={6}>
                    Nazwa Kosztu
                </Col>

                <Col md={3} className="center-VaccinationResult">
                    Kategoria
                </Col>

                <Col md={3} className="center-VaccinationResult">
                    Kwota
                </Col>
            </Row>
            <Row>
            {costs && costs.map(cost => (
                <div>
                    <CostsListResult cost={cost} categories={categories}/>
                </div>
            ))}
            </Row>
        </div>
    )
}
export default CostsList