console.log("start")

function fun1(fun2) {
    console.log("running fun1")
    fun2()
}

function fun() {
    console.log("running fun")
}

fun1(fun)

console.log("end")

//start
//running fun1
//running fun
//end