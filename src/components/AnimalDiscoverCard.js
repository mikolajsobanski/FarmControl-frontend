import { Card } from "react-bootstrap";
import './css/animalDiscoverCard.css'
import Popup from "./Popup";
import { useState } from "react";

function AnimalDiscoverCard(){
    const [popupFullCard, setPopupFullCard] = useState('')
    
        
    
    return(
        <Card className="card-animalDiscoverCard">

            <Popup trigger={popupFullCard} setTrigger={setPopupFullCard}>
                <Card>
                    <Card.Body className="bodyCard-animalDiscoverCard" >
                    <Card.Img className="img-animalDiscoverCardPopup" ></Card.Img>
                    <Card.Title className="title-animalDiscoverCard">
                        <strong>hej csacs</strong>
                    </Card.Title>
                    <Card.Text>
                        oiacjsiocslakscjlkscajcaslkjsalckjcsalkjcaslkjacslkjcaslkjsaclkjcsalkcjsalkcsajklcjass
                    </Card.Text>
                    <Card.Text>
                        Długość życia: 8 lat
                    </Card.Text>
                    <Card.Text>
                        Żywienie: Owies
                    </Card.Text>
                    <Card.Text>
                        Średnia ilość dzieci przy porodzie: 4
                    </Card.Text>
                    <Card.Text>
                        Środowisko życia: polny
                    </Card.Text>
                </Card.Body>
                </Card>
            </Popup>

            <Card.Body className="bodyCard-animalDiscoverCard" >
                <Card.Img className="img-animalDiscoverCard" onClick={setPopupFullCard} ></Card.Img>
                <Card.Title className="title-animalDiscoverCard">
                    <strong>hej csacs</strong>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default AnimalDiscoverCard