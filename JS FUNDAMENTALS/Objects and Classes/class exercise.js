function kotka(arr) {
    const cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let nameAge of arr) {
        [name, age] = nameAge.split(' ');
        cats.push(new Cat(name, age))
    }

    for (const cat of cats) {
        cat.meow();
    }
}
kotka(['Mellow 2', 'Tom 5'])