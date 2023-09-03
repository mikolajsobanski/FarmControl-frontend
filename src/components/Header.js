import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from 'react-bootstrap'
import {farmerDetails} from'../data/actions/farmerActions'


function Header() {
    const dispatch = useDispatch()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo



    useEffect ( () => {
        dispatch(farmerDetails())
        
    },[dispatch])
  return (
        
          <Container>
            <Row>
              <Col className="text-center py-4">{farmer && farmer.first_name ? `${farmer.first_name}  ${farmer.last_name}`  : 'Zaloguj się!'}</Col>
            </Row>
          </Container>
        
  )
}

export default Header