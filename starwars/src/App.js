import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PersonCard from './components/personCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((person,i)=>{
        return <PersonCard data={person}/>
      })}
    </div>
  );
}

export default App;
