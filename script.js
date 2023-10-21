const weatherImg = document.querySelector('.weather__icon');
const currTemp = document.querySelector('.temp');
const currCity = document.querySelector('.city');
const currHumidity = document.querySelector('.humidity');
const currWind = document.querySelector('.wind');
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search__button');


// https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=a269ded55cd973193fbab95bd3daa8f0&units=metric

const apiKey = 'a269ded55cd973193fbab95bd3daa8f0';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weatherToday = async function checkWeather(city){
    const res = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);
 
    currCity.innerHTML = data.name;
    currTemp.innerHTML = Math.trunc(data.main.temp) + '°c';
    currHumidity.innerHTML = data.main.humidity + '%';
    currWind.innerHTML = data.wind.speed + 'km/h';

//     if (data.weather[0].main === 'Clouds'){
//         weatherImg.src = images/clouds.png
//     }
//     if (data.weather[0].main === 'Clear'){
//         weatherImg.src = images/clear.png
    
// }
// if (data.weather[0].main === 'Rain'){
//     weatherImg.src = images/rain.png
// }
// if (data.weather[0].main === 'Mist'){
//     weatherImg.src = images/mist.png
// }
// if (data.weather[0].main === 'Drizzle'){
//     weatherImg.src = images/drizzle.png
// } 

document.querySelector('.weather').style.display ='block';

}

searchBtn.addEventListener('click', () => {
    weatherToday(searchBox.value);
});
