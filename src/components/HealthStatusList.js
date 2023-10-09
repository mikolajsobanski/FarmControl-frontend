import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"
import { BsFillHeartbreakFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { ListAnimals } from "../data/actions/animalActions"
import HeathStatusListResult from "./HealthStatusListResult"


function HeathStatusList({farmer}){
    const dispatch = useDispatch()
    const animalList = useSelector(state => state.animalList)
    const { animals, loading:animalLoading, error:animalError} = animalList
    
    const farmerId = farmer?.id;
    const farmerIsOwner = farmer?.is_owner;
  

    useEffect(() =>{
        
        if(farmerIsOwner){
          dispatch(ListAnimals(farmerId))
        }else{
          const ownerId = farmer?.id_owner;
          dispatch(ListAnimals(ownerId))
        }
        
      },[dispatch])
    

    return(
       <div className="mainDiv-HealthStatusList">
         {animalList && animals ? 
            (<>
                {animals && animals.map(animal => (
                    <HeathStatusListResult animal={animal}/>
                ))}
            </>) : ''}
           

       </div>
    )
}
export default HeathStatusList