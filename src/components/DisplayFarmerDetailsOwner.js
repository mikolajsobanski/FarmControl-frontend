import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { farmerShortDetailsOwner } from "../data/actions/farmerActions"



function DisplayFarmerDetailsOwner({pk_farmer}){

    const dispatch = useDispatch()
    const farmerShortDetailsInfo = useSelector(state => state.farmerShortDetailsOwner)
    const { error: errorFarmerShortDetails, loading:loadingFarmerShortDetails, details:detailsFarmerShortDetails} = farmerShortDetailsInfo
   console.log(pk_farmer)
    useEffect ( () => {
           dispatch(farmerShortDetailsOwner(pk_farmer))
    },[dispatch, pk_farmer])
    
    

    return(
        <div>
            {detailsFarmerShortDetails ? <p>{detailsFarmerShortDetails.first_name} {detailsFarmerShortDetails.last_name}</p> : ''}
        </div>
    )
}

export default DisplayFarmerDetailsOwner