/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Notification from "componentes/Notification/Notification";
import { getPlace, getComments } from "api/places";
import { useParams } from "react-router-dom";
import { DivTitle } from "componentes/Places/PlacesStyles";
import PlaceProfile from "./PlaceProfile";
import Comment from "./Comment";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState([]);
  const [comments, setComments] = useState([]);
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

    const callGetComments = async (idPlace) => {
      const [data, status] = await getComments(idPlace);

      if (status !== 200) {
        setNotification({
          open: true,
          message: "Error al consultar los comentarios",
          severity: "warning",
        });
        return;
      }
      setComments(data);
    };

    /* const callDeletePlace = async (idPlace) =>{
      const [data, status] = await deletePlace(idPlace);

      if (status !== 200) {
        setNotification({
          open: true,
          message: "Error al borrar el lugar",
          severity: "warning",
        });
        return;
      }

      console.log(data)
    } */

    callGetPlace(id);
    callGetComments(id);
  }, [id]);

  return (
    <div>
      <DivTitle gutterBottom variant="h2" component="div">
        Lugares Seguros
      </DivTitle>

      <PlaceProfile place={place} />
      <Typography
        sx={{ width: "80%", margin: "auto" }}
        variant="h4"
        color="text.primary"
        align="left"
      >
        Comentarios
      </Typography>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
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
