(function () {

    String.prototype.ensureStart = function (str) {
        const checkExistence = this.slice(0, str.length)
        if (checkExistence !== str) {
            return str + this;
        }
        return `${this}`;
    }

    String.prototype.ensureEnd = function (str) {
        const checkExistence = this.slice(-str.length)
        if (checkExistence !== str) {
            return this + str;
        }
        return `${this}`;
    }

    String.prototype.isEmpty = function () {
        return this.length ? false : true;
    }

    String.prototype.truncate = function (num) {
        if (num < 4) {
            return '.'.repeat(num);
        }

        if (this.length <= num) {
            return `${this}`;
        } else {

            let indexOf = this.substr(0, num - 2).lastIndexOf(' ');

            if (indexOf !== - 1) {
                return this.substr(0, indexOf).toString() + '...';
            } else {
                return this.substr(0, num - 3) + '...';
            }
        }
    }

    String.format = function (str, ...params) {
        params.forEach((el, i) => {
            str = str.replace(`{${i}}`, el)
        });
        return str;
    }
}())

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(4);
console.log(str);

str = String.format('The {0} {1} fox',
    'quick', 'brown');

console.log(str);