function Person(name, age) {
    this.name = name
    let mAge = age
    this.isAdult = () => mAge > 18

}

Person.prototype.isAdult = function () {

}

function sum(a, b) {
    return a + b
}



let p = new Person("John", 30)
let s = new sum(10, 20)