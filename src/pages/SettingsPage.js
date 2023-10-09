import React, {useEffect, useState} from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import {farmerDetails, farmerEmailUpdate, farmer, farmerNamesUpdate, farmerPasswordUpdate, farmerDelete, farmerContactSupport, farmerPhotoUpdate} from'../data/actions/farmerActions'
import './css/settingsPage.css'
import Popup from "../components/Popup";
import FormContainer from "../components/FormContainer";
import defaultPhoto from '../assets/user-image.png'
import axios from "axios"
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useNavigate } from "react-router-dom";
import DisplayFarmerDetailsOwner from "../components/DisplayFarmerDetailsOwner";

function SettingsPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const farmerInfo = useSelector(state => state.farmerInfo)
    const { error, loading, farmer} = farmerInfo

    useEffect ( () => {
        dispatch(farmerDetails())
       
        
            if(farmer){
                
            }else{
                navigate('/auth')
            }
            
    },[dispatch])
    


    //photo update
    const [popupPhoto, setPopupPhoto] = useState(false)
    const [photo, setPhoto] = useState('')
    const [photoPassword, setPhotoPassword] = useState('')
    const farmerUpdatePhoto = useSelector(state => state.farmerUpdatePhoto)
    const { error: errorPhoto, loading:loadingPhoto, message: messagePhoto} = farmerUpdatePhoto

    const photoSubmitHandler = (e) => {
        
        const formData = new FormData()
        formData.append('photo', photo)
        formData.append('pk', farmer.id)
        formData.append('haslo', photoPassword)
        
        dispatch(farmerPhotoUpdate(formData))
    }
    
    //email update
    const [popupEmail, setPopupEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [passwordEmail, setPasswordEmail] = useState('')
    const farmerUpdateEmail = useSelector(state => state.farmerUpdateEmail)
    const { error: errorEmail, loading:loadingEmail, message: messageEmail} = farmerUpdateEmail

    const emailSubmitHandler = (e) => {
		e.preventDefault()
        dispatch(farmerEmailUpdate(farmer.id, passwordEmail, email))
	}

    //names update
    const [popupNames, setPopupNames] = useState(false)
    const [passwordNames, setPasswordNames] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const farmerUpdateNames = useSelector(state => state.farmerUpdateNames)
    const { error: errorNames, loading:loadingNames, message: messageNames} = farmerUpdateNames

    const namesSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(farmerNamesUpdate(farmer.id, passwordNames, first_name, last_name))
    }

    //password update
    const [popupPasswordUpdate, setPopupPasswordUpdate] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const farmerUpdateCredentails = useSelector(state => state.farmerUpdateCredentails)
    const { error: errorCredentails, loading:loadingCredentails, message: messageCredentails} = farmerUpdateCredentails

    const passwordSubmitHandler = (e) => {
		e.preventDefault()
        if(password === passwordConfirm){
            dispatch(farmerPasswordUpdate(farmer.id, oldPassword, password, passwordConfirm))
        }	
	}

    //account delete
    const [popupDelete, setPopupDelete] = useState(false)
    const [passwordDelete, setPasswordDelete] = useState('')
    const [passwordDeleteConfirm, setPasswordDeleteConfirm] = useState('')
    const farmerDelete = useSelector(state => state.farmerDelete)
    const { error: errorDelete, loading:loadingDelete, message: messageDelete} = farmerDelete

    const deleteSubmitHandler = (e) => {
		e.preventDefault()
		if(passwordDelete === passwordDeleteConfirm){
            const pk = farmer.id
            dispatch(farmerDelete(pk, passwordDelete))
        }	
	}

    //contact
    const [popupContact, setPopupContact] = useState(false)

    //mail support
    const [emailContact, setEmailContact] = useState('')
    const [contentContact, setContentContact] = useState('')

    const contactSupportSubmitHandler = (e) => {
        dispatch(farmerContactSupport(emailContact, contentContact))
    }

    return(
            
            <div className="mainDiv-settings">
            <Popup trigger={popupPhoto} setTrigger={setPopupPhoto}>
            {loadingPhoto && <Loader />}
            {messagePhoto && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorPhoto && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h1 className='text-center py-4'>Zaktualizuj swoje zdjęcie</h1>
            <FormContainer>
                <Form onSubmit={photoSubmitHandler}>
                    <Form.Group controlId="imageUpload">
                    <Form.Label>Dodaj nowe zdjęcie profilowe</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={photo}
                    
                    />
                     <input
                                    type="file"
                                    id='image-file'
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                    
                    </Form.Group>

                        <Form.Group controlId='password'>
                        <Form.Label>Podaj hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={photoPassword}
							onChange={(e) => setPhotoPassword(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Button className="forgot-button" type ='submit' variant='primary'>
							Aktualizuj zdjęcie
						</Button>

                </Form>
            </FormContainer>
			</Popup>

            <Popup trigger={popupEmail} setTrigger={setPopupEmail}>
            {loadingEmail && <Loader />}
            {messageEmail && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorEmail && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h1 className='text-center py-4'>Zaktualizuj swoj email</h1>
            <FormContainer>
                    <Form onSubmit={emailSubmitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Podaj nowy email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Wpisz swoj nowy email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

						<Form.Group controlId='password'>
                        <Form.Label>Podaj hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={passwordEmail}
							onChange={(e) => setPasswordEmail(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

						<Button className="forgot-button" type ='submit' variant='primary'>
							Aktualizuj Email
						</Button>
					</Form>
                </FormContainer>
			</Popup>

            <Popup trigger={popupNames} setTrigger={setPopupNames}>
            {loadingNames && <Loader />}
            {messageNames && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorNames && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h1 className='text-center py-4'>Zaktualizuj swoje dane osobowe</h1>
            <FormContainer>
                    <Form onSubmit={namesSubmitHandler}>
                    <Form.Group controlId='first_name'>
                        <Form.Label>Imie</Form.Label>
						<Form.Control
							type='name'
							placeholder='Wpisz swoj imie'
							value={first_name}
							onChange={(e) => setFirst_name(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='last_name'>
                        <Form.Label>Nazwisko</Form.Label>
						<Form.Control
							type='name'
							placeholder='Wpisz swoje nazwisko'
							value={last_name}
							onChange={(e) => setLast_name(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

						<Form.Group controlId='password'>
                        <Form.Label>Podaj hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={passwordNames}
							onChange={(e) => setPasswordNames(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

						<Button className="forgot-button" type ='submit' variant='primary'>
							Aktualizuj dane osobowe
						</Button>
					</Form>
                </FormContainer>
			</Popup>

            <Popup trigger={popupPasswordUpdate} setTrigger={setPopupPasswordUpdate}>
            {loadingCredentails && <Loader />}
            {messageCredentails && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorCredentails && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h1 className='text-center py-4'>Zaktualizuj swoje hasło</h1>
            <FormContainer>
                    <Form onSubmit={passwordSubmitHandler}>
						<Form.Group controlId='password'>
                        <Form.Label>Obecne hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='password'>
                        <Form.Label>Nowe hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje nowe hasło'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='password_confirm'>
                        <Form.Label>Powtórz nowe hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Powtórz swoje nowe hasło'
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						>

						</Form.Control>
						</Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Aktualizuj hasło
						</Button>
					</Form>
                </FormContainer>
			</Popup>

            <Popup trigger={popupDelete} setTrigger={setPopupDelete}>
            {loadingDelete && <Loader />}
            {messageDelete && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
            {errorDelete && <Message variant='danger'>Operacja nie powiodła się!</Message>}
			<h1 className='text-center py-4'>Usuń swoje konto</h1>
            <FormContainer>
                    <Form onSubmit={deleteSubmitHandler}>
						<Form.Group controlId='password'>
                        <Form.Label>Hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={passwordDelete}
							onChange={(e) => setPasswordDelete(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='password_confirm'>
                        <Form.Label>Powtórz hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Powtórz swoje hasło'
							value={passwordDeleteConfirm}
							onChange={(e) => setPasswordDeleteConfirm(e.target.value)}
						>

						</Form.Control>
						</Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Usuń konto
						</Button>
					</Form>
                </FormContainer>
			</Popup>

            <Popup trigger={popupContact} setTrigger={setPopupContact}>
			<h1 className='text-center py-4'>Kontakt</h1>
            <h6 className='text-center py-2'>W celu kontaktu na temat blędów, proszę się kontaktować na adres: farmcontrol.help@gmail.com</h6>
            <h6 className='text-center py-2'>W celu kontaktu na temat współpracy, proszę się kontaktować na adres: farmcontrol.management@gmail.com</h6>
            <h6 className='text-center py-5'>Kraków</h6>
			</Popup>



                <Row className="row-settings">
                    
                    <Col md={5} className="profileCol-settings">

                    
                    <div>
                    <img className="img-settings" src={farmerInfo && farmer ? `http://127.0.0.1:8000${farmer.photo}` : defaultPhoto} alt="avatar"></img>
                    </div>
                    
                    <div className="prfileColDiv-settings">
                        <h5> Imię: {farmerInfo && farmer ? farmer.first_name : ''}</h5>
                       
                    </div>
                    <div className="prfileColDiv-settings">
                        <h5>Nazwisko: {farmerInfo && farmer ? farmer.last_name : ''}</h5>
                    </div>
                    <div className="prfileColDiv-settings">
                       <h5>Email: {farmerInfo && farmer ? farmer.email : ''}</h5> 
                    </div>
                    
                    {farmerInfo && farmer  ? (<>
                        {farmer.is_owner ? 'Jesteś właścicielem gospodarstwa' : <div className="prfileColDiv-settings">
                            Pracodawca: <DisplayFarmerDetailsOwner pk_farmer={farmer.id_owner}/>
                        </div>}
                        
                    </>) : (<>
                       
                    </>)}
                   
                    
                    </Col>

                    <Col className="updateCol-settings">
                    <div>
                        <Button className="button-settings" onClick={() => setPopupPhoto(true)}> Zaktualizuj zdjęcie</Button>
                    </div>

                    <div>
                        <Button className="button-settings" onClick={() => setPopupEmail(true)}> Zaktualizuj email</Button>
                    </div>

                    <div>
                        <Button className="button-settings" onClick={() => setPopupNames(true)}> Zaktualizuj dane osobowe</Button>
                    </div>

                    <div>
                        <Button className="button-settings" onClick={() => setPopupPasswordUpdate(true)}>Zaktualizuj hasło </Button>
                    </div>

                    <div>
                        <Button className="button-settings" onClick={() => setPopupDelete(true)}>Usuń konto </Button>
                    </div>
                    </Col>
                </Row>
                
                <Row className="helpRow-settings">
                    <h5 className="text-center py-4">Centrum pomocy</h5>
                    <Col md={6}>
                    
                        <Form onSubmit={contactSupportSubmitHandler}>
                        <Form.Group controlId='rating'>
                            <Form.Label>Napisz wiadomość z twoim problemem</Form.Label>
                            <Form.Control
                                className="formEmailContact-settings"
                                type='email'
                                placeholder='Wpisz swoj email'
                                value={emailContact}
                                onChange={(e) => setEmailContact(e.target.value)}>
                                
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Control
                            as='textarea'
                            row='5'
                            value={contentContact}
                            onChange={(e) => setContentContact(e.target.value)}>                             
                            </Form.Control>
                        </Form.Group>

                        <Button
                            className="buttonEmailContact-settings"
                            type='submit'
                            variant='primary'
                        >
                            Send message
                        </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Button onClick={() => setPopupContact(true)}> Kontakt</Button>
                    </Col>
                </Row>
            </div>
            
            
        
        
    )
}

export default SettingsPage