/* Global Variables */
const apiKey = '97223487ae84a942296e1f01d1b6175e';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let userResponse;
let temp;
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    let newZip =  document.getElementById('zip').value;
    userResponse =  document.getElementById('feelings').value;
       console.log(newZip);
    getZipCode(baseUrl,newZip, apiKey).then(
        postData('/newData', {
            temperature: temp,
             date: newDate,
              userResponse: userResponse,
            })
    );
   
}

const getZipCode = async (baseURL, zip, key)=>{
   
console.log('trying to fatch');

  const response = await fetch(baseURL+zip+'&appid='+key+"&units=metric");
 
  console.log(temp);
  try {
    const data = await response.json();
   temp = data.main.temp;
    
    console.log(temp);
console.log(userResponse);
console.log(newDate);
   
    return data;
  }  catch(error) {
    console.log("error", error);
    alert(error);
  }
}



// post the data wh got from the api
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}


// Create a new date instance dynamically with JS


