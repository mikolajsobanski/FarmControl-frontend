import { Button, Card, Col, Form, Row } from "react-bootstrap"
import './css/noteCard.css'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import { useEffect, useState } from "react"
import Popup from "./Popup"
import { useDispatch, useSelector } from "react-redux"
import { deleteNote, updateNote } from "../data/actions/utilsActions"
import Message from "./Message"
import Loader from "./Loader"
import FormContainer from "./FormContainer"

function NoteCard({note}){
    const dispatch = useDispatch()

    useEffect(() => {
        setTitleUpdateNotes(note.title)
        setContentUpdateNotes(note.content)
    },[])

    //delete note popup
    const [popupDeleteNote, setPopupDeleteNote] = useState(false)
    const noteDelete = useSelector(state => state.noteDelete)
    const { error: errorDeleteNote, loading:loadingDeleteNote, message: messageDeleteNote} = noteDelete

    const deleteNoteSubmitHandler = (e) => {
		e.preventDefault()
		dispatch(deleteNote(note.id))
	}

    //edit popup
    const [popupUpdateNote, setPopupUpdateNote] = useState(false)
    const [titleUpdateNotes, setTitleUpdateNotes] = useState('')
    const [contentUpdateNotes, setContentUpdateNotes] = useState('')
    const noteUpdate = useSelector(state => state.noteUpdate)
    const { error: errorUpdateNote, loading:loadingUpdateNote, message: messageUpdateNote} = noteUpdate
    
    const updateNoteSubmitHandler = (e) => {
		e.preventDefault()
		dispatch(updateNote(note.id, titleUpdateNotes, contentUpdateNotes))
	}


    return(
        <Card className="card-noteCard">
        <Popup  trigger={popupDeleteNote} setTrigger={setPopupDeleteNote}>
            {loadingDeleteNote && <Loader />}
            {messageDeleteNote && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorDeleteNote && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h5>Chcesz usunąć swoją notatkę o tytule: {note.title}?</h5>
            <Form onSubmit={deleteNoteSubmitHandler}>
                <Button className="forgot-button" type ='submit' variant='primary'>Usuń</Button>
            </Form>
            
        </Popup>
        <Popup trigger={popupUpdateNote} setTrigger={setPopupUpdateNote}>
            {loadingUpdateNote && <Loader />}
            {messageUpdateNote && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorUpdateNote && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h5 className='text-center py-4'>Zaktualizuj swoją notatkę</h5>
            <FormContainer>
            <Form onSubmit={updateNoteSubmitHandler}>
                <Form.Group>
                    <Form.Label>Tytuł twojej notatki</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder='Wpisz swój tytuł'
                        value={titleUpdateNotes}
                        onChange={(e) => setTitleUpdateNotes(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Treść twojej notatki</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={7}
                    value={contentUpdateNotes}
					onChange={(e) => setContentUpdateNotes(e.target.value)} />
                </Form.Group>
                <Button className="forgot-button" type ='submit' variant='primary'>
					Zaktualizuj
				</Button>
            </Form>
            </FormContainer>
			</Popup>
        <Card.Body>
            <Card.Title>
                <strong>{note.title}</strong>
            </Card.Title>

            <Card.Text>
                {note.content}
            </Card.Text>

            <Row>
                <Col>
                <div onClick={setPopupDeleteNote} className="leftIcon-noteCard">
                <AiOutlineDelete />
                </div>
                </Col>
                
                <Col>
                <div onClick={setPopupUpdateNote} className="rightIcon-noteCard">
                <AiOutlineEdit />
                </div>
                </Col>
                
            </Row>

        </Card.Body>
    </Card>
    )
}

export default NoteCard