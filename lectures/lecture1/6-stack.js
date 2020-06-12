function addOne(num) {
    throw new Errorr("An error!")
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum());
}

c()
