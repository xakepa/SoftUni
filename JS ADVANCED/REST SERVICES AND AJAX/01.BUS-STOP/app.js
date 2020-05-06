function getInfo() {
    const inputField = document.getElementById('stopId');
    const displayResultField = document.getElementById('stopName');
    const busStops = document.getElementById('buses');

    busStops.textContent = '';
    const url = `https://judgetests.firebaseio.com/businfo/${inputField.value}.json `

    fetch(url)
        .then(res => res.json())
        .then(res => {
            displayResultField.textContent = res.name;
            Object.entries(res.buses).forEach(([busId, time]) => {
                const bus = document.createElement('li');
                bus.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busStops.appendChild(bus);
            });
        })
        .catch(() => displayResultField.textContent = 'Bus stop not found!')
}