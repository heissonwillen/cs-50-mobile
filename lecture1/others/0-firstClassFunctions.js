const x = [0,1,2,3]

function addOne(num) {
    return num + 1
}

function isGreaterThanOne(num) {
    return num > 1
}

function add(x, y) {
    return x + y
}

console.log(x.map(addOne));
console.log(x.filter(isGreaterThanOne));
console.log(x.reduce(add));
