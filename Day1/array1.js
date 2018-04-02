let arr = [1,2]
console.log(arr)
console.log(typeof arr)

arr[2] = 20
console.log(arr)

arr[4] = 40
console.log(arr)

arr[3] = "asdsad"
console.log(arr)

console.log(typeof arr[2])
console.log(typeof arr[3])

let x = "John's not here"
let y = 'John said, "No one is here"'

// REPL
// read eval print loop 

console.log(arr.join("-"))

// arr == [ 1, 2, 20, "asdsad", 40 ] 
let a1 = arr.splice(2,1)
console.log(a1) // [20]
console.log(arr) // [1,2,"asdsad",40]

let arr2 = ["a", 1, 5, "b", 7, "d"]
let a2 = arr2.slice(2, 4)
console.log(a2)
console.log(arr2)