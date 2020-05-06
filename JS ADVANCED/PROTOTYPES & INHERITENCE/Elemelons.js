function melons() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly')
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }


        get elementIndex() {
            const index = this.weight * this.melonSort.length;
            return index;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = 'Air'
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.elements = ['Water', 'Fire', 'Earth', 'Air',];
            this.element = 'Water';
        }

        morph() {

            let current = this.elements.shift();
            this.elements.push(current);
            this.element = this.elements[0];
            return this.element
        }
    }
    return {
        Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon
    }
}

const classes = melons()

let watermelon = new classes.Melolemonmelon(12.5, "Kingsize");
watermelon.morph()

console.log(watermelon.toString());
