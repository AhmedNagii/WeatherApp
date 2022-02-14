/* Global Variables */
const apiKey = '97223487ae84a942296e1f01d1b6175e';

const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    let newZip =  document.getElementById('zip').value;

    console.log('zip code is:'+ newZip);

    getZipCode(baseUrl,newZip, apiKey);
}

const getZipCode = async (baseURL, zip, key)=>{
   
console.log('trying to fatch');
console.log(newZip);
  const responed = await fetch(baseURL+zip+'&appid='+key);
  console.log(responed);
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    alert('errrrror');
  }
}

// Create a new date instance dynamically with JS


let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();