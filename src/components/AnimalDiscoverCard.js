import { Card } from "react-bootstrap";
import './css/animalDiscoverCard.css'
import Popup from "./Popup";
import { useState } from "react";

function AnimalDiscoverCard({species}){
    const [popupFullCard, setPopupFullCard] = useState('')
    
        
    
    return(
        <Card className="card-animalDiscoverCard">

            <Popup trigger={popupFullCard} setTrigger={setPopupFullCard}>
                <Card>
                    <Card.Body className="bodyCard-animalDiscoverCard" >
                    <Card.Img className="img-animalDiscoverCardPopup" src={`http://127.0.0.1:8000${species.photo}`}></Card.Img>
                    <Card.Title className="title-animalDiscoverCard">
                        <strong>{species.name}</strong>
                    </Card.Title>
                    <Card.Text>
                        {species.description}
                    </Card.Text>
                    <Card.Text>
                        Typ zwierzęcia: {species.type}
                    </Card.Text>
                    <Card.Text>
                        Długość życia: {species.lifetime}
                    </Card.Text>
                    <Card.Text>
                        Żywienie: {species.nutrition}
                    </Card.Text>
                    <Card.Text>
                        Średnia waga: {species.avg_weight} kg
                    </Card.Text>
                </Card.Body>
                </Card>
            </Popup>

            <Card.Body className="bodyCard-animalDiscoverCard" >
                <Card.Img className="img-animalDiscoverCard" onClick={setPopupFullCard} src={`http://127.0.0.1:8000${species.photo}`}></Card.Img>
                <Card.Title className="title-animalDiscoverCard">
                    <strong>{species.type} {species.name}</strong>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default AnimalDiscoverCard