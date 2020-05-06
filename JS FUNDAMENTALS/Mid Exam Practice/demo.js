const animal = {};

const existingAnimal = {
    name: 'Joe',
    age: 12,
    color: 'brown',
}

for (const key in existingAnimal) {
    animal[key] = existingAnimal[key]
}

console.log(animal);