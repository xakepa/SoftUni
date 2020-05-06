const obj = {
    'new': 18,
    'name': 55,
    'age': 10
}

const sorted = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])

console.log(sorted);