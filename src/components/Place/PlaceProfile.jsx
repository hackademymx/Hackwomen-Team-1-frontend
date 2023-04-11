import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { API_URL } from "utils/const";
import "./PlaceProfileStyle.css";

export default function PlaceProfile({ place }) {
  const url = API_URL
  const imgUrl= url.replace("apps.places/", "");
  
  return (
    <div className="place">
      <div className="encabezado">
        <div className="placeImage">
          <img
            src={`${imgUrl}${place.image}`}
            alt={`imagen de ${place.name}`}
          />
        </div>

        <div className="placeInfo">
          <h2>{place.name}</h2>
          <h4>
            {place.address_street}, {place.address_colonia}
            <br />
            {place.address_city}, {place.address_state} -{place.address_zipcode}
          </h4>
        </div>
      </div>

      <div className="placeDescription">{place.description}</div>
    </div>
  );
}

PlaceProfile.propTypes = {
  place: PropTypes.objectOf(PropTypes.Place).isRequired,
};
