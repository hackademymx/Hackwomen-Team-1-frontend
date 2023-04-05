/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import { useState } from "react";
import { deletePlace } from "api/places";
import Notification from "componentes/Notification/Notification";
import { useNavigate } from "react-router-dom";

export default function PlaceButtons({ place }) {
    const navigate = useNavigate();
    const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
    });

    async function callDeletePlace(idPlace, event) {
    event.preventDefault();
    const { data, status } = await deletePlace(idPlace);

    if (status !== 200) {
        setNotification({
        open: true,
        message: "Error al consultar los lugares",
        severity: "warning",
        });
    } else {
        setNotification({
        open: true,
        message: data,
        severity: "warning",
        });
    }

    navigate("/places");
    }

    return (
    <>
        <button type="button">Editar Lugar</button>
        <button type="button" onClick={(e) => callDeletePlace(place.id, e)}>
        Eliminar Lugar
        </button>

        {notification.open && (
        <Notification
            notification={notification}
            setNotification={setNotification}
        />
        )}
    </>
    );
}

PlaceButtons.propTypes = {
  place: PropTypes.objectOf(PropTypes.Place).isRequired,
};
