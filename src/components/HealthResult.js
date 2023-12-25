import { useState } from "react"
import Popup from "./Popup"
import { Button, Col, Form, Row } from "react-bootstrap"
import './css/healthResult.css'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import FormContainer from "./FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { deleteHealth, updateHealth } from "../data/actions/animalActions"
import Loader from "./Loader"
import Message from "./Message"


function HealthResult({health}){
    const dispatch = useDispatch()
    const [popupFullInfo, setPopupFullInfo] = useState('')

    //delete
    const [popupDelete, setPopupDelete] = useState('')
    const healthDelete = useSelector(state => state.healthDelete)
    const { error: errorDelete, loading:loadingDelete, message: messageDelete} = healthDelete
    

    const deleteHealthSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(deleteHealth(health.id))
	}



    //edit
    const [popupEdit, setPopupEdit] = useState('')
    const [nameEdit, setNameEdit] = useState(health.name)
    const [descriptionEdit, setDescriptionEdit] = useState(health.description)
    const healthUpdate = useSelector(state => state.healthUpdate)
    const { error: errorUpdate, loading:loadingUpdate, message: messageUpdate} = healthUpdate
    

    const editHealthSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateHealth(health.id, nameEdit, descriptionEdit))
	}

    return(
        <div>
            <Popup trigger={popupFullInfo} setTrigger={setPopupFullInfo}>
                <div>
                    <Row>
                        <Col>
                            <AiOutlineEdit className="editIcon-VaccinationCard" onClick={setPopupEdit}/>
                        </Col>
                        <Col>
                            <AiOutlineDelete className="deleteIcon-AnimalCard" onClick={setPopupDelete}/>
                        </Col>
                    </Row>
                    <h5 className="center-HealthResult">Karta zdrowia</h5>
                    <h6  className="headerDetail-HealthResult">Nazwa Choroby</h6>
                    <p className="center-HealthResult">{health.name}</p>
                    <h6  className="headerDetail-HealthResult">Opis</h6>
                    <p className="center-HealthResult">{health.description}</p>
                </div>
            </Popup>
            <Popup trigger={popupDelete} setTrigger={setPopupDelete}>
                <div>
                {loadingDelete && <Loader />}
                {messageDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
                {errorDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
                <h5 className='text-center py-4'>Usuń wpis w histori zdrowia</h5>
                <FormContainer>
                    <Form onSubmit={deleteHealthSubmitHandler}>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Usuń
						</Button>
					</Form>
                </FormContainer>
                </div>
            </Popup>
            <Popup trigger={popupEdit} setTrigger={setPopupEdit}>
                <div>
                {loadingUpdate && <Loader />}
                {messageUpdate && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
                {errorUpdate && <Message variant='danger'>Operacja nie powiodła się!</Message>}
                <h1 className='text-center py-4'>Edytuj szczepienie</h1>
                <FormContainer>
                    <Form onSubmit={editHealthSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Nazwa choroby:</Form.Label>
                            <Form.Control type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Opis leczenia:</Form.Label>
                            <Form.Control  as="textarea" rows={7} value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)}/>
                        </Form.Group>

                        <Button className="forgot-button" type ='submit' variant='primary'>Zaktualizuj zwierzę</Button>
                    </Form>
                </FormContainer>
                </div>
            </Popup>
            <Row className="mainName-HealthResult" onClick={setPopupFullInfo}>
                <p>{health.name}</p>
            </Row>
            

        </div>
    )
}
export default HealthResult