import { Col, Row } from 'react-bootstrap'
import './css/myFarmPage.css'
import AnimalHouse from '../components/AnimalHouse'
import {RiHeartAddFill} from 'react-icons/ri'
import {BiSolidCartAdd} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {farmerDetails} from'../data/actions/farmerActions'
import { useNavigate } from 'react-router-dom'
import HeathStatusList from '../components/HealthStatusList'
import LatestCostsList from '../components/LatestCostsList'

function MyFarmPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo
    const farmerId = farmer?.id;


    useEffect ( () => {
        dispatch(farmerDetails())
        if(farmer){
                
        }else{
            navigate('/auth')
        }
        
    },[dispatch])

    return(
        <div className="mainDivContainer-MyFarmPage">
            <Row className='mainRow-MyFarmPage'>
                <Col md={7} className='animalsCol-MyFarmPage'>
                    <AnimalHouse farmer={farmer}/>
                </Col>

                <Col >
                    <Row className='expensesRow-MyFarmPage'>
                        <Row>
                            <Col>
                                <h5>
                                    Ostatnie koszty
                                </h5>
                            </Col>
                            <Col>
                                <div className='addExpenses-MyFarmPage'>
                                    <h5>
                                        Kwota
                                    </h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div>
                               <LatestCostsList farmer={farmerId}/>
                            </div>
                        </Row>
                        
                    </Row>

                    <Row className='healthRow-MyFarmPage'>
                        <Row className='healthTitleRow-MyFarmPage'>
                            <Col>
                                <h5>
                                    zdrowie
                                </h5>
                            </Col>
                            <Col>
                                <div className='addHealth-MyFarmPage'>
                                    <RiHeartAddFill />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                        <div>
                            <HeathStatusList farmer={farmer}/>
                        </div>
                        </Row>

                        
                    </Row>
                </Col>
            </Row>
            
        </div>
    )
}
export default MyFarmPage