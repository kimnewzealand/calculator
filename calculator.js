// -    -   - //
// Calculator //
// -    -   - //

document.addEventListener('DOMContentLoaded', start)


function start() {
    init()
    console.log("Ready")

}

function init() {
    if (!tests.displayValid() || !tests.buttonsValid()) {
      alert("Test failed!"+tests.displayValid()+tests.buttonsValid())
      return null
    }
}

// Create variable for the calculator object from the html class calculator
const calculator = document.querySelector(".calculator")

// Create object for display object as child of calculator
const display = calculator.querySelector(".display")

// Create object for buttons object as child of calculator
const buttons = calculator.querySelector(".buttons")

// Create object for equals object as child of buttons
const equals = buttons.querySelector(".equals")

// Create an running total variable default to 0
var total = 0

// Create an array with the sequence of input values as buttons are clicked
var sequenceArr = []


// Create an event listener on the buttons listen for button click, 



buttons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        // then determine what key was pressed 
        const buttonPress = e.target
        const keyContent = buttonPress.textContent
        sequenceArr.push(keyContent)
        console.log("That key is " + keyContent + " in " + sequenceArr)

        //then do something with the display
        const action = buttonPress.dataset.action
        console.log("action is " + action)
        if (!action) {
            // If if the button value is 0,1,2,3,4,5,6,7,8, or 9 
            // it will assigns that value of the button to the screen value 
            console.log('number key!')
            display.textContent = keyContent
        }
        if (action === 'decimal') {
            console.log('decimal key!')
            var thisNum = display.textContent + '.'
            //sequenceArr[sequenceArr.length] = thisNum
            display.textContent = thisNum


        }
        //      If it is one of the clear buttons it will clear the screen value, and reset the running total to 0 and break
        if (action === 'clear') {
            console.log('clear key!')
            display.textContent = 0
            total = 0
        }

        // Else if it is the operator button +,-,% or / then break

        if (action === 'add') {
            console.log('add key!')


        }
        // Else if it is the operator button = then return the running total value
        // this is a bit complicated...check if the previous button value in the sequence is an operator +,-,% or / 
        //                      then create 4 if statements for each operator, each it will return the total with  a calculation
        // Start with addition
        if (action === 'equals') {
            console.log('equal key! the total is ' + total + ' and last digit key was ' + sequenceArr[sequenceArr.length - 4])
            total = total + parseInt(sequenceArr[sequenceArr.length - 4]) + parseInt(sequenceArr[sequenceArr.length - 2])
            display.textContent = total
        }
    }
})

