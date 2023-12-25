import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai"
import { BsFillHeartbreakFill } from "react-icons/bs"
import "./css/healthStatusListResult.css"
import Popup from "./Popup";
import { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { ListCostsCategory, addCosts, addHealth, addVaccination, updateAnimal } from "../data/actions/animalActions";
import DisplayFarmerDetailsOwner from "./DisplayFarmerDetailsOwner";
import DisplaySpeciesName from "./DisplaySpeciesName";
import FormatDate from "./FormatDate";
import HealthList from "./HealthList";
import VaccinationResultsList from "./VaccinationResultsList";
import AnimalCardAnalysis from "./AnimalCardAnalysis";
import SpeciesInfoCard from "./SpeciesInfoCard";
import CostsList from "./CostsList";
import Loader from "./Loader";
import Message from "./Message";

  function HeathStatusListResult({animal, categories}){
    const [popupStatus, setPopupStatus] = useState('')
    const [statusEdit, setStatusEdit] = useState(animal.status)
    const dispatch = useDispatch()
    const updateSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(updateAnimal(animal.id, statusEdit))
	}
    const formattedDobDate = FormatDate(animal.dob)
    const speciesId = animal.species

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
    return(
        <div>
            <Popup trigger={popupStatus} setTrigger={setPopupStatus}>
                
                
                    <Row>
                        <img className="animalImage-AnimalCard" src={`http://127.0.0.1:8000${animal.photo}`}></img>
                    </Row>
                    
                    <Row className="animalNameRow-AnimalCard"><h3>{animal.name}</h3></Row>

                    <Row>
                        <Col>
                        Właściciel: <DisplayFarmerDetailsOwner  pk_farmer={animal.owner}/>
                        
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

                    <FormContainer>
                        <div className="statusHealthHeader-healthStatusListResult">
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


                    <Row>
                        <h4 className="animalNameRow-AnimalCard">Koszty</h4>
                        
                        <h5 className="center-AnimalCard">Lista kosztów</h5>
                        <Row className="listOfCostsRow-AnimalCard">
                            <CostsList pk_animal={animal.id} categories={categories}/>
                        </Row>
                        <Button className="addCostButton-AnimalCard" onClick={setPopupAnimalAddCosts}>Dodaj nowy wydatek</Button>
                    </Row>
                    {Array.isArray(animal.animal_costs) && animal.animal_costs.length === 0 ? (<>
                    
                    </>):(<>
                    <Row className="pieChartRow-AnimalCard">
                        <h5 className="center-AnimalCard">Suma kosztów po kategorii</h5>
                        <AnimalCardAnalysis animalId={animal.id}/>
                    </Row>
                    </>)}
                    
                    
                    <Row>
                        <h4 className="animalNameRow-AnimalCard">Opis rasy</h4>
                        <SpeciesInfoCard speciesId={speciesId}/>
                    </Row>
                
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