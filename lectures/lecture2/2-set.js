


class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.oricinalArray = arr
    }

    add(val) {
        super.add()
        console.log(`added ${val} to the set`);
    }

    toArray() {
        return Array.from(this)
    }

    reset() {
        return new MySet(this.oricinalArray)
    }
}
