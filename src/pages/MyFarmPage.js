import { Col, Row } from 'react-bootstrap'
import './css/myFarmPage.css'
import AnimalHouse from '../components/AnimalHouse'
import {RiHeartAddFill} from 'react-icons/ri'
import {BiSolidCartAdd} from 'react-icons/bi'

function MyFarmPage(){

    return(
        <div className="mainDivContainer-MyFarmPage">
            <Row className='mainRow-MyFarmPage'>
                <Col md={7} className='animalsCol-MyFarmPage'>
                    <AnimalHouse />
                </Col>

                <Col >
                    <Row className='expensesRow-MyFarmPage'>
                        <Row>
                            <Col>
                                <h5>
                                    Koszty
                                </h5>
                            </Col>
                            <Col>
                                <div className='addExpenses-MyFarmPage'>
                                    <BiSolidCartAdd />
                                </div>
                            </Col>
                        </Row>
                        
                    </Row>

                    <Row className='healthRow-MyFarmPage'>
                    <Row>
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
                    </Row>
                </Col>
            </Row>
            
        </div>
    )
}
export default MyFarmPage