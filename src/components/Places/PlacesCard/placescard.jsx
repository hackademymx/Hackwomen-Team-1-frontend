import PropTypes from "prop-types"

import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Mycard } from "./placesCardsStyle";


export default function placescard({places}) {

return ( 
  <Mycard>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image= {places.image}
        alt="imagen del lugar"
      />
    <CardContent  sx={{ padding: 0}} >
      <Typography gutterBottom variant="h5" component="div" color="#2d3142" borderBottom={2} borderTop={2} fontWeight="bold" >
          {places.name}
        </Typography>
        <Typography variant="body2" color="2d3142" fontWeight="bold"> 
          {places.description}
        </Typography>
        <Typography variant="body2" color="2d3142" fontWeight="100">
          {`${places.address_state}, ${places.address_city}`}
        </Typography>
        <Typography variant="body2" color="#2d3142"> 
          {`${places.address_colonia}, ${places.address_street}, ${places.address_zipcode}`}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="medium" color="#2d3142" underline="hover" variant="inherit" border-radius="20px"  padding="10px 24px"   alignSelf="stretch" style={{
          boxShadow: '1px 2px 9px #9381FF',
          margin: '0em',
          padding: '1em',
        }}>
 Mas información
      </Button>
    </CardActions>
  </Mycard>
);
}

placescard.propTypes={
  places:PropTypes.shape([]).isRequired
}