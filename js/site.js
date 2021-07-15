//GET THE VALUES FROM THE PAGE//
//starts or controller function
function getValues() {
  //get values from the page
  let startValue = document.getElementById('startValue').value
  let endValue = document.getElementById('endValue').value

  //we need to validate our input
  //parse into Integers
  startValue = parseInt(startValue)
  endValue = parseInt(endValue)

  //check that the values are integers
  if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
  //call generateNumbers
   let numbers = generateNumbers(startValue, endValue)

  //call displayNumbers
  displayNumbers(numbers)
  } else {
    alert('You must enter integers')
  }
}

//GENERATE VALUES FROM THE START VALUE TO END VALUE//
//logic function(s)
function generateNumbers(startValue, endValue) {
  let numbers = []

  //we want to get all numbers from start to end
  for(let i = startValue; i <= endValue; i++) {
    // this will execute in a loop until i = endValue
    numbers.push(i)
  }

  return numbers
}

//DISPLAY VALUES AND MARK THE EVEN NUMBERS BOLD WHEN BUTTON PRESSED//
//display or view function
function displayNumbers(numbers) {

  let templateRows = ''
  for (let index = 0; index < numbers.length; index++) {
    let className = 'even'
    let number = numbers[index];

    if(number % 2 === 0) {
      className = 'even'
    } else {
      className = 'odd'
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`
  }

  document.getElementById('results').innerHTML = templateRows
}
