const API_KEY = `941564641ade3749b1b0c26184f33618`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form");
// console.log(form);
const inputText = document.getElementById("inputText")


form.addEventListener(
    "submit",
    function(event){
        // console.log(inputText.value);
        event.preventDefault();
    }
)

const getWeather = async(city) =>{
    console.log(city);
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getWeather("goa")






