/* eslint-disable import/no-unresolved */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, Link } from "@mui/material";
import { getPlace, getComments } from "API/places";
import Notification from "components/Notification/Notification";
import PlaceProfile from "./PlaceProfile";
import PlaceButtons from "./PlaceButtons";
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

    callGetPlace(id);
    callGetComments(id);
  }, [id]);

  return (
    <div>
      <Typography 
      sx={{
        color: "whitesmoke",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#735d78",
      }}
      gutterBottom variant="h2" component="div">
        <Link href="/places" color="whitesmoke" underline="none">
          Lugares Seguros
        </Link>
      </Typography>

      <PlaceProfile place={place} />

      <PlaceButtons place={place} />

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
