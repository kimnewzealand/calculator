// -    -   - //
// Calculator //
// -    -   - //

document.addEventListener('DOMContentLoaded', start)


function start() {
    // Run the tests
    init()


    console.log("Ready")

}

function init() {
    if (!tests.displayValid() || !tests.buttonsValid()) {
        alert("Test failed!" + tests.displayValid() + tests.buttonsValid())
        return null
    }
}

// Create an running total variable default to 0
var total = 0

// Create an array with the sequence of input values as buttons are clicked
var sequenceArr = ['']

// Create a boolean to track whether  a decimal number
var decimal = false

//Create a boolean to track whether last button was a number
var lastIndex = 0
    //Create a variable to track  operators
var lastOp

// Create variable for the calculator object from the html class calculator
const calculator = document.querySelector(".calculator")

// Create object for display object as child of calculator
const display = calculator.querySelector(".display")

// Create object for buttons object as child of calculator
const buttons = calculator.querySelector(".buttons")

// Create object for equals object as child of buttons
const equals = buttons.querySelector(".equals")

// Create an event listener on the buttons listen for button click
buttons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        // Then determine what key was pressed 
        const buttonPress = e.target
        const keyContent = buttonPress.textContent

        console.log("that key is " + keyContent + " and previous keys were " + sequenceArr)

        // Then determine the action and 
        const action = buttonPress.dataset.action

        console.log("the action is " + action)

        //Then do something with the display

        // If the button value is 0,1,2,3,4,5,6,7,8, or 9 and IS NOT a decimal or NOT larger number
        if (!action & (decimal == false | lastIndex < 0)) {
            //Add number to sequence
            sequenceArr.push(keyContent)

            // Assigns that value of the button to the screen value 
            display.textContent = keyContent
                //Keep numeric value
            lastIndex = keyContent

            console.log(`Path 1 number key no decimal, lastIndex is now ${lastIndex} and last op is ${lastOp}`)


            // If if the button value is 0,1,2,3,4,5,6,7,8, or 9 and screen IS a decimal or is a large number
        } else if (!action & (decimal == true | lastIndex >= 0)) {
            //Update number in sequence concatenating last value with new value
            sequenceArr[sequenceArr.length - 1] = sequenceArr[sequenceArr.length - 1] + keyContent
                //Assigns that value of the button to the screen value 
            display.textContent = sequenceArr[sequenceArr.length - 1]

            //Keep numeric value
            lastIndex = sequenceArr[sequenceArr.length - 1]
            console.log(`Path 2 number key and decimal, lastIndex is now ${lastIndex}and lastOp is  ${lastOp}`)

        }
        // If it is one of the clear buttons it will clear the screen value, and reset the running total to 0, set decimal to false and break
        else if (action === 'clear') {
            display.textContent = 0
            total = 0
            decimal = false
            lastIndex = -1
            lastOp = ''
            sequenceArr.push(keyContent)
            console.log('Path 3 clear key, display is 0, total is reset, decimal is false, lastOp is empty, lastIndex is -1')

        }
        // If the button value is  a decimal
        else if (action === 'decimal') {
            decimal = true
                //lastindex no change
                //lastop no change
                //total no change
            sequenceArr[sequenceArr.length - 1] = sequenceArr[sequenceArr.length - 1] + "."

            display.textContent = sequenceArr[sequenceArr.length - 1]
            console.log('Path 4 decimal key, last value becomes an increasing decimal-  only decimal is true')
        }

        // Else if it is the operator button +,-,x or / 
        else if (action === 'add') {
            lastOp = action
                //Add number to sequence
            sequenceArr.push(keyContent)
            decimal = false

            //no display change

            total = parseInt(total) + parseInt(lastIndex)
            console.log(`Operator key added to sequence is ${keyContent}no change to display, decimal is now false, lastOp is now ${lastOp}, lastindex is now ${lastIndex} and total is ${total}`)


        } else if (action === 'subtract' | action === 'multiply' | action === 'divide') {
            lastOp = action

            decimal = false

            //no display change
            //no total change

            //Add number to sequence
            sequenceArr.push(keyContent)

            console.log(`Operator key added to sequence is ${keyContent}no change to display, decimal is now false, lastOp is now ${lastOp}, lastindex is now ${lastIndex}`)

        }


        // Else if it is the operator button = then return the running total value
        // this is a bit complicated...check if the previous button value in the sequence is an operator +,-,% or / 
        //                      then create 4 if statements for each operator, each it will return the total with  a calculation
        else if (action === 'equals') {
            console.log(`Equals key, last operator is ${lastOp}`)
                //Add number to sequence
            sequenceArr.push(keyContent)

            if (lastOp == 'add') {
                console.log('adding....' + parseInt(total) + 'to' + parseInt(lastIndex))
                total = parseInt(total) + parseInt(lastIndex)
                    //Assigns the total to the screen value 
                display.textContent = total
                lastOp = 'equals'
                decimal = false

                //reset lastindex
                lastIndex = -1

            } else if (lastOp == 'subtract') {
                console.log('subtracting....')
                total = parseInt(sequenceArr[sequenceArr.length - 4]) - parseInt(lastIndex)
                    //Assigns the total to the screen value 
                display.textContent = total
                lastOp = 'equals'
                decimal = false

                //reset lastindex
                lastIndex = -1
            } else if (lastOp == 'multiply') {
                console.log('multiplying....')
                total = parseInt(sequenceArr[sequenceArr.length - 4]) * parseInt(lastIndex)
                    //Assigns the total to the screen value 
                display.textContent = total
                lastOp = 'equals'
                decimal = false

                //reset lastindex
                lastIndex = -1
            } else if (lastOp == 'divide') {
                console.log('dividing....' + parseInt(sequenceArr[sequenceArr.length - 4]) + 'by' + parseInt(lastIndex))
                total = parseInt(sequenceArr[sequenceArr.length - 4]) / parseInt(lastIndex)
                    //Assigns the total to the screen value 
                display.textContent = total
                lastOp = 'equals'
                decimal = false

                //reset lastindex
                lastIndex = -1
            }









        }

        // Else if it is the operator button %
        //to do
    }
})