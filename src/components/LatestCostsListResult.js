import { Button, Col, Form, Row } from "react-bootstrap"
import Popup from "./Popup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { DisplaySingleCostCategory, deleteCosts, updateCosts } from "../data/actions/animalActions"
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import Loader from "./Loader"
import Message from "./Message"
import FormContainer from "./FormContainer"

function LatestCostsListResult({cost}){
   
    
    return(
        <div>
    
             <Row className="vaccinationNameRow-VaccinationResult" >   
                <Col md={9} className="vaccinationNameCol-VaccinationResults">
                    {cost.name}
                </Col>

        
                <Col md={3} className="center-VaccinationResult">
                    {cost.amount}
                </Col>
            </Row>
        </div>
    )
}
export default LatestCostsListResult