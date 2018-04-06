function f() {

}

let o = {}

let n = 10

let s = "khbvj"

let b = true

function MyClass(k) {
    this.k = k
    this.f = function () {
        console.log("F")
    }
    return 10

}

MyClass.prototype.f1 = function () {
    console.log("f1" + this.k)
}

MyClass.f2 = function () {
    console.log("f2")
}

let myObj = new MyClass(10)
let myObj2 = new MyClass(20)

myObj.f1()
myObj2.f1()
MyClass.f2()


function sum(a, b) {
    if (!b) b = 0
    return a + b
}

sum(1, 2)
sum(1)