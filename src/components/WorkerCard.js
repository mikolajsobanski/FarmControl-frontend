import { Button, Card, Col, Form, Row } from "react-bootstrap";
import './css/workerCard.css'
import {AiOutlineFileAdd, AiOutlineDelete} from 'react-icons/ai'
import Popup from "./Popup";
import { useState } from "react";
import FormContainer from "./FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { farmerDeleteWorker } from "../data/actions/farmerActions";
import Message from "./Message";
import Loader from "./Loader";
import { addWorkerTask } from "../data/actions/utilsActions";

function WorkerCard({ farmer, farmerId }){
    const dispatch = useDispatch()  

    //add task popup
    const [popupAddTask, setPopupAddTask] = useState('')
    const [titleTask, setTitleTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')
    const [contentTask, setContentTask] = useState('')
    const taskAddWorker = useSelector(state => state.taskAddWorker)
    const { message: messageAddWorker, loading:loadingAddWorker, error: errorAddWorker} = taskAddWorker

    const addTaskSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addWorkerTask(farmerId, farmer.id, titleTask, descriptionTask, contentTask))
    }
    
    //delete worker popup
    const [popupDeleteWorker, setPopupDeleteWorker] = useState('')
    const [passwordDeleteWorker, setPasswordDeleteWorker] = useState('')
    const [passwordConfirmDeleteWorker, setPasswordConfirmDeleteWorker] = useState('')
    const deleteWorker = useSelector(state => state.farmerDeleteWorker)
    const { message: messageDeleteWorker, loading:loadingDeleteWorker, error: errorDeleteWorker} = deleteWorker

    const deleteWorkerSubmitHandler = (e) => {
        e.preventDefault()
        if(passwordDeleteWorker === passwordConfirmDeleteWorker){
            dispatch(farmerDeleteWorker(farmerId, passwordDeleteWorker, farmer.id))
        }
    }
    return(
        <Card className="card-workerCard">
            <Popup trigger={popupAddTask} setTrigger={setPopupAddTask}>
            {loadingAddWorker && <Loader />}
            {messageAddWorker && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorAddWorker && <Message>Operacja nie powiodła się!</Message>}
                <h5>Dodaj zadanie użytkownikowi: {farmer.first_name} {farmer.last_name}</h5>
                <FormContainer>
                <Form onSubmit={addTaskSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control 
                        type="name"
                        placeholder="Podaj tytuł zadania"
                        value={titleTask}
					    onChange={(e) => setTitleTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Krótki opis</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Podaj opis zadania"
                        value={descriptionTask}
					    onChange={(e) => setDescriptionTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Treść</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={7}
                        placeholder="Podaj treść zadania"
                        value={contentTask}
					    onChange={(e) => setContentTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button className="forgot-button" type ='submit' variant='primary'>
					Dodaj
				</Button>
                </Form>
            </FormContainer>
            </Popup>
            
            <Popup trigger={popupDeleteWorker} setTrigger={setPopupDeleteWorker}>
            {loadingDeleteWorker && <Loader />}
            {messageDeleteWorker && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorDeleteWorker && <Message>Operacja nie powiodła się!</Message>}
                <h5>Chcesz usunąć pracownika {farmer.first_name} {farmer.last_name}? Podaj swoje hasło!</h5>
                <FormContainer>
                    <Form className="formDeletePopup-workerCard" onSubmit={deleteWorkerSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Podaj swoje hasło"
                                value={passwordDeleteWorker}
                                onChange={(e) => setPasswordDeleteWorker(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Powtórz swoje hasło"
                                value={passwordConfirmDeleteWorker}
                                onChange={(e) => setPasswordConfirmDeleteWorker(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Button className="buttonDeletePopup-workerCard" type ='submit' variant='primary'>
							Usuń pracownika
						</Button>
                    </Form>
                </FormContainer>
            </Popup>
            <Card.Img className="img-workerCard" src={`http://127.0.0.1:8000${farmer.photo}`} ></Card.Img>
            <Card.Body>
                <Card.Title>
                    <strong>{farmer.first_name} {farmer.last_name}</strong>
                </Card.Title>

                <Row>
                    <Col>
                    <div onClick={setPopupDeleteWorker} className="deleteIcon-workerCard">
                    <AiOutlineDelete />
                    <div className="textHoverDelete-workerCard">Usuń użytkownika {farmer.first_name} {farmer.last_name}</div>
                    </div>
                    </Col>

                    <Col>
                    <div onClick={setPopupAddTask} className="addTaskIcon-workerCard">
                    <AiOutlineFileAdd />
                    <div className="textHoverAddTask-workerCard">Dodaj zadanie dla użytkownika {farmer.first_name} {farmer.last_name}</div>
                    </div>
                    </Col>
                </Row>
                

                
            </Card.Body>
        </Card>
    )
}

export default WorkerCard