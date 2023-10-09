import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { farmerShortDetailsWorker } from "../data/actions/farmerActions"



function DisplayFarmerDetailsWorker({pk_farmer}){

    const dispatch = useDispatch()
    const farmerShortDetailsInfo = useSelector(state => state.farmerShortDetailsWorker)
    const { error: errorFarmerShortDetails, loading:loadingFarmerShortDetails, details:detailsFarmerShortDetails} = farmerShortDetailsInfo
   
    useEffect ( () => {
           dispatch(farmerShortDetailsWorker(pk_farmer))
    },[dispatch, pk_farmer])
    
    

    return(
        <div>
            {detailsFarmerShortDetails ? <p>{detailsFarmerShortDetails.first_name} {detailsFarmerShortDetails.last_name}</p> : ''}
        </div>
    )
}

export default DisplayFarmerDetailsWorker