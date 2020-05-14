// -    -   - //
// Calculator //
// -    -   - //

//document.addEventListener('DOMContentLoaded', startCalculator)

// Create variable for the calculator object from the html class calculator
var calculator = document.getElementsByClassName('calculator')

// Create object for screen object with default value as null from the html object screen
var display = document.getElementsByClassName('display')

// Create object for screen object with default value as null from the html object screen
var buttons = document.getElementsByClassName('buttons')

// Create object for screen object with default value as null from the html object screen
var clear = document.getElementsByClassName('clear')

// Define the cells property as an array
buttons.cells = []

// Create an running total variable default to 0
total = 0



// Create an array with the sequence of input values as buttons are clicked
var sequenceArr = []


// Create an event handler on click for the array buttons, with the button function  buttonClick 
clear.buttonClick = clearClick

// Create a function buttonClick that does something on each button click 
function clearClick() {
//      Saves ie push the value of the button to the sequence array then,
        sequenceArr.push(1)
//      If it is one of the clear buttons it will clear the screen value, and reset the running total to 0 and break

//      Else if it is the operator button +,-,% or / then break

//      Else if if the button value is 0,1,2,3,4,5,6,7,8, or 9 
//          it will assigns that value of the button to the screen value 
//           calculate the running total based on the sequence
//                  this is a bit complicated...check if the previous button value in the sequence is an operator +,-,% or / 
//                      then create 4 if statements for each operator, each it will return the total with  a calculation of sequence[i-2] sequence[i-1] sequence [i]
//              and break

//      Else if it is the operator button = then return the running total value, and reset the running total to 0


}

