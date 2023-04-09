import { useEffect,useState } from "react";
import { getPlaces } from "API/places";
import PlacesCard from "./PlacesCard/placescard";
import { DivPlaces } from "./placesstyle";

export default function Places() {
    const [places,setPlaces]=useState([])

        const callGetPlaces = async () => {
        const response = await getPlaces();
        console.log(response);
        if (response.status!==200){
            console.log("Error al consultar los datos");
            return
    }

    setPlaces(response.data);
 };

   useEffect(() => {
        callGetPlaces();
    }, []);    
    return (
        <DivPlaces>
            {places.map((place) => (
                <PlacesCard places={place} key={place.id} />
                ))}
        </DivPlaces>    
)
}