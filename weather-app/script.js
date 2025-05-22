const apiKey = "a06dafcbaba93ed9310e334c9cffd64e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWhether(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector('.error').style.display="block"
    }
  
    let data = await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clear")
        {
            weatherIcon.src="images/images/clear.png"
        }
    else if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src="images/images/clouds.png"
        }
    else if(data.weather[0].main == "drizzle")
        {
            weatherIcon.src="images/images/drizzle.png"
        }
    else if(data.weather[0].main == "mist")
        {
            weatherIcon.src="images/images/mist.png"
        }
    else if(data.weather[0].main == "rain")
        {
            weatherIcon.src="images/images/rain.png"
        }
    else if(data.weather[0].main == "snow")
        {
            weatherIcon.src="images/images/snow.png"
        }
    document.querySelector('.weather').style.display = "block"
}

searchBtn.addEventListener("click",()=>{
    checkWhether(searchBox.value)
})
checkWhether();