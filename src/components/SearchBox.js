import { useState } from "react"
import './css/searchBox.css'
import {FcSearch} from 'react-icons/fc'
import { useDispatch } from "react-redux"
import { SearchSpecies } from "../data/actions/animalActions"

function SearchBox(){
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleChange = (value) => {
        setInput(value);
        dispatch(SearchSpecies(value))
    }

    return(
        <div className="search-bar-container">
        <div className="search-icon">
        <FcSearch />
        </div>
        <input
            type="text"
            placeholder="Wyszukaj interesujące Cię zwierzę..."
            value={input}
            className="search-input"
            onChange={(e) => handleChange(e.target.value)}
        />
        </div>
    )
}
export default SearchBox