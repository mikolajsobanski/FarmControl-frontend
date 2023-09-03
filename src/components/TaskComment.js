import { Button, Col, Form, Row } from "react-bootstrap";
import DisplayFarmerDetailsOwner from "./DisplayFarmerDetailsOwner";
import './css/taskComment.css'
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { useDispatch } from "react-redux";
import { deleteCommentTask, updateCommentTask } from "../data/actions/utilsActions";


function TaskComment({comment, farmer}){

    const dispatch = useDispatch()

    useEffect (() => {
        setContentEditComment(comment.text)
    },[])

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
      
        const formattedDate = date.toLocaleDateString(undefined, options);
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
        return `${formattedDate} ${formattedTime}`;
    }

    const formattedUpdateDateTime = formatDate(comment.updated_at)

     //popup edit task
     const [popupEditComment, setPopupEditComment] = useState('')
     const [contentEditComment, setContentEditComment] = useState('')
     
 
 
   
 
     const editCommentSubmitHandler = (e) => {
        dispatch(updateCommentTask(comment.id, contentEditComment))
         
     }
 
     //popup delete task
     const [popupDeleteComment, setPopupDeleteComment] = useState('')
     //const CommentDelete = useSelector(state => state.CommentDelete)
     //const { error: errorCommentDelete, loading:loadingCommentDelete, message: messageCommentDelete} = CommentDelete
 
     const deleteCommentSubmitHandler = (e) => {
         dispatch(deleteCommentTask(comment.id))
         
     }


    return(
        <div className="mainDiv-taskComment">
            <Popup trigger={popupDeleteComment} setTrigger={setPopupDeleteComment}>
            
            <h5 className="headerDeleteCommentPopup-taskComment">Chcesz usunąć komentarz: "{comment.text}"?</h5>
            <Form onSubmit={deleteCommentSubmitHandler}>
                <Button className="forgot-button" type ='submit' variant='primary'>Usuń</Button>
            </Form>
            </Popup>

            <Popup trigger={popupEditComment} setTrigger={setPopupEditComment}>           
            <h5>Zaktualizuj komentarz</h5>
            <Form onSubmit={editCommentSubmitHandler}>
                <Form.Group>
                    <Form.Control 
                    as="textarea" 
                    rows={4}
                    value={contentEditComment}
					onChange={(e) => setContentEditComment(e.target.value)}
                    />
                </Form.Group>
                <Button className="forgot-button" type ='submit' variant='primary'>Zaktualizuj</Button>
            </Form>
            </Popup>

            <Row>
                <div className="ownerUpdateDiv-taskComment">
                    <div className="ownerDiv-taskComment">
                    <DisplayFarmerDetailsOwner pk_farmer={comment.owner}/>
                    </div>
                    <div>
                    {formattedUpdateDateTime}
                    </div>
                </div>
            </Row>

            <Row className="commentContentRow-taskComment">
                {comment.text}
            </Row>

            {farmer.id === comment.owner ? (<>
                <Row className="editDeleteRow-taskComment">
                    <div className="ownerUpdateDiv-taskComment">
                        <div className="editCommentDiv-taskComment" onClick={setPopupEditComment}>
                        Edytuj
                        </div>
                        <div className="deleteCommentDiv-taskComment" onClick={setPopupDeleteComment}>
                        Usun
                        </div>
                    </div>
                </Row>
            </>) : ''}
        </div>
        
        
    )
}

export default TaskComment