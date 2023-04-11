/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import { useState } from "react";
import { deletePlace } from "API/places";
import Notification from "components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Divider } from "@mui/material";

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
      <Stack
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        spacing={0}
      >
        <Button color="secondary" type="button">
          Editar Lugar
        </Button>
        <Button
          color="secondary"
          type="button"
          onClick={(e) => callDeletePlace(place.id, e)}
        >
          Eliminar Lugar
        </Button>
      </Stack>

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
