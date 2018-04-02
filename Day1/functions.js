function sum (a, b = 0) {
  return a + b
}

console.log(sum(2,3))

console.log(sum(4))

function mult (a, b = a/2) {
  return a * b
}

console.log(mult(3,6))
console.log(mult(4))

console.log(sum)
console.log(typeof mult)

let greet = function (name) {
  console.log("Hello " + name)
}

let sqr = (x) => x * x 

let div = (x,y) =>  x/y

greet("Harry")

console.log(sqr(5))
console.log(div(4,2))