function greet() {
    console.log(new Date().getTime())
    console.log("Hi")
}

function bye() {
    console.log("Goodbye")
}

let x = setInterval(greet, 1000)
let y = setInterval(bye, 1000)

setTimeout(() => {
    clearInterval(x)
    clearInterval(y)
}, 6000)