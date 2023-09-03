import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import './css/authPage.css';
import { login, register, farmerForgot } from "../data/actions/farmerActions";
import Popup from "../components/Popup";
import FormContainer from "../components/FormContainer";
import { Button, Form } from "react-bootstrap";

function AuthPage(){
	const dispatch = useDispatch()
	let reload = useNavigate()
	//
	
	
	//register
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailRegister, setEmailRegister] = useState('');
	const [passwordRegister, setPasswordRegister] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [message, setMessage] = useState('')
	const [redirect, setRedirect] = useState(false);
	const [redirectToLogin, setRedirectToLogin] = useState(false);

	const submitRegister = (e) => {
		e.preventDefault()
		console.log(firstName, lastName, emailRegister, passwordRegister, passwordConfirm)
		if (passwordRegister !== passwordConfirm) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(firstName, lastName, emailRegister, passwordRegister, passwordConfirm))
        }

		setRedirectToLogin(true)

		
	}
	
	const farmerRegister = useSelector(state => state.farmerRegister)
	const { error, loading, userInfo } = farmerRegister

	//login
	const [emailLogin, setEmailLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');

	const submitLogin = (e) => {
		e.preventDefault()
		console.log(emailLogin, passwordLogin)
		dispatch(login(emailLogin, passwordLogin))
		setRedirect(true)
		
	}

	// popup
	const [emailForgot, setEmailForgot] = useState('');
	const [popup, setPopup] = useState(false)


	const forgotSubmitHandler = (e) => {
		e.preventDefault()
		
		dispatch(farmerForgot(emailForgot))
			
	}


	//redirection
	if(redirectToLogin){
		return <Navigate to="/auth"/>
	}
	if (redirect){
		return <Navigate to="/"/>
	}

	
	
    return(
		<div>
			<Popup trigger={popup} setTrigger={setPopup}>
			
			<h1 className='text-center py-4'>Resetuj hasło</h1>
			<h6 className='text-center py-3'>
			Nie martw się. Po prostu wpisz adres email poniżej, a prześlemy ci instrukcję postępowania.
			</h6>
				<FormContainer>
					<Form onSubmit={forgotSubmitHandler}>
						<Form.Group controlId='email'>
						<Form.Control
							type='email'
							placeholder='Wpisz swój email'
							value={emailForgot}
							onChange={(e) => setEmailForgot(e.target.value)}
						>

						</Form.Control>
						</Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Resetuj hasło
						</Button>
					</Form>
				</FormContainer>
			</Popup>




			<div className="form-auth">
			<div class="section">
		<div class="container">
		
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Logowanie </span><span>Rejestracja</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<form class="card-front" onSubmit={submitLogin}>
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Logowanie</h4>
											<div class="form-group">
												<input type="email" class="form-style" placeholder="Email"
												onChange={e => setEmailLogin(e.target.value)}/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" class="form-style" placeholder="Hasło"
												onChange={e => setPasswordLogin(e.target.value)}/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<button type="submit" class="btn mt-4">Zaloguj</button>
											
                      						<p class="mb-0 mt-4 text-center"><div onClick={() => setPopup(true)} class="link">Zapomniałeś hasła?</div></p>
											
											  

				      					</div>
			      					</div>
			      				</form>
								
								<form class="card-back" onSubmit={submitRegister}>
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-2 pb-2">Rejestracja</h4>
											<div class="form-group" o>
												<input type="text" class="form-style" placeholder="Imie"
												onChange={e => setFirstName(e.target.value)}/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-1">
												<input type="tel" class="form-style" placeholder="Nazwisko"
												onChange={e => setLastName(e.target.value)}/>
												<i class="input-icon uil uil-phone"></i>
											</div>	
                      						<div class="form-group mt-1">
												<input type="email" class="form-style" placeholder="Email"
												onChange={e => setEmailRegister(e.target.value)}/>
												<i class="input-icon uil uil-at"></i>
											</div>
											<div class="form-group mt-1">
												<input type="password" class="form-style" placeholder="Hasło"
												onChange={e => setPasswordRegister(e.target.value)}/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<div class="form-group mt-1">
												<input type="password" class="form-style" placeholder="Powtórz hasło"
												onChange={e => setPasswordConfirm(e.target.value)}/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											
											<button class="btn mt-3" type="submit">Zarejestruj</button>
				      					</div>
			      					</div>
			      				</form>
								
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
			</div>
		</div>
        
    )
}
export default AuthPage