/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import Notification from "componentes/Notification/Notification";
import { getPlace } from "api/places";
import { useParams } from "react-router-dom";
import { DivTitle } from "componentes/Places/PlacesStyles";
import PlaceProfile from "./PlaceProfile";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState([]);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    const callGetPlace = async (idPlace) => {
      const { data, status } = await getPlace(idPlace);

      if (status !== 200) {
        setNotification({
          open: true,
          message: "Error al consultar los lugares",
          severity: "warning",
        });
        return;
      }

      setPlace(data);
    };

    callGetPlace(id);
  }, [id]);

  return (
    <div>
      <DivTitle gutterBottom variant="h2" component="div">
        Lugares Seguros
      </DivTitle>

      <PlaceProfile place={place} />
      {notification.open && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
    </div>
  );
}

export default Place;
