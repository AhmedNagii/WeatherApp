/* Global Variables */
const apiKey = '97223487ae84a942296e1f01d1b6175e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() +1 +'/'+ d.getDate()+'/'+ d.getFullYear();
let userResponse;
let temp;

// add listernier to the button so we can make action
document.getElementById('generate').addEventListener('click', performAction);

// the funcation we call on button click so we can get date and update the Ui
function performAction(e){
    let newZip =  document.getElementById('zip').value;
    userResponse =  document.getElementById('feelings').value;
       getNeededData(baseUrl,newZip, apiKey);
}


// get the date from the API and the user input
const getNeededData = async (baseURL, zip, key)=>{
// fetching data from the API using dynamic URL
  const response = await fetch(baseURL+zip+'&appid='+key+"&units=metric");
  console.log(temp);
  try {
    const data = await response.json();
   temp = data.main.temp;
    console.log("just after declaration"+temp);
   // posting data from the user input and the api then chaining promis to get date we have posted
    postData('/newData', {  // post the date we got from the api and the user to the server
        temperature: temp,
         date: newDate,
          userResponse: userResponse,
        }).then(
            retrieveDataFromServer('/data') // call funcation to get date from the server and update the UI
        ); 
    return data;
  }  catch(error) {
    console.log("error", error);
    alert(error);
  }
}



// post the data we got from the api we can call for any api response
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),        
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
        alert(error);
    }
}



// get date from the server and assign it to the UI elements 
const retrieveDataFromServer = async (url='') =>{ 
    const request = await fetch(url);
    try {
    const allData = await request.json()
    console.log(allData);
    document.getElementById('temp').innerHTML =allData.temperature ;
     document.getElementById('date').innerHTML= allData.date ;
     document.getElementById('content').innerHTML =  allData.userResponse;

}
    catch(error) {
     alert(error);
    }
  }

 
