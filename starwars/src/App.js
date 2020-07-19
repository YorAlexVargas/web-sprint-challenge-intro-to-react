import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'


const App = () => {

  const [starWarsGuys/*todaysSpecial(name)*/, setstarWarsGuys/*whats the meal for today*/] = useState ([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (()=>{
  /*(use effect)*/
    axios
      .get ("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people") 
      .then (res => {
        setstarWarsGuys(res.data.results)
        console.log(res.data.results)
      })
      .catch (err => {console.log(err)})
  },[])
   
/*(use effect)*/
/*set state to the data*/
/*pass the data down to conponets*/
/*display*/
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>{starWarsGuys.map ((characterObject,index) =>{
        return (<div className="starWarsInfo" key={index}>
          <link src={characterObject.url} alt={characterObject.url}></link>
          <h2>{characterObject.name}</h2>
          <img src={characterObject.gender} ></img>
          <h3>Gender: {characterObject.gender}</h3>
          <h3>Homeworld: {characterObject.homeworld}</h3>
          <h3>Mass: {characterObject.mass}</h3>
          <h3>Height: {characterObject.height}</h3>
          <h3>Hair Color: {characterObject.hair_color}</h3>

          </div>)
        



      })}</div>
      
    </div>
  );
  }

export default App;
