import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai"
import { BsFillHeartbreakFill } from "react-icons/bs"
import "./css/healthStatusListResult.css"
import Popup from "./Popup";
import { useState } from "react";
import FormContainer from "./FormContainer";
import { useDispatch } from "react-redux";
import { updateAnimal } from "../data/actions/animalActions";

  function HeathStatusListResult({animal}){
    const [popupStatus, setPopupStatus] = useState('')
    const [statusEdit, setStatusEdit] = useState(animal.status)
    const dispatch = useDispatch()
    const updateSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateAnimal(animal.id, statusEdit))
	}

    
    return(
        <div>
            <Popup trigger={popupStatus} setTrigger={setPopupStatus}>
                
                <FormContainer>
                <div>
                    <h5>Aktualny status zdrowia dla {animal.name}: {animal.status ? (<><div className="iconGood-healthStatusListResult"><span class="tooltiptext">Zdrowy</span><AiFillHeart /> </div></>) : (<><div className="iconIll-healthStatusListResult"><span class="tooltiptext">Chory</span><BsFillHeartbreakFill /> </div></>)}</h5>
                </div>
                    <Form onSubmit={updateSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <select class="form-select"  aria-label="Default select example" value={statusEdit} onChange={(e) => setStatusEdit(e.target.value)} >
                            <option value="">Wybierz status zwierzęcia</option>
                            <option value={true}>Zdrowy</option>
                            <option value={false}>Chory</option>
                            </select>
                        </Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Aktualizuj
						</Button>
					</Form>
                </FormContainer>
            </Popup>

             <Row className="resultRow-healthStatusListResult" onClick={setPopupStatus}>
                <Col md={9}>
                {animal.name}
                </Col>

                <Col>
                {animal.status ? (<><div className="iconGood-healthStatusListResult"><span class="tooltiptext">Zdrowy</span><AiFillHeart /> </div></>) : (<><div className="iconIll-healthStatusListResult"><span class="tooltiptext">Chory</span><BsFillHeartbreakFill /> </div></>)}
                </Col>
            </Row>
        </div>
    )
  }
  export default HeathStatusListResult