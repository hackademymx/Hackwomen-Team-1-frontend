// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import {mycard} from "./placesCardsStyle";
import places from "../places";

export default function PlacesCard() {
    return  <mycard>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image="/pex.jpg"
        alt="ParqueXochimilco"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {places.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {places.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${places.address.state}, ${places.address.city}`}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
       Mas información
      </Button>
    </CardActions>
  </mycard>
;
}
PlacesCard.PropTypes={
  places:PropTypes.shape([]).isRequired
}