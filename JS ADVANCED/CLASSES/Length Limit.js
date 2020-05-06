class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = +innerLength;
    }

    increase(length) {
        return this.innerLength += +length
    }

    decrease(length) {
        let l = this.innerLength - +length;
        if (l < 0) {
            l = 0;
        }
        this.innerLength = l;
        return this.innerLength;
    }

    toString() {
        const length = this.innerLength;
        if (length < this.innerString.length) {
            return this.innerString.slice(0, length) + '...';
        } else {
            return this.innerString.slice(0, length);
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

