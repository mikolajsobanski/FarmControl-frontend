import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FarmerAnimalSpecies, FarmerAnimalSpeciesResult, ListAnimals, ListCostsCategory } from "../../data/actions/animalActions";
import HeathStatusListResult from "../HealthStatusListResult";


function FilterPanel({farmerId}){
    const [farmerSpecies, setFarmerSpecies] = useState('')
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(FarmerAnimalSpecies(farmerId))
        dispatch(ListAnimals(farmerId))
        dispatch(ListCostsCategory())
    },[dispatch, farmerSpecies])

    
    const farmerAnimalSpecies = useSelector(state => state.farmerAnimalSpecies)
    const { farmerAnimalspecies, loading, error} = farmerAnimalSpecies

    const farmerAnimalSpeciesResult = useSelector(state => state.farmerAnimalSpeciesResult)
    const { farmerAnimalspeciesresult, loading:loadingResult, error:errorResult} = farmerAnimalSpeciesResult

    const animalList = useSelector(state => state.animalList)
    const { animals, loading:animalLoading, error:animalError} = animalList

    const costsCategoryList = useSelector(state => state.costsCategoryList)
    const { error: errorCostsCategory, loading:loadingCostsCategory, category} = costsCategoryList
  

    const handleChange = (value) => {
        setFarmerSpecies(value);
        dispatch(FarmerAnimalSpeciesResult(farmerId,value))
    }
    return(
        <div>
           <div className='formGroup-addAnimalForm'>
                <select class="form-select"  aria-label="Default select example" value={farmerSpecies} onChange={(e) => handleChange(e.target.value)} required>
                <option value="">Wybierz gatunek zwierzęcia</option>
                {farmerAnimalspecies?.map((species) => (
                    <option key={species.id} value={species.id}>
                    {species.type} {species.name}
                    </option>
                ))}
                </select>
            </div>

            <div>
                
            {farmerSpecies&&farmerAnimalspeciesresult  ? (<>
                {category && farmerAnimalspeciesresult && farmerAnimalspeciesresult.map(animal => (
                    <div>
                        <HeathStatusListResult animal={animal} categories={category}/>
                    </div>
                ))}
            </>) : (<>
                {category && animals && animals.map(animal => (
                    <div>
                        <HeathStatusListResult animal={animal} categories={category}/>
                    </div>
                ))}
            </>)}
            </div>
        </div>
    )
}
export default FilterPanel