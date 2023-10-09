import { Card } from "react-bootstrap";
import './css/animalDiscoverCard.css'
import Popup from "./Popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShortSpecies } from "../data/actions/animalActions";

function SpeciesInfoCard({speciesId}){
    const [popupFullCard, setPopupFullCard] = useState('')
    const dispatch = useDispatch()
    const speciesShort = useSelector(state => state.speciesShort)
    const { species, loading:speciesLoading, error:speciesError} = speciesShort
    useEffect(() => {
        dispatch(ShortSpecies(speciesId))
    }, [dispatch, speciesId])
        
    
    return(
        <Card className="card-animalDiscoverCard">

            <Popup trigger={popupFullCard} setTrigger={setPopupFullCard}>
                <Card>
                    <Card.Body className="bodyCard-animalDiscoverCard" >
                    <Card.Img className="img-animalDiscoverCardPopup" src={speciesShort && species ? `http://127.0.0.1:8000${species.photo}`: ''}></Card.Img>
                    <Card.Title className="title-animalDiscoverCard">
                        <strong>{speciesShort && species ? `${species.name}` : ''}</strong>
                    </Card.Title>
                    <Card.Text>
                    {speciesShort && species ? `${species.description}` : ''}
                    </Card.Text>
                    <Card.Text>
                        Typ zwierzęcia: {speciesShort && species ? `${species.type}` : ''}
                    </Card.Text>
                    <Card.Text>
                        Długość życia: {speciesShort && species ? `${species.lifetime}` : ''}
                    </Card.Text>
                    <Card.Text>
                        Żywienie: {speciesShort && species ? `${species.nutrition}` : ''}
                    </Card.Text> 
                    <Card.Text>
                        Średnia waga:{speciesShort && species ? `${species.avg_weight} kg` : ''}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Popup>

            <Card.Body className="bodyCard-animalDiscoverCard" >
                <Card.Img className="img-animalDiscoverCard" onClick={setPopupFullCard} src={speciesShort && species ? `http://127.0.0.1:8000${species.photo}`: ''}></Card.Img>
                <Card.Title className="title-animalDiscoverCard">
                    <strong>{speciesShort && species ? `${species.name}` : ''}</strong>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SpeciesInfoCard