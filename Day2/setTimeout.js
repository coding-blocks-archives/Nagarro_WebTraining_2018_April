/*

setTimeout (a, b) -> 
    after b milliseconds
    call a()

*/
// let i = setTimeout(
//     () => console.log("inner fun"),
//     500
// )
//clearInterval(i)


function greet(greeting, name) {
    console.log(greeting + " " + name)
}
console.log("start")


setTimeout(greet, 500, "Hello", "Jane")

console.log("end")

//start
//end