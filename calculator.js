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

//Create a boolean to track whether prev button was a number
var prevNum = 0

//Create a boolean to track whether last button was a number
var lastNum = 0

//Create a variable to track  operators
var lastOp = 'add'
var operator = true

// Create variable for the calculator object from the html class calculator
const calculator = document.querySelector(".calculator")

// Create object for display object as child of calculator
const display = calculator.querySelector(".display")

// Create object for buttons object as child of calculator
const buttons = calculator.querySelector(".buttons")

// Create an event listener on the buttons listen for button click
buttons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        // Then determine what key was pressed 
        const buttonPress = e.target
        const keyContent = buttonPress.textContent
        console.log("that key is " + keyContent + " and previous keys were " + sequenceArr)
            // Then determine the action 
        const action = buttonPress.dataset.action
        var keyType = getKeyType(action)

        // Then calculate and display the result

        // If the button value is 0,1,2,3,4,5,6,7,8, or 9 and IS NOT a decimal or NOT growing number
        if (keyType == 'number' & decimal == false & operator == true) {
            //Add number to sequence
            sequenceArr.push(keyContent)
                // Assigns that value of the button to the screen value 
            display.textContent = keyContent
                //Keep numeric value
            prevNum = keyContent
            operator = false
            console.log(`Path 1 number key no decimal, prevNum is now ${prevNum} and last op is ${lastOp}`)

            // If  the button value is 0,1,2,3,4,5,6,7,8, or 9 and screen IS a decimal or is a large number
        } else if (keyType == 'number' & decimal == true) {
            //Update number in sequence concatenating last value with new value
            sequenceArr[sequenceArr.length - 1] = sequenceArr[sequenceArr.length - 1] + keyContent
            prevNum = sequenceArr[sequenceArr.length - 1]
                //Assigns that value of the button to the screen value
            display.textContent = prevNum
            operator = false
            console.log(`Path 2 number key and decimal, prevNum is now ${prevNum}and lastOp is  ${lastOp}`)

            // If  the button value is 0,1,2,3,4,5,6,7,8, or 9 and screen IS a decimal or is a large number
        } else if (keyType == 'number' && operator == false) {
            //Update number in sequence concatenating last value with new value
            sequenceArr[sequenceArr.length - 1] = sequenceArr[sequenceArr.length - 1] + keyContent
                //Assigns that value of the button to the screen value 
            display.textContent = sequenceArr[sequenceArr.length - 1]
            operator = false
            console.log(`Path 3 number key and growing` + sequenceArr[sequenceArr.length - 1])
        }
        // If it is one of the clear buttons it will clear the screen value, and reset the running total to 0, set decimal to false and break
        else if (keyType === 'clear') {
            sequenceArr.push(keyContent)
            display.textContent = 0
            total = 0
            decimal = false
            operator = true
            console.log('Path 4 clear key, display is 0, total is reset, decimal is false, lastOp is empty, prevNum is -1')

        }
        // If the button value is  a decimal
        else if (keyType === 'decimal') {
            sequenceArr[sequenceArr.length - 1] = sequenceArr[sequenceArr.length - 1] + "."
            display.textContent = sequenceArr[sequenceArr.length - 1]
            decimal = true
            console.log('Path 5 decimal key, last value becomes an increasing decimal-  only decimal is true')
        }

        // Else if operator +,-,/ or * then add to sequence
        else if (keyType == 'operator') {
            //Add operator to sequence
            sequenceArr.push(keyContent)
            lastOp = action
            operator = true
            decimal = false
            console.log(`Operator key added to sequence is ${keyContent}no change to display, decimal is now false, lastOp is now ${lastOp}, prevNum is now ${prevNum}`)
        }


        // Else if it is the operator button = then return the running total value
        else if (keyType === 'equals') {
            //Add equals to sequence
            sequenceArr.push(keyContent)
                // Calculate the last and previous numbers for the calculation
            lastNum = parseFloat(sequenceArr[sequenceArr.length - 2])
            prevNum = parseFloat(sequenceArr[sequenceArr.length - 4])
                // Display the returned total
            display.textContent = calculation(prevNum, lastOp, lastNum)
            lastOp = 'equals'
            operator = true
            decimal = false
            console.log(`Equals key, the sequence is ${sequenceArr} and last operator is ${lastOp} and lastNum is ${lastNum} and prevNum is ${prevNum}`)
        }

        // Else if it is the operator button %
        else if (keyType === 'percentage') {
            //Add % to sequence
            sequenceArr.push(keyContent)
            lastNum = parseFloat(sequenceArr[sequenceArr.length - 2])
            var per = parseFloat(lastNum) / 100
            display.textContent = per
            sequenceArr.push(per)
            console.log(`${lastOp}....${lastNum}to${per}`)
        }
    }
})

// Create a new calculation function. The add operator is slightly different in that it can take a running total from the screen display content
var calculation = (prevNum, lastOp, lastNum) => {
    var num1 = parseFloat(prevNum)
    var num2 = parseFloat(lastNum)
    if (lastOp === 'add') return total + num1 + num2
    if (lastOp === 'subtract') return num1 - num2
    if (lastOp === 'multiply') return num1 * num2
    if (lastOp === 'divide') return num1 / num2
}

// Create a new function to return the categorised keyType
var getKeyType = (action) => {
    if (!action) return 'number'
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator'
        // For everything else, return the action
    return action
}