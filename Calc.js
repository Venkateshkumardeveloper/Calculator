let userInput = document.getElementById("input")
userInput.value = 0
let expression = ""

function click1(x){
    expression = expression+x
    userInput.value = expression
}

function equal(){
    expression = eval(expression)
    userInput.value = expression
}

function earse(){
    expression = ""
    userInput.value = expression
}
