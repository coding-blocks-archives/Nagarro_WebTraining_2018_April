let x = [10]

function createFun () {
  let y = x
  function fun () {
    return y[0]
  }
  return fun
}

let f1 = createFun()
let f2 = createFun()

console.log(f1())
x[0]++
console.log(f2())