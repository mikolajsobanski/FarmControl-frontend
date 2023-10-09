import { Button, Card, Col, Form, Row } from "react-bootstrap"
import Popup from "./Popup"
import { useEffect, useState } from "react"
import './css/animalCard.css'
import DisplayFarmerDetailsOwner from "./DisplayFarmerDetailsOwner"
import AnimalDiscoverCard from "./AnimalDiscoverCard"
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import DisplaySpeciesName from "./DisplaySpeciesName"
import SpeciesInfoCard from "./SpeciesInfoCard"
import FormContainer from "./FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { ListCostsCategory, addCosts, addHealth, addVaccination, deleteAnimal, updateAnimal } from "../data/actions/animalActions"
import Loader from "./Loader"
import Message from "./Message"
import VaccinationResults from "./VaccinationResultsList"
import VaccinationResultsList from "./VaccinationResultsList"
import HealthList from "./HealthList"
import CostsList from "./CostsList"
import CostCategoryAnimalPie from "./charts/CostCategoryAnimalPie"
import { TotalCostAnimalByCategory } from "../data/actions/analysisActions"
import AnimalCardAnalysis from "./AnimalCardAnalysis"
import FormatDate from "./FormatDate"

function AnimalCard({animal, categories}){
    const dispatch = useDispatch()
    const [popupAnimal, setPopupAnimal] = useState('')
    const speciesId = animal.species
    

    const formattedDobDate = FormatDate(animal.dob)
    
    //edit
    const [popupAnimalEdit, setPopupAnimalEdit] = useState('')
    const [nameEdit, setNameEdit] = useState(animal.name)
    const [dobEdit, setDobEdit] = useState(animal.dob)
    const [sexEdit, setSexEdit] = useState(animal.sex)
    const [photoEdit, setPhotoEdit] = useState(animal.photo)
    const [statusEdit, setStatusEdit] = useState(animal.status)

    const updateSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateAnimal(animal.id, statusEdit, nameEdit, sexEdit, dobEdit))
        console.log(nameEdit, dobEdit, sexEdit)
	}

    
    //delete
    const [popupAnimalDelete, setPopupAnimalDelete] = useState('')
    const animalDelete = useSelector(state => state.animalDelete)
    const { error: errorDelete, loading:loadingDelete, message: messageDelete} = animalDelete
    

    const deleteSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(deleteAnimal(animal.id))
	}

    // add vaccination
    const [popupAnimalAddVaccination, setPopupAnimalAddVaccination] = useState('')
    const [vaccinationName, setVaccinationName] = useState('')
    const [vaccinationDate, setVaccinationDate] = useState('')
    const [vaccinationExpirationDate, setVaccinationExpirationDate] = useState('')
    const vaccinationAdd = useSelector(state => state.vaccinationAdd)
    const {error: errorVaccinationAdd, loading: loadingVaccinationAdd, message: messageVaccinationAdd} = vaccinationAdd

    

    const addVaccinationSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(addVaccination(animal.id, vaccinationName, vaccinationDate, vaccinationExpirationDate))
        
    }

    //add health
    const [popupAnimalAddHealth, setPopupAnimalAddHealth] = useState('')
    const [healthName, setHealthName] = useState('')
    const [healthDescription, setHealthDescription] = useState('')
    const healthAdd = useSelector(state => state.healthAdd)
    const {error: errorHealthAdd, loading: loadingHealthAdd, message: messageHealthAdd} = healthAdd

    

    const addHeathSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(addHealth(animal.id, healthName, healthDescription))
        
    }


    //add costs
    const [popupAnimalAddCosts, setPopupAnimalAddCosts] = useState('')
    const [costName, setCostName] = useState('')
    const [costCategory, setCostCategory] = useState('')
    const [costAmount, setCostAmount] = useState('')

    const costsAdd = useSelector(state => state.costsAdd)
    const {error: errorCostsAdd, loading: loadingCostsAdd, message: messageCostsAdd} = costsAdd

    

    const addCostsSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(addCosts(animal.id, costName, costAmount, costCategory))
        
    }

    

    return(
        <Card className="card-animalDiscoverCard">
            <Popup trigger={popupAnimal} setTrigger={setPopupAnimal}>
                <div>
                    
                    <Row>
                    <Col>
                        <AiOutlineEdit className="editIcon-AnimalCard" onClick={setPopupAnimalEdit}/>
                    </Col>
                    <Col>
                        <AiOutlineDelete className="deleteIcon-AnimalCard" onClick={setPopupAnimalDelete}/>
                    </Col>
                    </Row>
                    <Row>
                        <img className="animalImage-AnimalCard" src={`http://127.0.0.1:8000${animal.photo}`}></img>
                    </Row>
                    
                    <Row className="animalNameRow-AnimalCard"><h3>{animal.name}</h3></Row>

                    <Row>
                        <Col>
                        Właściciel: <DisplayFarmerDetailsOwner  pk_farmer={animal.owner}/>
                        
                        </Col>
                        <Col>
                        Rasa: <DisplaySpeciesName speciesId={speciesId}/>
                        </Col>
                        <Col>
                        Płeć: {animal.sex}
                        </Col>
                        
                    </Row>

                    <Row>
                        
                        <Col>
                        Status: {animal.status ? 'Zdrowy' : 'Chory'}
                        </Col>
                        <Col>
                        Data urodzenia: {formattedDobDate}
                        </Col>
                    </Row>

                    <Row>
                        <h4 className="animalNameRow-AnimalCard">Zdrowie</h4>
                        <Col>
                            <h5 className="center-AnimalCard">Historia zdrowia</h5>
                            <Row className="listOfCostsRow-AnimalCard">
                                <HealthList pk_animal={animal.id}/>
                            </Row>
                            <Button className="centerButton-AnimalCard" onClick={setPopupAnimalAddHealth}>Dodaj</Button>
                        </Col>
                        <Col>
                            <h5 className="center-AnimalCard">Historia szczepień</h5>
                            <Row className="listOfCostsRow-AnimalCard">
                                <VaccinationResultsList pk_animal={animal.id} />
                            </Row>
                            <Button className="centerButton-AnimalCard" onClick={setPopupAnimalAddVaccination}>Dodaj</Button>
                        </Col>
                    </Row>

                    <Row>
                        <h4 className="animalNameRow-AnimalCard">Koszty</h4>
                        
                            <h5 className="center-AnimalCard">Lista kosztów</h5>
                            <Row className="listOfCostsRow-AnimalCard">
                                <CostsList pk_animal={animal.id} categories={categories}/>
                            </Row>
                            <Button className="addCostButton-AnimalCard" onClick={setPopupAnimalAddCosts}>Dodaj nowy wydatek</Button>
                        
                            
                        
                    </Row>

                    <Row className="pieChartRow-AnimalCard">
                        <h5 className="center-AnimalCard">Suma kosztów po kategorii</h5>
                        <AnimalCardAnalysis animalId={animal.id}/>
                    </Row>
                    
                    <Row>
                        <h4 className="animalNameRow-AnimalCard">Opis rasy</h4>
                        <SpeciesInfoCard speciesId={speciesId}/>
                    </Row>
                </div>
            </Popup>
            <Popup trigger={popupAnimalEdit} setTrigger={setPopupAnimalEdit}>
            <h1 className='text-center py-4'>Edytuj {animal.name}</h1>
            <FormContainer>
                <Form onSubmit={updateSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Nazwa zwierzęcia:</Form.Label>
                        <Form.Control type="text" name="name" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Płeć:</Form.Label>
                        <select name="sex" class="form-select"  aria-label="Default select example" value={sexEdit} onChange={(e) => setSexEdit(e.target.value)} >
                        <option value="">Wybierz płeć zwierzęcia</option>
                        <option value="Męska">Męska</option>
                        <option value="Damska">Damska</option>
                        <option value="Nieznana">Nieznana</option>
                        </select>
                    </Form.Group>

                    <Form.Group controlId="imageUpload">
                        <Form.Label>Dodaj zdjęcie swojego zwierzęcia:</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={photoEdit}
                        />
                        <input type="file" name="photo" onChange={(e) => setPhotoEdit(e.target.files[0])}  />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data urodzenia:</Form.Label>
                        <Form.Control type='date' name="dob" onChange={(e) => setDobEdit(e.target.value)} value={dobEdit} />
                    </Form.Group>

                    <Button className="forgot-button" type ='submit' variant='primary'>Zaktualizuj zwierzę</Button>
                </Form>
            </FormContainer>
            </Popup>
            <Popup trigger={popupAnimalDelete} setTrigger={setPopupAnimalDelete}>
            {loadingDelete && <Loader />}
            {messageDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h1 className='text-center py-4'>Usuń {animal.name} z gospodarstwa</h1>
                <FormContainer>
                    <Form onSubmit={deleteSubmitHandler}>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Usuń zwierzę
						</Button>
					</Form>
                </FormContainer>
            </Popup>
            <Popup trigger={popupAnimalAddVaccination} setTrigger={setPopupAnimalAddVaccination}>
            {loadingVaccinationAdd && <Loader />}
            {messageVaccinationAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorVaccinationAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h4 className='text-center py-4'>Dodaj szczepienie dla {animal.name}</h4>
            <FormContainer>
                <Form onSubmit={addVaccinationSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Nazwa szczepienia</Form.Label>
                        <Form.Control type="text" value={vaccinationName} onChange={(e) => setVaccinationName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Data podania szczepienia:</Form.Label>
                        <Form.Control type='date'  onChange={(e) => setVaccinationDate(e.target.value)} value={vaccinationDate} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Data ważności szczepienia:</Form.Label>
                        <Form.Control type='date' onChange={(e) => setVaccinationExpirationDate(e.target.value)} value={vaccinationExpirationDate} />
                    </Form.Group>

                    <Button className="forgot-button" type ='submit' variant='primary'>
						Dodaj
					</Button>
                </Form>
            </FormContainer>
            </Popup>
            <Popup trigger={popupAnimalAddHealth} setTrigger={setPopupAnimalAddHealth}>
            {loadingHealthAdd && <Loader />}
            {messageHealthAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorHealthAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h4 className='text-center py-4'>Dodaj historie zdrowia dla {animal.name}</h4>
                <FormContainer>
                    <Form onSubmit={addHeathSubmitHandler}>
                    <Form.Group>
                        <Form.Label>Nazwa szczepienia</Form.Label>
                        <Form.Control type="text" value={healthName} onChange={(e) => setHealthName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Opis leczenia</Form.Label>
                        <Form.Control  as="textarea" rows={7} value={healthDescription} onChange={(e) => setHealthDescription(e.target.value)}/>
                    </Form.Group>
                    <Button className="forgot-button" type ='submit' variant='primary'>
						Dodaj
					</Button>
                    </Form>
                </FormContainer>
            </Popup>
            <Popup trigger={popupAnimalAddCosts} setTrigger={setPopupAnimalAddCosts}>
            {loadingCostsAdd && <Loader />}
            {messageCostsAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorCostsAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
            <h4 className='text-center py-4'>Dodaj wydatek dla {animal.name}</h4>
                <FormContainer>
                    <Form onSubmit={addCostsSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Opis wydatku:</Form.Label>
                            <Form.Control as="textarea" rows={4} value={costName} onChange={(e) => setCostName(e.target.value)}/>
                        </Form.Group>
                        <div>
                            <label>Kategoria:</label>
                            <select  class="form-select"  aria-label="Default select example"  value={costCategory} onChange={(e) => setCostCategory(e.target.value)}>
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
                            <Form.Control type="number" min="0" step={.01} value={costAmount} onChange={(e) => setCostAmount(e.target.value)}/>
                        </Form.Group>
                        <Button className="forgot-button" type ='submit' variant='primary'>
						    Dodaj
					    </Button>
                    </Form>
                </FormContainer>
            </Popup>

            <Card.Body className="bodyCard-animalDiscoverCard" onClick={setPopupAnimal}>
            <Card.Img className="img-animalDiscoverCard"  src={`http://127.0.0.1:8000${animal.photo}`}></Card.Img>
                <Card.Title className="title-animalDiscoverCard">
                    <strong>{animal.name}</strong>
                </Card.Title>
            </Card.Body>
            
        </Card>
    )
}
export default AnimalCard