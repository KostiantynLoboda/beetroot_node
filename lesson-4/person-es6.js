//ES6
const EventEmitter = require('events');
const action = 'action';

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.on(action, function () {
            this.speaks();
        })
    }

    speaks = function () {
        console.log(this.name);
    }

}

Person.prototype.says = function() {
    this.emit(action, this.name);
}

let bill = new Person('Bill');
let tom = new Person('Tom');

bill.says();
tom.says();