import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PersonCard from './components/personCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const classes = useStyles();

  const [people, setPeople] = useState([]);
  const [pageNo, setPageNo] = useState('1');

  useEffect(()=>{
    axios.get(`https://swapi.co/api/people/?page=${pageNo}`)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setPeople(whatchuGet.data.results);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  },[pageNo]);

  const prevPage = ()=>{
    let tmp = pageNo;
    tmp --;
    if(tmp<1)
      tmp = 8;

    setPageNo(tmp);

  };

  const nextPage = ()=>{
    let tmp = pageNo;
    tmp ++;
    if(tmp>8)
      tmp = 1;

    setPageNo(tmp);
  };


  return (
    <div className={classes.root}>
      <h1 className="Header">React Wars</h1>
      <Grid container spacing={2} justify='center' alignItems='center'>
        {people.map((person,i)=>{
          return (
            <Grid item xs={6} sm={3} key={i}>
              <PersonCard data={person} key={i}/>
            </Grid>
          )
        })}
      </Grid>
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;
