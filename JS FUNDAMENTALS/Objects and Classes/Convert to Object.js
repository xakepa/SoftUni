function solve(jsonString) {
    const obj = JSON.parse(jsonString);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
solve('{ "name": "George", "age": 40, "town": "Sofia" }')