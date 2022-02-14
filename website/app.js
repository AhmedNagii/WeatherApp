/* Global Variables */
const apiKey = '97223487ae84a942296e1f01d1b6175e';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    let newZip =  document.getElementById('zip').value;
       console.log(newZip);
    getZipCode(baseUrl,newZip, apiKey).then(
        app.post('/newData', addData)
    );
}

const getZipCode = async (baseURL, zip, key)=>{
   
console.log('trying to fatch');

  const response = await fetch(baseURL+zip+'&appid='+key);
  let temp = response.main;
  console.log(temp);
  try {
    const data = await response.json();
    let temp = data.main.temp;
   

    console.log("it should work here");

   
    return data;
  }  catch(error) {
    console.log("error", error);
    alert(error);
  }
}



// post the data wh got from the api
function addData(req,res){
    const d = new Date();
    
    newEntry = {
      temp: res.main.temp,
      date:d.getTime(),
      userResponse:  document.getElementById('feelings').value,
    }
  
    weatherData.push(newEntry)
    console.log(weatherData);
  }
// Create a new date instance dynamically with JS


let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();