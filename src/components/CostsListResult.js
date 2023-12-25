import { Button, Col, Form, Row } from "react-bootstrap"
import Popup from "./Popup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { DisplaySingleCostCategory, deleteCosts, updateCosts } from "../data/actions/animalActions"
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import Loader from "./Loader"
import Message from "./Message"
import FormContainer from "./FormContainer"
import FormatDate from "./FormatDate"

function CostsListResult({cost, categories}){
    const dispatch = useDispatch()
    const [popupFullInfo, setPopupFullInfo] = useState('')

    //delete
    const [popupDelete, setPopupDelete] = useState('')
    const costsDelete = useSelector(state => state.costsDelete)
    const { error: errorDelete, loading:loadingDelete, message: messageDelete} = costsDelete
    

    const deleteHealthSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(deleteCosts(cost.id))
	}



    //edit
    const [popupEdit, setPopupEdit] = useState('')
    const [nameEdit, setNameEdit] = useState(cost.name)
    const [amountEdit, setAmountEdit] = useState(cost.amount)
    const [categoryEdit, setCategoryEdit] = useState(cost.category)
    const costsUpdate = useSelector(state => state.costsUpdate)
    const { error: errorUpdate, loading:loadingUpdate, message: messageUpdate} = costsUpdate
    

    const editHealthSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateCosts(cost.id, nameEdit, amountEdit, categoryEdit))
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
                    <h5 className="center-HealthResult">Wydatek</h5>
                    <h6  className="headerDetail-HealthResult">Nazwa wydatku</h6>
                    <p className="center-HealthResult">{cost.name}</p>
                    <h6  className="headerDetail-HealthResult">Kategoria</h6>
                    {categories.map((category) => (
                       <div>
                        {category.id === cost.category ? (<>  <p className="center-HealthResult">{category.name}</p>  </>) : ''}
                       </div>
                    ))}
                    <h6  className="headerDetail-HealthResult">Kwota</h6>
                    <p className="center-HealthResult">{cost.amount}</p>
                    <h6  className="headerDetail-HealthResult">Data dodania</h6>
                        <p className="center-HealthResult">`{FormatDate(cost.created_at)}`</p>
                </div>
            </Popup>
            <Popup trigger={popupDelete} setTrigger={setPopupDelete}>
                <div>
                {loadingDelete && <Loader />}
                {messageDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
                {errorDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
                <h5 className='text-center py-4'>Usuń wydatek</h5>
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
                <h1 className='text-center py-4'>Edytuj wydatek</h1>
                <FormContainer>
                    <Form onSubmit={editHealthSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Nazwa wydatku:</Form.Label>
                            <Form.Control type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)}/>
                        </Form.Group>

                        <div>
                            <label>Kategoria:</label>
                            <select  class="form-select"  aria-label="Default select example"  value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)}>
                            <option value="">Wybierz kategorie kosztu</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                            </select>
                        </div>
                        <Form.Group>
                            <Form.Label>Koszt:</Form.Label>
                            <Form.Control type="number" min="0" step={.01} value={amountEdit} onChange={(e) => setAmountEdit(e.target.value)}/>
                        </Form.Group>

                        <Button className="forgot-button" type ='submit' variant='primary'>Zaktualizuj</Button>
                    </Form>
                </FormContainer>
                </div>
            </Popup>
             <Row className="vaccinationNameRow-VaccinationResult" onClick={setPopupFullInfo}>   
                <Col md={6} className="vaccinationNameCol-VaccinationResults">
                    {cost.name}
                </Col>

                <Col md={3} className="center-VaccinationResult">
                    {categories.map((category) => (
                       <div>
                        {category.id === cost.category ? (<> {category.name} </>) : ''}
                       </div>
                    ))}
                </Col>
        
                <Col md={3} className="center-VaccinationResult">
                    {cost.amount}
                </Col>
            </Row>
        </div>
    )
}
export default CostsListResult