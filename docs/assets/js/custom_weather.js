// static/js/custom_weather.js

function fetchWeather() {
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=auto:ip&lang=zh') // 请确保使用你自己的有效API Key
        .then(response => response.json())
        .then(data => {
            if (data && data.current && data.location) { // 增加一些数据有效性检查
                const weather = data.current;
                const city = data.location.name;
                const temp = weather.temp_c;
                const text = weather.condition.text;
                const weatherCityEl = document.getElementById('weatherCity');
                const weatherInfoEl = document.getElementById('weatherInfo');
                if (weatherCityEl) weatherCityEl.textContent = city;
                if (weatherInfoEl) weatherInfoEl.textContent = `${temp}°C ${text}`;
            } else {
                throw new Error('Weather data is incomplete'); // 抛出错误以便catch捕获
            }
        })
        .catch(error => { // 捕获所有错误，包括上面抛出的
            console.error('Error fetching weather:', error); // 在控制台打印错误信息
            const weatherCityEl = document.getElementById('weatherCity');
            const weatherInfoEl = document.getElementById('weatherInfo');
            if (weatherCityEl) weatherCityEl.textContent = '城市加载失败';
            if (weatherInfoEl) weatherInfoEl.textContent = '天气加载失败';
        });
}

// 确保在DOM加载完成后执行，或者如果SweetAlert2已加载则可以更晚
if (document.readyState === 'loading') {  // 仍未加载完成
    document.addEventListener('DOMContentLoaded', fetchWeather);
} else {  // `DOMContentLoaded` 已触发
    fetchWeather();
}