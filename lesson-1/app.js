const Person = require('./person');

const userFirst = new Person('Kostya', 'Dnipro');
const userSecond = new Person('Vadym', 'Kyiv');

console.log(userFirst.getInfo());
console.log(userSecond.getInfo());