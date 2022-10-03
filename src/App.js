import React, {useEffect, useState} from "react"
import axios from "axios"; 
export default function App() {

  const [name, setName] = useState("");
  const [index, setIndex]= useState(0);
  const [errorMessage, setErrorMessage] = useState(""); 



  async function getData() {
    var url = `https://swapi.dev/api/people/${index}` 
    console.log(index); 
    axios.get(url)
    .then(res => {  
      setErrorMessage(""); 
      const person = res.data;
      console.log(person); 
      setName(person.name); 
    }) 
    .catch(function (error) {
      setErrorMessage("Error! Unable to query data. Please try again"); 
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message); 
      }
    })
  }




  return (
    <>
      <center>
        <h1>STAR WARS CHARACTER</h1>
        <input onChange={(e) => setIndex(e.target.value)}></input>
        <button onClick={getData}>Search</button>
        <p>{errorMessage}</p>
        <p>{name}</p>
      </center>
      
    </>
   
  )
}