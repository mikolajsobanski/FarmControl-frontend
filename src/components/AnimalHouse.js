import React, { useState } from 'react';
import './css/animalHouse.css'; // You'll create this CSS file later
import { Carousel } from 'react-bootstrap';
import AnimalDiscoverCard from './AnimalDiscoverCard';

function AnimalHouse() {
  
  const [isDiv1Visible, setDiv1Visible] = useState(true)

  const handleToggle = () => {
    setDiv1Visible(!isDiv1Visible);
}


  return (
    <div>
        <div className='headerAnimalDiv-AnimalHouse'>
        <h6><span>Twoja Farma</span><span >Przegladaj</span></h6>
        </div>
        
			<input onClick={handleToggle} class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			 <label for="reg-log"></label>
                        
            {isDiv1Visible ? (
                <div className="inProgressTask-staff">
                    1
                 </div>
                ) : (
                <div className="discoverAnimals-AnimalHouse">
                    <Carousel>
                        <AnimalDiscoverCard />
                    </Carousel>
                </div>
            )}
    </div>
  );
}

export default AnimalHouse;
