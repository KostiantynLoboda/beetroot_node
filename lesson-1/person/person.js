function Person(name, address) {
    this.name = name;
    this.address = address;
    this.getInfo = function() {
        return `name: ${this.name}, address: ${this.address}`
    }
}

module.exports = Person;