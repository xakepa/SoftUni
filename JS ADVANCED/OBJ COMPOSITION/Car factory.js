function carFactory(obj) {

    function createEngine(hp) {
        const engine = {}
        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }

    function createCarriage(type, color) {
        return { type, color };
    }

    function makeWheels(wheelSize) {
        let newSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;
        const wheels = new Array(4).fill(newSize);
        return wheels;
    }
    return {
        model: obj.model,
        engine: createEngine(obj.power),
        carriage: createCarriage(obj.carriage, obj.color),
        wheels: makeWheels(obj.wheelsize)
    };
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));


function foo(num) {
    console.log("foo: " + num);
    // keep track of how many times `foo` is called
    foo.count++;
}
//.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
console.log(foo.count); // 4