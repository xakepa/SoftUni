function solve() {

    let currentId = 'depot';
    const infoBox = document.querySelector('span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');



    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                infoBox.textContent = `Next stop ${data.name}`;
            })
            .catch(errorHandling)

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const { name, next } = data;
                infoBox.textContent = `Arriving at ${name}`;
                currentId = next;
            })
            .catch(errorHandling)
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    function errorHandling() {
        infoBox.textContent = 'Server Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();