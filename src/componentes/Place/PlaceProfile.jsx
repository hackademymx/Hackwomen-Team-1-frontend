import PropTypes from "prop-types";
import "./PlaceProfileStyle.css";

export default function PlaceProfile({ place }) {
  return (
    <div className="place">
      <div className="encabezado">
        <div className="placeImage">
          <img src={place.image} alt="imagen del lugar" />
        </div>

        <div className="placeInfo">
          <h2>{place.name}</h2>
          <h4>
            {place.address_street}, {place.address_colonia}
            <br />
            {place.address_city}, {place.address_state} -{place.address_zipcode}
          </h4>
          <button type="button">Editar Lugar</button>
          <button type="button" >Eliminar Lugar</button>
        </div>
      </div>

      <div className="placeDescription">{place.description}</div>
    </div>
  );
}

PlaceProfile.propTypes = {
  place: PropTypes.objectOf(PropTypes.Place).isRequired,
};
