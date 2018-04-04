let start = new Date().getTime()

setTimeout(() => console.log("xyz"), 3000)

console.log("start")
while (new Date().getTime() < start + 5000);
console.log("end")