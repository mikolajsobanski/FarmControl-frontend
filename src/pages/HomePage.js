import React, { useEffect, useState } from "react"
import './css/homePage.css'
import CopyWrites from "../components/CopyWrites"
import SocialPanel from "../components/SocialPanel"
import Footer from "../components/Footer"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { logout} from'../data/actions/farmerActions'
import SearchBox from "../components/SearchBox"
import SearchResults from "../components/SearchResults"
import { Col } from "react-bootstrap"


function HomePage(){
    const speciesSearch = useSelector(state => state.speciesSearch)
    const { species, loading, error} = speciesSearch

    return (
        <div className="mainDiv-homePage">
            
            <div className="contentDiv-homePage">
            <Header />
            <div className="searchPanelDiv-homePage">
            <SearchBox/>
            </div>
            
            {species && species.length>0 ? (<>
                <div className="resultsList-homePage">
                {species.map(result => (
                    <div >
                        <SearchResults key={result.id} result={result} />
                    </div>
                                        
                ))}           
                </div>
            </>) : ''}

            <div className="bottomContentDiv-homePage">
            <CopyWrites/>
            </div>
            
            </div>
            
        </div>
    )
}

export default HomePage