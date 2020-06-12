// console.log(thisIsALet) //error
// console.log(thisIsAVar) //not an error, hoisting

// thisIsHoisted()
// thisIsNotHoisted() // error

const thisIsAConst = 50

// thisIsAConst++ //error

const consObj = {}

consObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 //error

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = "new value"

console.log(thisIsAVar);

function thisIsHoisted() {
    console.log("This function is declared at the bottom at the file");
}

const thisIsNotHoisted = function () {
    console.log("Should this be hoisted?");
}

// thisIsNotHoisted() // it works here
