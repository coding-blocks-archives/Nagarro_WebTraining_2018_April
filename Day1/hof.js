function hof (fun) {
  fun()
}

function hello () {
  console.log("HELLO WORLD")
}

hof(hello)

function hof2 (greeting) {
  
  function greet (name) {
    console.log(greeting + " " + name)
  }
  
  return greet
}

let g = hof2('Hi')
g('Neha')