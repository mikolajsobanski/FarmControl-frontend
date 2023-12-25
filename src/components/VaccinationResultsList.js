import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { ListVacination } from "../data/actions/animalActions"
import VaccinationResult from "./VaccinationResult"



function VaccinationResultsList({pk_animal}){
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(ListVacination(pk_animal))
    },[dispatch])

    const vaccinationList = useSelector(state => state.vaccinationList)
    const { error, loading, vaccinations} = vaccinationList
    

    

    return(
        <div className="mainDiv-VaccinationResultsList">
            <Row>
                <Col md={9}>
                    Nazwa szczepienia
                </Col>

                <Col md={3}>
                    Status
                </Col>
            </Row>
            <div >
            {vaccinations && vaccinations.map(vaccination => (
                <div>   
                    <VaccinationResult vaccination={vaccination}/>
                </div>
                    
            ))}
            </div>
            
        </div>
    )
}
export default VaccinationResultsList