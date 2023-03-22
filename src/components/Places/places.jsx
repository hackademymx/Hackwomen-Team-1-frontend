/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { getPlaces } from "api/places";
import PlacesCard from "./PlacesCard/placescard";
import { DivPlaces } from "./placesstyle";

export default function places() {
    const [places,setPlaces]=useState([])

    const callGetPlaces = async () => {
        const response = await getPlaces();
        console.log(response);
        if(response.status!==201){
            console.log("Error al consultar los datos");
            return
        }
    };

    useEffect(() => { 
        callGetPlaces();
    }, []);
    return (
    <DivPlaces>
        {
            places.map(place=>(
                <PlacesCard place={place} key={place.id}/>
            ))
        }
    </DivPlaces>
    );
}
