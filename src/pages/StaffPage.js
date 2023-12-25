import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Carousel } from "react-bootstrap";
import './css/staffPage.css'
import { useDispatch, useSelector } from "react-redux";
import { farmerCoworkerList, farmerDetails, farmerWorkerList, registerWorker } from "../data/actions/farmerActions";
import WorkerCard from '../components/WorkerCard'
import CoworkerCard from "../components/CoworkerCard";
import Popup from "../components/Popup";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";
import NoteCard from "../components/NoteCard";
import { ListCompleteTask, ListInProgressTask, addNote, addOwnTask, listNotes } from "../data/actions/utilsActions";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

function StaffPage(){
    const dispatch = useDispatch()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const {farmer} = farmerInfo

    const workersList = useSelector(state => state.farmerWorkerList)
    const { workers, loading, error} = workersList

    const coworkersList = useSelector(state => state.farmerCoworkerList)
    const { coworkers, loading:loadingCoworkers, error: errorCoworkers} = coworkersList

    const noteList = useSelector(state => state.noteList)
    const { notes, loading:loadingNotes, error: errorNotes} = noteList

    const taskGetInProgres = useSelector(state => state.taskGetInProgres)
    const { tasks: tasksInProgres, loading:loadingInProgres, error: errorInProgres} = taskGetInProgres

    const taskGetComplete = useSelector(state => state.taskGetComplete)
    const { tasks: tasksComplete, loading:loadingComplete, error: errorComplete} = taskGetComplete


    const farmerId = farmer?.id;
    const farmerIsOwner = farmer?.is_owner

    const navigate = useNavigate()
    useEffect(() => {
        if(farmer){
                
        }else{
            navigate('/auth')
        }
        
        if(farmerIsOwner===true){
            dispatch(farmerWorkerList(farmerId))
            dispatch(listNotes(farmerId))
            dispatch(ListInProgressTask(farmerId))
            dispatch(ListCompleteTask(farmerId))
        }else if(farmerIsOwner===false){
            dispatch(farmerCoworkerList(farmerId))
            dispatch(listNotes(farmerId))
            dispatch(ListInProgressTask(farmerId))
            dispatch(ListCompleteTask(farmerId))
        }else{
            
        }

    },[dispatch, farmerId])
    

    //add worker popout
    const [popupAddWorker, setPopupAddWorker] = useState(false) 
    const [emailAddWorker, setEmailAddWorker] = useState('')
    const [first_nameAddWorker, setFirst_nameAddWorker] = useState('')
    const [last_nameAddWorker, setLast_nameAddWorker] = useState('')
    const [passwordAddWorker, setPasswordAddWorker] = useState('')
    const [passwordConfirmAddWorker, setPasswordConfirmAddWorker] = useState('')
    const farmerRegisterWorker = useSelector(state => state.farmerRegisterWorker)
    const { loading:loadingRegisterWorker, error:errorRegisterWorker, UserInfo} = farmerRegisterWorker


    const addWorkerSubmitHandler = (e) => {
		e.preventDefault()
		if(passwordAddWorker === passwordConfirmAddWorker){
            dispatch(registerWorker(first_nameAddWorker,last_nameAddWorker,emailAddWorker,passwordAddWorker, passwordConfirmAddWorker, farmerId))
        }
		
			
	}

    //add Notes popout
    const [popupAddNotes, setPopupAddNotes] = useState('')
    const [titleNotes, setTitleNotes] = useState('')
    const [contentNotes, setContentNotes] = useState('')
    const noteAdd = useSelector(state => state.noteAdd)
    const { message: messageNoteAdd, loading:loadingNoteAdd, error: errorNoteAdd} = noteAdd

    const addNoteSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addNote(farmerId, titleNotes, contentNotes))
    }

    //Tasks
    const [isDiv1Visible, setDiv1Visible] = useState(true)
    const [popupAddTask, setPopupAddTask] = useState('')
    const [titleTask, setTitleTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')
    const [contentTask, setContentTask] = useState('')
    const taskAddOwn = useSelector(state => state.taskAddOwn)
    const { message: messageTaskAdd, loading:loadingTaskAdd, error: errorTaskAdd} = taskAddOwn

    const handleToggle = () => {
        setDiv1Visible(!isDiv1Visible);
    }

    const addTaskSubmitHandler = (e) => {
        
        dispatch(addOwnTask(farmerId, titleTask, descriptionTask, contentTask))
    }

    return(
        <div className="mainDiv-staff">
            <Popup trigger={popupAddWorker} setTrigger={setPopupAddWorker}>
            {loadingRegisterWorker && <Loader />}
            {UserInfo && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorRegisterWorker && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h3 className='text-center py-4'>Dodaj swojego pracownika</h3>
            <FormContainer>
                <Form onSubmit={addWorkerSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
							placeholder='Wpisz email pracownika'
                            value={emailAddWorker}
							onChange={(e) => setEmailAddWorker(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Imie</Form.Label>
                        <Form.Control
                            type='name'
							placeholder='Wpisz imie pracownika'
                            value={first_nameAddWorker}
							onChange={(e) => setFirst_nameAddWorker(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                            type='name'
							placeholder='Wpisz nazwisko pracownika'
                            value={last_nameAddWorker}
							onChange={(e) => setLast_nameAddWorker(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz pierwsze haslo pracownika'
							value={passwordAddWorker}
							onChange={(e) => setPasswordAddWorker(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='password_confirm'>
                        <Form.Label>Powtórz hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Powtórz pierwsze haslo pracownika'
							value={passwordConfirmAddWorker}
							onChange={(e) => setPasswordConfirmAddWorker(e.target.value)}
						>

						</Form.Control>
						</Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Dodaj
						</Button>
                </Form>
            </FormContainer>
			</Popup>
            <Popup trigger={popupAddTask} setTrigger={setPopupAddTask}>
            {loadingTaskAdd && <Loader />}
            {messageTaskAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorTaskAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5 className='text-center py-4'>Dodaj sobie zadanie</h5>
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
            <Popup trigger={popupAddNotes} setTrigger={setPopupAddNotes}>
            {loadingNoteAdd && <Loader />}
            {messageNoteAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorNoteAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h5 className='text-center py-4'>Dodaj swoją notatkę</h5>
            <FormContainer>
            <Form onSubmit={addNoteSubmitHandler}>
                <Form.Group>
                    <Form.Label>Tytuł twojej notatki</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder='Wpisz swój tytuł'
                        value={titleNotes}
                        onChange={(e) => setTitleNotes(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Treść twojej notatki</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={7}
                    value={contentNotes}
					onChange={(e) => setContentNotes(e.target.value)} />
                </Form.Group>
                <Button className="forgot-button" type ='submit' variant='primary'>
					Dodaj
				</Button>
            </Form>
            </FormContainer>
			</Popup>
            <Row className="mainRow-staff">
                <Col md={7} className="col-staff">
                    <Row className="rowWorkers-staff">
                        {farmerInfo && farmer && farmer.is_owner === true ? (<>
                        <div>Pracownicy</div>
                        <Row>
                        <Carousel>
                        {workers && workers.map(worker => (
                        <Carousel.Item key={worker.id} sm={12} md={6} lg={4} xl={3}>
                            <WorkerCard farmer={worker} farmerId={farmerId}/>
                        </Carousel.Item>
                        ))}
                        </Carousel>
                        
                        <Button className="buttonAddWorker-staff" onClick={setPopupAddWorker}> Dodaj pracownika</Button>
                        </Row>
                        </>) : (<>
                        <h5>Współpracownicy</h5>
                        <Row>
                            <Carousel>
                            {coworkers && coworkers.map(coworker => (
                                <Carousel.Item key={coworker.id} sm={12} md={6} lg={4} xl={3}>
                                <CoworkerCard farmer={coworker} />
                                </Carousel.Item>
                            ))}
                            </Carousel>
                        </Row>
                        </>)}
                        
                    </Row>
                    <Row className="rowTasks-staff">
                        
                        <div>Zadania</div>
                        <h6><span>W trakcie</span><span>Ukończone</span></h6>
			          	<input onClick={handleToggle} class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
                        
                        {isDiv1Visible ? (
                            <div className="inProgressTask-staff">
                                
                                    {tasksInProgres && tasksInProgres.map(task => (
                                        <div className="inProgressTaskDiv-staff">
                                            <TaskCard key={task.id} task={task} farmer={farmer}/>
                                        </div>
                                        
                                    ))}                                
                                
                            
                            
                            
                            </div>
                        ) : (
                            <div className="inProgressTask-staff">
                            
                                    {tasksComplete && tasksComplete.map(task => (
                                        <div className="inProgressTaskDiv-staff">
                                        <TaskCard key={task.id} task={task} farmer={farmer}/>
                                        </div>
                                        
                                    ))}                                
                                
                            </div>
                        )}
                        {farmerInfo && farmer  ? <Button className="buttonAddTaskSelf-staff" onClick={setPopupAddTask}> Dodaj sobie zadanie</Button> : ''}
                    </Row>
                </Col>

                <Col md={4} className="colNotes-staff">
                    <h5>Prywatne notatki</h5>
                    {farmerInfo && farmer  ? <Button className="buttonAddNotes-staff" onClick={setPopupAddNotes}> Dodaj</Button> : ''}
                    
                    {notes && notes.map(note => (                
                            <NoteCard key={note.id} note={note} />
                    ))}
                    
                </Col>
            </Row>
        </div>
    )
}

export default StaffPage