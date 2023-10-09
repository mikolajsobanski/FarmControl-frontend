import { useState } from 'react'
import Popup from './Popup'
import './css/searchResults.css'
import { Card } from 'react-bootstrap'

function SearchResults({result}){
    const [popupSearchResult, setPopupSearchResult] = useState('')


    return(
        <div>
            <Popup trigger={popupSearchResult} setTrigger={setPopupSearchResult}>
                <Card>
                        <Card.Body className="bodyCard-animalDiscoverCard" >
                        <Card.Img className="img-animalDiscoverCardPopup" src={`http://127.0.0.1:8000${result.photo}`}></Card.Img>
                        <Card.Title className="title-animalDiscoverCard">
                            <strong>{result.name}</strong>
                        </Card.Title>
                        <Card.Text>
                            {result.description}
                        </Card.Text>
                        <Card.Text>
                            Typ zwierzęcia: {result.type}
                        </Card.Text>
                        <Card.Text>
                            Długość życia: {result.lifetime}
                        </Card.Text>
                        <Card.Text>
                            Żywienie: {result.nutrition}
                        </Card.Text>
                        <Card.Text>
                            Średnia waga: {result.avg_weight} kg
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </Popup>
            <div className='resultRow-SearchResults' onClick={setPopupSearchResult}>
                <img className='resultImg-SearchResults' src={`http://127.0.0.1:8000${result.photo}`}></img>
                 {result.name}
            </div>
        </div>
        
    )
}
export default SearchResults