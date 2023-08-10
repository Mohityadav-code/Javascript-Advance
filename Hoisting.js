
console.log(
    "Hoisting in Javascript is a mechanism where variables and function declarations are moved to the top of their scope before code execution."
)
console.log("Important thing to note is that only variable declarations are hoisted to the top and not the value initialization.")

// 2. What is the difference between let, var and const?
console.log(
    "var is function scoped and let is block scoped. var can be redeclared and updated but let can only be updated and not redeclared. const is block scoped and cannot be updated or redeclared."
)
var a = 1
let b = 2
const c = 3
console.log(a, b, c)
var a = 4
b = 5
// c = 6
console.log(a, b, c)
function test() {
    var a = 7
    let b = 8
    const c = 9
    console.log(a, b, c)
}
test()
console.log(a, b, c)
function test2() {
    var a = 10
    let b = 11
    const c = 12
    console.log(a, b, c)
    var a = 13
    b = 14
    // c = 15
    console.log(a, b, c)
}
test2()

// what is meaning of function scope and block scope?
console.log(
    "Function scope means that a variable is available within the function it is declared in. Block scope means that a variable is available within the block it is declared in."
)

function test3() {
    var a = 16
    let b = 17
    const c = 18
    console.log(a, b, c)
    if (true) {
        var a = 19
        let b = 20
        const c = 21
        console.log(a, b, c)
    }
    console.log(a, b, c)
}
test3()

// 3. What is the difference between == and ===?
console.log(
    "The == operator compares only value and not type whereas the === operator compares both value and type."
)
console.log(1 == "1")
console.log(1 === "1")
