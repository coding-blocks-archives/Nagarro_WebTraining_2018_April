// function comparator (a,b) {
//   console.log(a + ' ' + b)
//   return a - b 
// }

let arr = [4,8,1,6,2,11]
console.log(arr)
// reverse lexicographical
// arr.sort((a,b) =>  b.toString() > a.toString())
arr.sort((a,b) => a - b)
console.log(arr)