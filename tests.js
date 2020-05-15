var tests = {
  displayValid: displayValid,
  buttonsValid: buttonsValid
}

// Checks the display to make sure:
// 1. it is not null
// 2. It takes the value of a digit button push

function displayValid () {
  if (typeof display == "undefined") {
    alert('Remember to define your <code>display</code> object!')
    return false
  }
  return true
}



// Checks each buttons to make sure:
// 1. it is not null
// 2. it has a value property

function buttonsValid (cell) {
  if (typeof buttons == "undefined") {
    alert('At least one of those buttons is not an object! <code>{ }</code>')
    return false
  }
 
  
 
  return true
}

