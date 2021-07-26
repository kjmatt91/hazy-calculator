function calculate(calculationSteps) {
  for (let i = 0; i < calculationSteps.length; i++) {
    // let cleanArray = []

    if (calculationSteps[i] === null) {
      return 0
    }
    if ((calculationSteps[i] === undefined)) {
      // cleanArray = calculationSteps.filter(Boolean)
      calculationSteps = calculationSteps.filter(Boolean)


      // return calculate
    }
    if (calculationSteps[i] === '' || isNaN(parseInt(calculationSteps[i]))) {
      // calculationSteps = calculationSteps[i].splice(i, 1)
      calculationSteps = calculationSteps.filter(Boolean)

      return calculationSteps
      // return false
    }
    let numOne = calculationSteps[0]
    let operator = calculationSteps[1]
    let numTwo = calculationSteps[2]

    switch (operator) {
      case '+': return numOne + numTwo
      case '-': return numOne - numTwo
      case '*': return numOne * numTwo
      case '/': return numOne / numTwo
      default: return NaN
    }
  }


  // return cleanArray
  return calculationSteps
}

module.exports = calculate
