function solve(params) {



    fetch('https://swapi.co/api/people/4')
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data)))
        .catch((error) => console.error(error))
}