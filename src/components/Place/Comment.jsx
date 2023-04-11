import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

export default function Comment({ comment }) {
  return (
    <List
      sx={{
        width: "80%",
        bgcolor: "background.paper",
        margin: "auto",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Imagen del usuario" src={comment.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="subtitle"
                color="text.primary"
              >
                {comment.username} -
              </Typography>

              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {" "}
                {comment.createdAt}
              </Typography>
            </>
          }
          secondary={comment.comment}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape([]).isRequired,
};
