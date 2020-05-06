const carFactory = require('./Car factory')
const { expect } = require('chai')

let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

let expected = {
    model: 'VW Golf II',
    engine: {
        power: 90,
        volume: 1800
    },
    carriage: {
        type: 'hatchback',
        color: 'blue'
    },
    wheels: [13, 13, 13, 13]
};

let output = carFactory(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels[0]).to.equal(expected.wheels[0], "Wheel size didn't match.");
expect(output.wheels[0] == output.wheels[1] &&
    output.wheels[0] == output.wheels[2] &&
    output.wheels[0] == output.wheels[3]).to.equal(true, "Wheel size didn't match.");