const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    },
}

const o2 = Object.assign({}, o)

o2.obj.key = 'new value'

console.log(o.obj.key);

// o2.a = 'new value'
//
// console.log(o2.a)

function deepCopy(obj) {
    // Check if vals are objects
    // If so, copy that object
    // Else, return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy(o)

o3.obj.key = 'new key'
console.log(o3.obj.key);
