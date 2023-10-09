import { Button, Col, Form, Row } from "react-bootstrap"
import Popup from "./Popup"
import { useState } from "react"
import { FcExpired } from "react-icons/fc"
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import { MdEventAvailable } from "react-icons/md"
import "./css/vaccinationResult.css"
import FormContainer from "./FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { deleteVaccination, updateVaccination } from "../data/actions/animalActions"
import Loader from "./Loader"
import Message from "./Message"

function VaccinationResult({vaccination}){
    //dob date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
      
        const formattedDate = date.toLocaleDateString(undefined, options);
        return `${formattedDate} `;
    }
    const dispatch = useDispatch()
    const formattedDate = formatDate(vaccination.date)
    const formattedExpirationDate = formatDate(vaccination.expiration_date)
    const currentDate = new Date()

    //full info popup
    const [fullInfoPopup, setFullInfoPopup] = useState('')

    //delete
    const [deleteVaccinationPopup, setDeleteVaccinationPopup] = useState('')
    const vaccinationDelete = useSelector(state => state.vaccinationDelete)
    const { error: errorDelete, loading:loadingDelete, message: messageDelete} = vaccinationDelete
    

    const deleteVaccinationSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(deleteVaccination(vaccination.id))
	}

     
    //edit
    const [popupVaccinationEdit, setPopupVaccinationEdit] = useState('')
    const [nameEdit, setNameEdit] = useState(vaccination.name)
    const [dateEdit, setDateEdit] = useState(vaccination.date)
    const [expiration_dateEdit, setExpiration_dateEdit] = useState(vaccination.expiration_date)
    const vaccinationUpdate = useSelector(state => state.vaccinationUpdate)
    const {error: errorVaccinationUpdate, loading: loadingVaccinationUpdate, message: messageVaccinationUpdate} = vaccinationUpdate

    const updateSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateVaccination(vaccination.id, nameEdit, dateEdit, expiration_dateEdit))
	}

    
    return(
        <div >
            <Popup trigger={fullInfoPopup} setTrigger={setFullInfoPopup}>
                <div>
                    <Row>
                        <Col>
                            <AiOutlineEdit className="editIcon-VaccinationCard" onClick={setPopupVaccinationEdit}/>
                        </Col>
                        <Col>
                            <AiOutlineDelete className="deleteIcon-AnimalCard" onClick={setDeleteVaccinationPopup}/>
                        </Col>
                    </Row>
                    <h5 className="vaccinationHeader-VaccinationResult">Szczepienie</h5>
                    <h6 className="vaccinationHeaderDetail-VaccinationResult">Nazwa szczepeinia</h6>
                    <p className="center-VaccinationResult">
                        {vaccination.name}
                    </p>
                    <h6 className="vaccinationHeaderDetail-VaccinationResult">Data szczepeinia</h6>
                    <p className="center-VaccinationResult">
                        {formattedDate}
                    </p>
                    <h6 className="vaccinationHeaderDetail-VaccinationResult">Data wygasnięcia szczepeinia</h6>
                    <p className="center-VaccinationResult">
                        {formattedExpirationDate}
                    </p>
                    <h6 className="vaccinationHeaderDetail-VaccinationResult">Status szczepeinia</h6>
                    <div className="center-VaccinationResult">
                        {new Date(vaccination.expiration_date) > currentDate ? (<>Szczepienie ważne <MdEventAvailable /></>) : (<>Szczepienie nieważne <FcExpired /></>)}
                    </div>
                   
                </div>
            </Popup>
            <Popup trigger={deleteVaccinationPopup} setTrigger={setDeleteVaccinationPopup}>
            {loadingDelete && <Loader />}
            {messageDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h1 className='text-center py-4'>Usuń szczepienie</h1>
            <FormContainer>
                    <Form onSubmit={deleteVaccinationSubmitHandler}>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Usuń
						</Button>
					</Form>
                </FormContainer>
    
            </Popup>
            <Popup trigger={popupVaccinationEdit} setTrigger={setPopupVaccinationEdit}>
            {loadingVaccinationUpdate && <Loader />}
            {messageVaccinationUpdate && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorVaccinationUpdate && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h1 className='text-center py-4'>Edytuj szczepienie</h1>
            <FormContainer>
                <Form onSubmit={updateSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Nazwa:</Form.Label>
                        <Form.Control type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data szczepienia:</Form.Label>
                        <Form.Control type='date'  onChange={(e) => setDateEdit(e.target.value)} value={dateEdit} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data wygasnięcia szczepienia:</Form.Label>
                        <Form.Control type='date' onChange={(e) => setExpiration_dateEdit(e.target.value)} value={expiration_dateEdit} />
                    </Form.Group>

                    <Button className="forgot-button" type ='submit' variant='primary'>Zaktualizuj zwierzę</Button>
                </Form>
            </FormContainer>
            </Popup>
            <Row className="vaccinationNameRow-VaccinationResult" onClick={setFullInfoPopup} >   
                <Col md={9} className="vaccinationNameCol-VaccinationResults">
                    {vaccination.name}
                </Col>
        
                <Col md={3} className="center-VaccinationResult">
                    {new Date(vaccination.expiration_date) > currentDate ? <MdEventAvailable /> : <FcExpired />}
                </Col>
            </Row>
                        

                </div>
    )
}
export default VaccinationResult