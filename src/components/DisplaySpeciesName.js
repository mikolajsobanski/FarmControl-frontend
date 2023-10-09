import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ShortSpecies } from "../data/actions/animalActions"


function DisplaySpeciesName({speciesId}){
    const dispatch = useDispatch()
    const speciesShort = useSelector(state => state.speciesShort)
    const { species, loading:speciesLoading, error:speciesError} = speciesShort
    useEffect(() => {
        dispatch(ShortSpecies(speciesId))
    }, [dispatch, speciesId])
    return(
        <div>
            {speciesShort && species ? `${species.name}` : ''}
        </div>
    )
}
export default DisplaySpeciesName