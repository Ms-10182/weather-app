const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`
const API_KEY = `e2abd1569a8cd640c76f1189f034050f`

let searchBox = document.querySelector("#search-box");
let searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click",async()=>{
    let city = searchBox.value;
    let srcUrl= `${BASE_URL}${city}&appid=${API_KEY}&units=metric`;
    console.log(srcUrl);

    let response =await fetch(srcUrl);
    let data = await response.json();
    console.log(data.cod);

    let temperature=document.querySelector("#temperature");    
    let humidity=document.querySelector("#humidity");
    let windSpeed=document.querySelector("#wind-speed");

    if(data.cod===200){
        temperature.innerText=`TEMP : ${data.main.temp}°C`;
        humidity.innerText=`Humidity : ${data.main.humidity}%`;
        windSpeed.innerText=`Speed : ${data.wind.speed} meter/sec`;
    }
    else if(data.cod==404){
        temperature.innerText=`city not found`;
        humidity.innerText=`city not found`;
        windSpeed.innerText=`city not found`;
    }
});

