import React, { useEffect, useState } from 'react';
import './css/animalHouse.css'; // You'll create this CSS file later
import { Button, Carousel } from 'react-bootstrap';
import AnimalDiscoverCard from './AnimalDiscoverCard';
import { useDispatch, useSelector } from 'react-redux';
import { ListAnimals, ListCostsCategory, ListSpecies, addAnimal } from '../data/actions/animalActions';
import Popup from './Popup';
import AddAnimalForm from './AddAnimalForm';
import Loader from './Loader';
import Message from './Message';
import AnimalCard from './AnimalCard';

function AnimalHouse({farmer}) {
  const dispatch = useDispatch()
  const speciesList = useSelector(state => state.speciesList)
  const { species, loading, error} = speciesList
  const animalList = useSelector(state => state.animalList)
  const { animals, loading:animalLoading, error:animalError} = animalList
  const costsCategoryList = useSelector(state => state.costsCategoryList)
  const { error: errorCostsCategory, loading:loadingCostsCategory, category} = costsCategoryList

  const [isDiv1Visible, setDiv1Visible] = useState(true)

  const handleToggle = () => {
    setDiv1Visible(!isDiv1Visible);
  }

  const farmerId = farmer?.id;
  const farmerIsOwner = farmer?.is_owner;
  
  

  useEffect(() =>{
    dispatch(ListCostsCategory())
    dispatch(ListSpecies())
    if(farmerIsOwner){
      dispatch(ListAnimals(farmerId))
    }else{
      const ownerId = farmer?.id_owner;
      dispatch(ListAnimals(ownerId))
    }
    
  },[dispatch])

  // add new animal
  const [popupAddAnimal, setPopupAddAnimal] = useState('')
  const animalAdd = useSelector(state => state.animalAdd)
  const { error: errorAdd, loading:loadingAdd, message: messageAdd} = animalAdd

  const handleAnimalSubmit = (animalData) => {
    const formData = new FormData()
    formData.append('name', animalData.name)
    formData.append('photo', animalData.photo)
    formData.append('owner', animalData.owner)
    formData.append('species', animalData.species)
    formData.append('dob', animalData.dob)
    formData.append('sex', animalData.sex)
    dispatch(addAnimal(formData))
    console.log(animalData.name)
    console.log(animalData.photo)
  };


  return (
    <div>
      <Popup trigger={popupAddAnimal} setTrigger={setPopupAddAnimal}>
          {loadingAdd && <Loader />}
          {messageAdd && <Message variant='success'>Operacja została przeprowadzona pomyślnie!</Message>}
          {errorAdd && <Message variant='danger'>Operacja nie powiodła się!</Message>}
          <div>
            <AddAnimalForm onSubmit={handleAnimalSubmit} speciesData={species} farmer={farmer}/>
          </div>
      </Popup>
        <div className='headerAnimalDiv-AnimalHouse'>
        <h6><span>Twoja Farma</span><span >Przegladaj</span></h6>
        </div>
        
			<input onClick={handleToggle} class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			 <label for="reg-log"></label>
                        
            {isDiv1Visible ? (
                <div className="myFarm-AnimalHouse">
                  {animalList && animals ? (<>
                    <Carousel interval={null}>
                      {animals && animals.map(animal => (
                        <Carousel.Item key={animal.id} sm={12} md={6} lg={4} xl={3}>
                          <AnimalCard animal={animal} categories={category}/>
                        </Carousel.Item>
                      ))}
                        
                    </Carousel>
                  </>) : ''}
                  {farmer && farmer.is_owner ? (<>
                  <div className='addNewAnimalButton-AnimalHouse'>
                    <Button onClick={setPopupAddAnimal}>Dodaj nowe zwierzę do gospodarstwa</Button>
                  </div>
                  </>): ''}
                  
                 </div>
                ) : (
                <div className="discoverAnimals-AnimalHouse">
                    <Carousel>
                      {species && species.map(specie => (
                        <Carousel.Item key={specie.id} sm={12} md={6} lg={4} xl={3}>
                          <AnimalDiscoverCard species={specie} />
                        </Carousel.Item>
                      ))}
                        
                    </Carousel>
                </div>
            )}
    </div>
  );
}

export default AnimalHouse;
