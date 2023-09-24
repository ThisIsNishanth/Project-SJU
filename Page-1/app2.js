let userInput = document.querySelector("#city-input");
const button = document.querySelector("button");

userInput.addEventListener("keypress", (e) => {
    if (userInput.value == ""){
        emptyInput();
        return;
    }
    if (e.key == "Enter") {
        Weather();
    }
})

button.addEventListener("click", ()=>{
    if(userInput.value == ""){
        emptyInput();
        return;
    }
    Weather();
    tableAppend();
})

function emptyInput(){
    let condition = document.querySelector("#condition");
    let celsiustempc = document.querySelector("#temp");
    let windSpeed = document.querySelector("#wind");
    let windir = document.querySelector("#direction");
    let humidValue = document.querySelector("#humidity");
    let cloudcover = document.querySelector("#cloud");
    condition.innerText = "";
    celsiustempc.innerText = "";
    windSpeed.innerText = "";
    windir.innerText = "";
    humidValue.innerText = "";
    cloudcover.innerText = "";
}


function tableAppend(mainText,temp_c,wind_dir,wind_kph,humidity,cloud){
    let condition = document.querySelector("#condition");
    let celsiustempc = document.querySelector("#temp");
    let windSpeed = document.querySelector("#wind");
    let windir = document.querySelector("#direction");
    let humidValue = document.querySelector("#humidity");
    let cloudcover = document.querySelector("#cloud");
    console.log(condition);
    condition.innerText = `${mainText}`
    celsiustempc.innerText = `${temp_c}`;
    windSpeed.innerText = `${wind_kph}`;
    windir.innerText = `${wind_dir}`;
    humidValue.innerText = `${humidity}`;
    cloudcover.innerText = `${cloud}`;
}

async function Weather() {
    try {
        let weatherData = await axios.get(`https://api.weatherapi.com/v1/current.json?key=7e6dd0f22f094593a70110207232507&q=${userInput.value}&aqi=no`);
        let mainText = weatherData.data.current.condition.text;
        let temp_c = weatherData.data.current.temp_c;
        let wind_dir = weatherData.data.current.wind_dir;
        let wind_kph = weatherData.data.current.wind_kph;
        console.log(wind_dir);
        let humidity = weatherData.data.current.humidity;
        let cloud = weatherData.data.current.cloud;
        console.log(weatherData,temp_c,mainText,wind_kph);
        tableAppend(mainText,temp_c,wind_dir,wind_kph,humidity,cloud);
    } catch (e) {
        alert("Wrong city entered. Enter the correct city:");
        console.log("Error:" + e);
    }
}