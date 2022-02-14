projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 3000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));











let baseURL = 'api.openweathermap.org/data/2.5/weather?id=2172797&appid=97223487ae84a942296e1f01d1b6175e';
let apiKey = '97223487ae84a942296e1f01d1b6175e';
const newZip =  document.getElementById('zip').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){  
    getWeatherInfo(baseURL)
}


const getWeatherInfo = async (baseURL)=>{
// 1.
alert();
  const res = await fetch(baseURL)
// 2. Call Fake API
  // const res = await fetch('/fakeAnimalData')
  try {

    const data = await res.json();
    console.log(data)
    // 1. We can do something with our returned data here-- like chain promises!

    // 2. 
    // postData('/addAnimal', data)
  }  catch(error) {
    // appropriately handle the error
    console.log("error", error);
  }
}