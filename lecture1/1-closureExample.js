function makeHelloFunction() {
    const message = "hello"

    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

sayHello()
