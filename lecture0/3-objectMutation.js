const o = {
    a: 'a',
    b: 'b',
}

const o2 = o

o.a = 'new value'

console.log(o2.a)
