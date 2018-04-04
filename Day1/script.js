let arr = [6,2,8,1,9]

let a2 = arr.map((v, i, a) => {
  console.log('v='+v+' i='+i)
  return 2*i
})

console.log(a2)

let a3 = arr.map((v) => v*v)
console.log(a3)

let a4 = arr.filter((v,i,a) => i%2 == 0)
console.log(a4)

let a5 = arr.filter((v, i, a) => v % 2 == 0);
console.log(a5)

let sum = arr.reduce((p, v, i, a) => p + v)
console.log(sum)

let mult = arr.reduce((p,v,i,a) => p * v)
console.log(mult)

let arr1 = [3,6,8]

let arr1sqr = arr1.map(v => v * v);

let mean = arr1sqr.reduce((p, v) => p + v) / 3

let rms = Math.sqrt(mean)

Math.sqrt(arr1.map(v => v*v).reduce((p,v) => p + v) / arr1.length )