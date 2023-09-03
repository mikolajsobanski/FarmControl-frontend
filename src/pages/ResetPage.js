import React, {useState} from "react";
import FormContainer from "../components/FormContainer";
import { Button, Container, Form } from "react-bootstrap";
import './css/resetPage.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { farmerReset } from "../data/actions/farmerActions";

function ResetPage(){
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const {token} = useParams()
    const [notify, setNotify] = useState({
        show:false,
        error:false,
        message:''
    })
    
    const resetSubmitHandler = (e) => {
		e.preventDefault()
        if(password === passwordConfirm){
            dispatch(farmerReset(token, password, passwordConfirm))
            setNotify({
                show:true,
                error:false,
                message:'Hasło zostało zmienione, przejdż do strony z logowaniem'
            })
        }else{
            setNotify({
                show:true,
                error:true,
                message:'Hasła są różne!'
            })
        }
		
	}

    let info
    if(notify.show){
        info = <div className={notify.error ? 'alert alert-danger' : 'alert alert-success'} role="alert">
        {notify.message}
        
        </div>
        if(notify.show && !notify.error) {
            info = <div className={notify.error ? 'alert alert-danger' : 'alert alert-success'} role="alert">
            {notify.message}
            <a href="/auth">  Zaloguj</a>
        </div>
        }
       
    }

    
    return(
        <Container>
            <div className="mainDiv-reset">
                {info}
                <h2 className="text-center py-4">Wprowadż nowe hasło!</h2>
                <FormContainer>
                    <Form onSubmit={resetSubmitHandler}>
						<Form.Group controlId='password'>
                        <Form.Label>Hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Wpisz swoje hasło'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						>

						</Form.Control>
						</Form.Group>

                        <Form.Group controlId='password_confirm'>
                        <Form.Label>Powtórz hasło</Form.Label>
						<Form.Control
							type='password'
							placeholder='Powtórz swoje hasło'
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						>

						</Form.Control>
						</Form.Group>
						<Button className="forgot-button" type ='submit' variant='primary'>
							Resetuj hasło
						</Button>
					</Form>
                </FormContainer>
            </div>
        </Container>
        
    )
}

export default ResetPage