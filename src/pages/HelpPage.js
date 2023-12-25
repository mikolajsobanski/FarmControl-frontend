import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { farmerContactSupport } from "../data/actions/farmerActions"
import Popup from "../components/Popup"
import './css/helpPage.css'

function HelpPage(){
    const dispatch = useDispatch()

     //contact
    const [popupContact, setPopupContact] = useState(false)

     //mail support
    const [emailContact, setEmailContact] = useState('')
    const [contentContact, setContentContact] = useState('')
 
    const contactSupportSubmitHandler = (e) => {
         dispatch(farmerContactSupport(emailContact, contentContact))
     }

    return(
        <div className="mainDiv-HelpPage">
            <Popup trigger={popupContact} setTrigger={setPopupContact}>
			<h1 className='text-center py-4'>Kontakt</h1>
            <h6 className='text-center py-2'>W celu kontaktu na temat blędów, proszę się kontaktować na adres: farmcontrol.help@gmail.com</h6>
            <h6 className='text-center py-2'>W celu kontaktu na temat współpracy, proszę się kontaktować na adres: farmcontrol.management@gmail.com</h6>
            <h6 className='text-center py-5'>Kraków</h6>
			</Popup>

            <Row className="helpRow-HelpPage">
                    <h5 className="text-center py-4">Centrum pomocy</h5>
                    <Col md={7}>
                    
                        <Form onSubmit={contactSupportSubmitHandler}>
                        <Form.Group controlId='rating'>
                            <Form.Label>Napisz wiadomość z twoim problemem</Form.Label>
                            <Form.Control
                                className="formEmailContact-HelpPage"
                                type='email'
                                placeholder='Wpisz swoj email'
                                value={emailContact}
                                onChange={(e) => setEmailContact(e.target.value)}>
                                
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Control
                                as="textarea" 
                                rows={7}
                                value={contentContact}
                                onChange={(e) => setContentContact(e.target.value)}>                             
                            </Form.Control>
                        </Form.Group>

                        <Button
                            className="buttonEmailContact-HelpPage"
                            type='submit'
                            variant='primary'
                        >
                            Send message
                        </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Button className="contactButton-HelpPage" onClick={() => setPopupContact(true)}> Kontakt</Button>
                    </Col>
            </Row>
        </div>
    )
}
export default HelpPage