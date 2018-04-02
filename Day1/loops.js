for (let i = 0; i < 5; i++) {
  console.log(i)
}

let j = 5
while (j > 0) {
  j--
  console.log(j)
}

let a = ['a', 'b', 'c']

for (let p in a) {
  console.log(p + ' : ' + a[p])
}

for (let q of a) {
  console.log(q)
}

let o = {x: 1, y: 2, z: 3}

for (let r in o) {
  console.log(r)
}

for (let s in o) {
  console.log(o[s])
}