import { useState } from "react"
import './css/searchBox.css'
import {FcSearch} from 'react-icons/fc'

function SearchBox({ setResults }){
    const [input, setInput] = useState('')

    const handleChange = (value) => {
        setInput(value);
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