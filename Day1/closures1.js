function createCounter(init = 0, delta = 1) {
  function counter () {
    console.log('init='+init)
    console.log('delta='+delta)
    init = init + delta
    console.log(init)
  }

  return counter
}

let c1 = createCounter(5, 2)
let c2 = createCounter()

c1()
c1()
c2()
