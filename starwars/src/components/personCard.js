import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });

 const PersonCard = (props) =>{
  const classes = useStyles();
  const [homeWorld, setHomeWorld] = useState({});

  useEffect(()=>{
    axios.get(props.data.homeworld)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setHomeWorld(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  },[]);

   return(
    <Card className={classes.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Height: {props.data.height}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Weight: {props.data.mass}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Homeworld: {homeWorld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    </CardActions>
  </Card>
   );
 }

 export default PersonCard;