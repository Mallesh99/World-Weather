let req = new XMLHttpRequest();
// let textbox = document.getElementById("placeid");
console.log('hi')

function fun() {
    let place = document.getElementById('placeid').value;
    document.getElementById('name').innerHTML = place;
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=93f26e3c57081a6210de53b8dcfdfea4';
    
    req.open('GET', link, true);

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            console.log('success');
            let data = JSON.parse(req.responseText);
            let imgsrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            document.getElementById('temp').innerHTML = data.main.temp + ' F';
            document.getElementById('image').src = imgsrc;
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('pressure').innerHTML = data.main.pressure;
            document.getElementById('windspeed').innerHTML = data.wind.speed;
            document.getElementById('winddirection').innerHTML = data.wind.deg+' deg';
            document.getElementById('weather').innerHTML = data.weather[0].main;
            document.getElementById('maxtemp').innerHTML = data.main.temp_max + ' F';
            document.getElementById('mintemp').innerHTML = data.main.temp_min + ' F';
            console.log(data);

        }
        else {
            console.log('could not connect to server');
        }
        document.getElementById("placeid").value='';

    }

    req.onerror = function () {
        console.log('error!!');
    }

    req.send();
}
document.addEventListener('click', fun);
document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("b1").click();
        document.getElementById("placeid").value='';
    }
});
// var input = document.getElementById("placeid");
// input.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("b1").click();
//     }
// });
