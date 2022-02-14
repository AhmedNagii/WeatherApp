// Setup empty JS object to act as endpoint for all routes
projectData = {};
const data = [];
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 8080;

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


// Setup Server

const server = app.listen(port, listening);
function listening(){
  console.log("server running"); 
  console.log(`running on localhost: ${port}`);
}


app.get ('/data' ,function( req, res) {
  res.send(projectData);
  console.log(projectData);
});


app.post('/newData', function (req, res) {

    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.userResponse = req.body.userResponse;
  

  res.send(projectData);
});

