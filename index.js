function calculate(calculationSteps) {
  for (let i = 0; i < calculationSteps.length; i++) {
    if (calculationSteps[i] === null) {
      return 0
    }
    if ((calculationSteps[i] === undefined)) {
      let cleanArray = calculationSteps.filter(Boolean)

      return cleanArray
    }
    if ((calculationSteps[i] === '') || (isNaN(calculationSteps[i]))) {
      calculationSteps[i].splice(i, 1)

      return calculate
    }
    let numOne = calculationSteps[0]
    let operator = calculationSteps[1]
    let numTwo = calculationSteps[2]

    switch (operator) {
      case '+': return numOne + numTwo
      case '-': return numOne - numTwo
      case '*': return numOne * numTwo
      case '/': return numOne / numTwo
    }
  }


  return calculationSteps
}

module.exports = calculate
