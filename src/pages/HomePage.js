import React, { useEffect, useState } from "react"
import './css/homePage.css'
import CopyWrites from "../components/CopyWrites"
import SocialPanel from "../components/SocialPanel"
import Footer from "../components/Footer"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { logout} from'../data/actions/farmerActions'
import VideoSection from "../components/VideoSection"
import SearchBox from "../components/SearchBox"


function HomePage(){
    const [results, setResults] = useState([]);

    return (
        <div className="mainDiv-homePage">
            
            <div className="contentDiv-homePage">
            <Header />
            <div className="searchPanelDiv-homePage">
            <SearchBox  setResults={setResults}/>
            </div>
            

            <div className="bottomContentDiv-homePage">
            <CopyWrites/>
            </div>
            
            </div>
            
        </div>
    )
}

export default HomePage