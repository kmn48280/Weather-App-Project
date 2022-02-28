SubmitButton()

const API_KEY =  '640aba30e8145817bdc2ee8708715129';
const bgImg = 'https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

document.body.style.backgroundImage = `url(${bgImg})`;
document.body.style.backgroundSize = 'contain';


function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let cityName =document.getElementById("cityName").value;
    let stateCode = document.getElementById('stateCode').value;
    let countryCode = document.getElementById("countryCode").value;
    doAPICall(cityName, stateCode, countryCode);
    console.log(document.getElementById('cityName'));
    console.log(document.getElementById('stateCode'))
    console.log(document.getElementById('countryCode'));
};

function SubmitButton(){
    let button = document.getElementById("button");
    button.addEventListener('click', (e)=>handleSubmit(e));
};

function fahrenheit(k){
    f= (k - 273.15) * (1.8) + 32;
    return parseInt(f);
};

async function doAPICall(cityName, stateCode, countryCode){
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${API_KEY}`);
    console.log(result);
    
    result = result.data;


    let location = result.name;
    console.log(location);

    let forecast = result.weather[0].description;
    console.log(forecast);

    let high = result.main.temp_max;
    console.log(high);

    let fhigh = fahrenheit(high);
    console.log(fhigh);

    let low = result.main.temp_min;
    console.log(low);

    let flow = fahrenheit(low);
    console.log(flow);

    let humidity = result.main.humidity;
    console.log(humidity);

    li = document.createElement('li');
    

    // location
    locale = document.getElementById('location');
    locale.innerText = `Location is: ${location}, ${stateCode}`;

    // forecast
    fore = document.getElementById('forecast');
    fore.innerText = `Forecast: ${forecast}`;
    
    // high
    hi = document.getElementById('high');
    hi.innerText = `High: ${fhigh}\u00B0F`;

    // low
    lo = document.getElementById('low');
    lo.innerText = `Low: ${flow}\u00B0F`;

    // humidity
    hum = document.getElementById('humidity');
    hum.innerText = `Humidity: ${humidity}%`;
};



