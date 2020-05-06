Array.prototype.cutLast = function () {
    let lastElement = this[this.length - 1];

    this.length = this.length - 1;

    return lastElement;
}

const arr = [1, 2, 3];
let last = arr.cutLast();

console.log(last);
console.log(arr);

