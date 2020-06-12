const o = new Object()
o.firstName = "Heisson"
o.lastName = "Lima"
o.isTeaching = false
o.greet = function () {
    console.log('hi');
}

const o2 = {}
o2.firstName = 'Heisson'
o2['lastName'] = 'Lima'
const key = "isTeaching"
o2[key] = false
o2['greet'] = function () {
    console.log('hi');
}

const o3 = {
    firstName: 'Heisson',
    lastNamem: 'Lima',
    isTeaching: false,
    greet: function () {
        console.log('hi');
    },
    address: {
        street: "St",
        number: 21,
    }
}
