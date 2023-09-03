import { Button, Card, Col, Form, Row } from "react-bootstrap";
import './css/taskCard.css'
import { useEffect, useState } from "react";
import Popup from "./Popup";
import defaultPhoto from '../assets/user-image.png'
import {AiOutlineEdit} from 'react-icons/ai'
import FormContainer from "./FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { ListCommentTask, addCommentTask, deleteTask, makeCompleteTask, makeInProgressTask, updateTask } from "../data/actions/utilsActions";
import Loader from "./Loader";
import Message from "./Message";
import DisplayFarmerDetailsOwner from "./DisplayFarmerDetailsOwner";
import DisplayFarmerDetailsWorker from "./DisplayFarmerDetailsWorker";
import TaskComment from "./TaskComment";

function TaskCard({task, farmer}){

    const dispatch = useDispatch()
    const [popupFullTask, setPopupFullTask] = useState('')


    useEffect ( () => {
        setTitleEditTask(task.title)
        setDescriptionEditTask(task.description)
        setContentEditTask(task.content)
        if(popupFullTask){
            dispatch(ListCommentTask(task.id))
        }
    },[popupFullTask])

    //popup full task
    
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
      
        const formattedDate = date.toLocaleDateString(undefined, options);
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
        return `${formattedDate} ${formattedTime}`;
    }

    const formattedCreationDateTime = formatDate(task.created_at)
    const formattedUpdateDateTime = formatDate(task.updated_at)

    //popup edit task
    const [popupEditTask, setPopupEditTask] = useState('')
    const [titleEditTask, setTitleEditTask] = useState('')
    const [descriptionEditTask, setDescriptionEditTask] = useState('')
    const [contentEditTask, setContentEditTask] = useState('')
    const taskPut = useSelector(state => state.taskPut)
    const { error: errorTaskPut, loading:loadingTaskPut, message: messageTaskPut} = taskPut


  

    const editTaskSubmitHandler = (e) => {
        
        dispatch(updateTask(task.id, titleEditTask, descriptionEditTask, contentEditTask))
    }

    //popup delete task
    const [popupDeleteTask, setPopupDeleteTask] = useState('')
    const taskDelete = useSelector(state => state.taskDelete)
    const { error: errorTaskDelete, loading:loadingTaskDelete, message: messageTaskDelete} = taskDelete

    const deleteTaskSubmitHandler = (e) => {
        
        dispatch(deleteTask(task.id))
    }

    //popup make complete task
    const [popupMakeCompleteTask, setPopupMakeCompleteTask] = useState('')
    const taskMakeComplete = useSelector(state => state.taskMakeComplete)
    const { error: errorTaskMakeComplete, loading:loadingTaskMakeComplete, message: messageTaskMakeComplete} = taskMakeComplete

    const makeCompleteTaskSubmitHandler = (e) => {
        
        dispatch(makeCompleteTask(task.id))
    }

    //popup make in progress task
    const [popupMakeInProgressTask, setPopupMakeInProgressTask] = useState('')
    const taskMakeInProgress = useSelector(state => state.taskMakeInProgress)
    const { error: errorTaskMakeInProgress, loading:loadingTaskMakeInProgress, message: messageTaskMakeInProgress} = taskMakeInProgress

    const makeInProgressTaskSubmitHandler = (e) => {
        
        dispatch(makeInProgressTask(task.id))
    }

    // add comment
    const [commentContent, setCommentContent] = useState('')

    const addCommentTaskSubmitHandler = (e) => {
        e.preventDefault()
        if(commentContent.trim() === ''){
            alert('Nie można dodać pustego komentarza!')
        }
        else{
            dispatch(addCommentTask(farmer.id, task.id, commentContent))
        }
        
    }

    //list comments
    
    const taskListComment = useSelector(state => state.taskListComment)
    const { error: errorTaskListComment, loading:loadingTaskListComment, comments: commentsTaskListComment} = taskListComment


    return(
        <div>
            <Popup trigger={popupFullTask} setTrigger={setPopupFullTask}>
            {farmer.id === task.owner ? (<><div className="editIconDiv-task" onClick={setPopupEditTask}><AiOutlineEdit /></div></>) : ''}
			
            <Row>
                <Col md={8}>
                <Row>
                        <Col md={2}>
                            Tytuł Zadania
                        </Col>
                        <Col md={10}>
                            <Card className="cardOverflow-task">
                                <Card.Body>
                                    <Card.Title>
                                        {task.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            Opis Zadania
                        </Col>
                        <Col md={10}>
                            <Card className="cardOverflow-task">
                                <Card.Body>
                                    <Card.Text>
                                        {task.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            Treść Zadania
                        </Col>
                        <Col  md={10}>
                            <Card className="cardOverflow-task">
                                <Card.Body>
                                    <Card.Text>
                                        {task.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    

                    {task.status ? (<>
                        <Row className="statusRow-task">
                            <Col md={2}>
                                <div className="statusDiv-task">Status</div>
                            </Col>
                            <Col md={3}>
                                <div className="statusCompleteDiv-task">Ukończono</div>
                            </Col>
                            <Col md={7}>
                                
                            </Col>
                        </Row>
                    </>):
                    (<>
                    <Row className="statusRow-task">
                        <Col md={2}>
                            <div className="statusDiv-task">Status</div>
                        </Col>
                        <Col md={3}>
                            <div className="statusInProgressDiv-task">W trakcie</div>
                        </Col>
                        <Col md={7}>
                           
                        </Col>
                    </Row>
                        
                       
                    </>)
                    }

                    <h5 className="comment-task">KOmentarze</h5>
                    <Row className="addCommentRow-task">
                        <Col md={2}>
                        <div className="addComment-task">
                        <img className="imgComment-task"  src={farmer ? `http://127.0.0.1:8000${farmer.photo}` : defaultPhoto} ></img>
                        </div>
                        </Col>

                        <Col md={8}>
                            <Form.Group>
                                <Form.Control
                                 type="text"
                                placeholder="Dodaj komentarz..."
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={2}>
                            <Form onSubmit={addCommentTaskSubmitHandler}>
                                <Button className="buttonAddComment-task" type ='submit' variant='primary'>Dodaj</Button>
                            </Form>
                           
                        </Col>
                    </Row>

                    {commentsTaskListComment ? (<>
                        {commentsTaskListComment && commentsTaskListComment.map(comment => (
                            <TaskComment comment={comment} farmer={farmer}/>
                             ))}      
                    </>): ''}
                    

                </Col >

                <Col md={4}>
                    <Card>
                        <Row className="taskOwnerRow-task">
                        <Col>
                        Osoba przypisana
                        </Col>

                        <Col>
                        <DisplayFarmerDetailsWorker pk_farmer={task.worker} />
                        </Col>
                        </Row>

                        <Row>
                        <Col>
                        Osoba zgłaszająca
                        </Col>
                        
                        <Col>
                        <DisplayFarmerDetailsOwner pk_farmer={task.owner}/>
                        </Col>
                        </Row>
                    </Card>
                    {task.status ? (<>
                        <Row className="buttons-task">
                            <Col>
                                <Button onClick={setPopupDeleteTask}>Usuń zadanie</Button>
                            </Col>
                            <Col>
                                <Button onClick={setPopupMakeInProgressTask}>Przywróć zadanie</Button>
                            </Col>
                        </Row>
                    
                    </>): (<>
                        <Row className="buttons-task">
                            <Col>
                                <Button onClick={setPopupMakeCompleteTask}>Ukończ zadanie</Button>
                            </Col>
                        </Row>
                    </>)}
                    
                    <Row className="creationDateRow-task">
                        <Col>
                        Utworzono
                        </Col>
                        <Col>
                        {formattedCreationDateTime}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        Edytowano
                        </Col>
                        <Col>
                        {formattedUpdateDateTime}
                        </Col>
                    </Row>
                    
                   
                </Col>
            </Row>
			</Popup>

            <Popup trigger={popupDeleteTask} setTrigger={setPopupDeleteTask}>
            {loadingTaskDelete && <Loader />}
            {messageTaskDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorTaskDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5>Chcesz usunąć zadanie o tytule: {task.title}?</h5>
            <Form onSubmit={deleteTaskSubmitHandler}>
                <Button className="forgot-button" type ='submit' variant='primary'>Usuń</Button>
            </Form>
            </Popup>

            <Popup trigger={popupMakeCompleteTask} setTrigger={setPopupMakeCompleteTask}>
            {loadingTaskMakeComplete && <Loader />}
            {messageTaskMakeComplete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorTaskMakeComplete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5>Chcesz ukończyć zadanie o tytule: {task.title}?</h5>
            <Form onSubmit={makeCompleteTaskSubmitHandler}>
                <Button className="forgot-button" type ='submit' variant='primary'>Ukończ</Button>
            </Form>
            </Popup>

            <Popup trigger={popupMakeInProgressTask} setTrigger={setPopupMakeInProgressTask}>
            {loadingTaskMakeInProgress && <Loader />}
            {messageTaskMakeInProgress && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorTaskMakeInProgress && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5>Chcesz przywrócić zadanie o tytule: {task.title}?</h5>
            <Form onSubmit={makeInProgressTaskSubmitHandler}>
                <Button className="forgot-button" type ='submit' variant='primary'>Przywróć</Button>
            </Form>
            </Popup>
            
            <Popup trigger={popupEditTask} setTrigger={setPopupEditTask}>
            <div>
            {loadingTaskPut && <Loader />}
            {messageTaskPut && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorTaskPut && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5 className='text-center py-4'>Edytuj zadanie</h5>
            <FormContainer>
                <Form onSubmit={editTaskSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control 
                        type="name"
                        placeholder="Podaj tytuł zadania"
                        value={titleEditTask}
					    onChange={(e) => setTitleEditTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Krótki opis</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Podaj opis zadania"
                        value={descriptionEditTask}
					    onChange={(e) => setDescriptionEditTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Treść</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={7}
                        placeholder="Podaj treść zadania"
                        value={contentEditTask}
					    onChange={(e) => setContentEditTask(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button className="forgot-button" type ='submit' variant='primary'>
					    Zaktualizuj
				    </Button>
                </Form>
            </FormContainer>
            </div>
            </Popup>

            <div onClick={setPopupFullTask}>
            <Card className="card-taskCard">
                <Card.Body>
                    <Card.Title>
                        {task.title}
                    </Card.Title>
                    <Card.Text className="description-taskCard">
                    {task.description}

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    )
}

export default TaskCard