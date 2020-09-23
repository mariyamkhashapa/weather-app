let xhr= new XMLHttpRequest();
const sub=document.getElementById('sub');
const dataCont=document.getElementById('main__cont')
sub.addEventListener('click', getWeather)


function getWeather(e){
    e.preventDefault();
    // get the user input
    let city=document.getElementById('cities').value
    console.log(city)
    //get the weather
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f4a408c438be111a51787449d669ff68`
    xhr.open('GET', apiUrl)
xhr.onload=function(){
    if (this.status ===200){
        dataCont.innerHTML=""
        let res=JSON.parse(this.responseText).main;
      console.log(res)
        let list=document.createElement('ul')
        list.className="list"
        list.innerHTML=`<li id="temp" class="item"><img src="./images/010-hot.svg">${res.temp}<span>Temprature</span></li>
        <li id="feels" class="item"><img src="./images/007-sun.svg">${res.feels_like}<span>Feels Like</span></li>
        <li id="min" class="item"><img src="./images/006-cloudy.svg">${res.temp_min}<span>Min. Temprature</span></li>
        <li id="max" class="item"><img src="./images/008-umbrella.svg">${res.temp_max}<span>Max. Temprature</span></li>
        <li id="press" class="item"><img src="./images/011-hot-1.svg">${res.pressure}<span>Pressure</span></li>
        <li id="hum" class="item"><img src="./images/009-rain.svg">${res.humidity}<span>Humidity</span></li>`
        
        dataCont.appendChild(list)





    }
}
xhr.send();
}

// get the user location
// var x = document.getElementById("location");
// function geoFindMe() {

//     const status = document.querySelector('#status');
//     const mapLink = document.querySelector('#map-link');
  
//     mapLink.href = '';
//     mapLink.textContent = '';
  
//     function success(position) {
//       const latitude  = position.coords.latitude;
//       const longitude = position.coords.longitude;
  
//       status.textContent = '';
//       mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//       mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//     }
  
//     function error() {
//       status.textContent = 'Unable to retrieve your location';
//     }
  
//     if(!navigator.geolocation) {
//       status.textContent = 'Geolocation is not supported by your browser';
//     } else {
//       status.textContent = 'Locating…';
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
  
//   }
  
//   document.querySelector('#find-me').addEventListener('click', geoFindMe);
