//ES5
var util = require('util');
var EventEmitter = require('events');
var action = 'action';

function Person(name) {
    this.name = name;
    this.speaks = function (msg) {
        console.log(msg);
    }
}
util.inherits(Person,EventEmitter);

Person.prototype.on(action, function(msg) {
    this.speaks(msg);
});

var bill = new Person('Bill');
var tom = new Person('Tom');

// Эти два метода нужно добавить по условию, но удобнее указать 1 метод в прототип, как указано ниже.
/*bill.says = function() {
    this.emit('action', this.name);
}
tom.says = function() {
    this.emit('action', this.name);
}*/

Person.prototype.says = function() {
    this.emit(action, this.name);
}

bill.says();
tom.says();