// src/App.js
import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var KEY ='14a494807d3a665e0f8c636b1b82f7b2'
function App() {
  const [city,setCity]=useState("") 
  const [data,setData]=useState("")   
  const fetchData =async()=>{

   var response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    console.log(response.data)
    setData(response.data)
  }



  return (
    <div className="App">                                             
      <h1>Weather app</h1>
      <div>
      <input
      type='text'
      placeholder='Enter city name'
      value={city} 
      onChange={(e)=>setCity(e.target.value)}
       

      />
      <button  onClick={fetchData}> Fetch data</button>
      </div>
      <div>
        {
          data &&
          <h1>{city},{data.sys.country},temp:{data.main.temp}'c</h1>
          
        }
      </div>
      
    </div>
  );
}

export default App;
