/**
 * @link (https://codecrunch.org/javascript-array-methods-polyfills-f2218fa15d2e)
 * @link (https://www.codewars.com/kata/525d50d2037b7acd6e000534/solutions/javascript)
 */
if (!Array.prototype.square) {
    Array.prototype.square = function () {
        let newArray = []
        for (let item of this) {
            newArray.push(item * item);
        }

        return newArray;
    }
}

if (!Array.prototype.cube) {
    Array.prototype.cube = function () {
        let newArray = []
        for (let item of this) {
            newArray.push(item * item * item);
        }

        return newArray;
    }
}

if (!Array.prototype.average) {
    Array.prototype.average = function () {
        if (this.length === 0) return NaN;
        let avg = 0;
        let sum = 0;
        let len = this.length;
        for (let item of this) {
            sum = sum + item;
        }
        return sum / len;
    }
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function () {
        let sum = 0
        for (let item of this) {
            sum = sum + item;
        }

        return sum;
    }
}

if (!Array.prototype.even) {
    Array.prototype.even = function () {
        let newArray = []
        for (let item of this) {
            if (item % 2 == 0) newArray.push(item);
        }
        return newArray;
    }
}

if (!Array.prototype.odd) {
    Array.prototype.odd = function () {
        let newArray = []
        for (let item of this) {
            if (item % 2 != 0) newArray.push(item);
        }
        return newArray;
    }
}



const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())

console.log(numbers.even())

console.log(numbers.odd())
