
let xhr = new XMLHttpRequest();
console.log(xhr);
const sub=document.getElementById('sub')
sub.addEventListener('click', getWeather)
function  getWeather(e){
    e.preventDefault();
    let city=document.getElementById('cities').value
    console.log(cities)
    let apiUrl='https://api.openweathermap.org/data/2.5/weather?q=cairo,eg&appid=f4a408c438be111a51787449d669ff68'
    xhr.open('Get',apiUrl)

xhr.onload=function(){
    if (xhr.status === 200){
        console.log(xhr)

        



    }

}
xhr.send()
}