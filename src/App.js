import React, {useEffect, useState} from "react"
import axios from "axios"; 
export default function App() {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [eyeColor, setEyeColor] = useState(""); 
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
      setGender(person.gender);
      setBirthYear(person.birth_year);
      setEyeColor(person.eye_color);

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
        <h1 style={{fontFamily: "Josefin Sans"}}>Look up Star Wars characters!</h1>
        <p style={{fontFamily: "Josefin Sans"}}>Instruction: Type a number in range 1-83 (inclusive) to get Star Wars characters! </p>
        <br/>
        <input style={{borderWidth: "2px", borderRadius: "7px", fontFamily: "Josefin Sans", height: "20px"}} onChange={(e) => setIndex(e.target.value)}></input>
        <button onClick={getData} style={{borderRadius: "7px", color: "white", backgroundColor: "black", fontFamily: "Josefin Sans", height: "27px", marginLeft: "2px"}}>Search</button>
        <p style={{color: "red", fontFamily: "Josefin Sans"}}><b>{errorMessage}</b></p>
        <br/>
        <div style={{maxWidth: "60%", backgroundColor: "yellow"}}>
          <br/>
          <p style={{fontFamily: "Josefin Sans"}}>Name: <b>{name}</b></p>
          <p style={{fontFamily: "Josefin Sans"}}>Gender: <b>{gender}</b></p>
          <p style={{fontFamily: "Josefin Sans"}}>Birth Year: <b>{birthYear}</b></p>
          <p style={{fontFamily: "Josefin Sans"}}>Eye Color: <b>{eyeColor}</b></p>
          <br/>
        </div>
        <br/><br/>
        <p>*Info: I used SWAPI public API for this assignment.</p>
      </center>
      
    </>
   
  )
}