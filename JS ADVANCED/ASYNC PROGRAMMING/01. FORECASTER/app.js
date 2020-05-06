function attachEvents() {
    const getWeatherBtn = document.getElementById('submit');
    const inputField = document.getElementById('location');
    const displayWeather = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');


    getWeatherBtn.addEventListener('click', getWeather);

    function getWeather() {
        let code;
        current.innerHTML = `<div class="label">Current conditions</div>`;
        upcomingDiv.innerHTML = `<div class="label">Three-day forecast</div>`;

        const symbolMap = {
            Sunny: '&#x2600', // ☀
            'Partly sunny': '&#x26C5', // '⛅'
            Overcast: '&#x2601', // ☁
            Rain: '&#x2614', // ☂
            Degrees: '&#176' // °
        }

        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(res => res.json())
            .then(data => {
                const city = data.find(d => d.name === inputField.value);
                code = city.code;

                fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
                    .then(res => res.json())
                    .then(data => {
                        displayWeather.style = 'block';
                        const symbol = createHTMLElement('span', 'condition symbol');

                        symbol.innerHTML = symbolMap[data.forecast.condition];
                        const forecastDiv = createHTMLElement('div', 'forecasts')

                        const condition = createHTMLElement('span', 'condition')
                        const location = createHTMLElement('span', 'forecast-data', data.name);
                        const degrees = createHTMLElement('span', 'forecast-data');
                        const weather = createHTMLElement('span', 'forecast-data', data.forecast.condition);

                        degrees.innerHTML = `${data.forecast.low}${symbolMap.Degrees}/${data.forecast.high}${symbolMap.Degrees}`;
                        condition.append(location, degrees, weather);

                        forecastDiv.appendChild(symbol)
                        forecastDiv.appendChild(condition);
                        current.appendChild(forecastDiv);
                    })
                    .catch(handleError)

                fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
                    .then(res => res.json())
                    .then(data => {
                        const divForecastInfo = createHTMLElement('div', 'forecast-info');

                        data.forecast.forEach(obj => {
                            const spanUpcoming = createHTMLElement('span', 'upcoming');
                            const symbolSpan = createHTMLElement('span', 'symbol');
                            symbolSpan.innerHTML = symbolMap[obj.condition];

                            const degrees = createHTMLElement('span', 'forecast-data');
                            const weather = createHTMLElement('span', 'forecast-data', obj.condition);
                            degrees.innerHTML = `${obj.high}${symbolMap.Degrees}/${obj.low}${symbolMap.Degrees}`

                            spanUpcoming.append(symbolSpan, degrees, weather);
                            divForecastInfo.appendChild(spanUpcoming);
                            upcomingDiv.appendChild(divForecastInfo);
                        });
                    }).catch(handleError)
            })
            .catch(handleError)
    }

    function createHTMLElement(tagName, className, textContent) {
        const element = document.createElement(tagName);

        if (className) {
            element.setAttribute('class', className)
        }

        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    function handleError(e) {
        displayWeather.style = 'block';
        current.innerHTML = 'ERROR !';
        upcomingDiv.innerHTML = '';
    }
}
attachEvents();