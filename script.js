const image = document.querySelector("img");

(async function fetchResponse(){
    try{
        const url = await fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
        const data = await url.json();
        const paragraph = document.createElement('p')
        data.weather[0].icon = 'http://openweathermap.org/img/w/10d.png'
        image.src = data.weather[0].icon

        paragraph.textContent = `Misto: ${data.name}, Temp; ${data.main.temp}, Tisk: ${data.main.pressure} description: ${data.weather[0].description}, humidity: ${data.main.humidity}, speed: ${data.wind.speed}, deg: ${data.wind.deg}`
        document.body.append(paragraph)
    } catch (error){
        console.log(error)
    }
})()