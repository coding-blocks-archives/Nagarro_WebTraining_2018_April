let obj = {
  a: 10,
  // b: 'hello',
  // c: true,
  d: [1,2,3],
  p: 'c'
}

console.log(obj)
console.log(obj.a)
obj.x = "ASdsadasdsad"
console.log(obj)

obj['e'] = 20
console.log(obj)

let a = 'b'
console.log(obj[a])

console.log(obj[obj.p])

obj.o = obj

obj['hello world'] = 'wow'

obj[' '] = 'space'

obj[''] = 0
