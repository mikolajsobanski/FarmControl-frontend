import { Card } from "react-bootstrap";
import './css/workerCard.css'


function CoworkerCard({ farmer }){  
        
    
    return(
        <Card className="card-workerCard">
            <Card.Img className="img-workerCard" src={`http://127.0.0.1:8000${farmer.photo}`} ></Card.Img>
            <Card.Body>
                <Card.Title>
                    <strong>{farmer.first_name} {farmer.last_name}</strong>
                </Card.Title>

            </Card.Body>
        </Card>
    )
}

export default CoworkerCard