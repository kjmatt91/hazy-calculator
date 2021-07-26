function calculate(calculationSteps) {
  // let operators = ['+', '-', '*', '/']

  for (let i = 0; i < calculationSteps.length; i++) {
    if (calculationSteps[i] === null) {
      return 0
    }
    if ((calculationSteps[i] === undefined)) {
      calculationSteps = calculationSteps.filter(Boolean)
    }
    // if (typeof (calculationSteps[i]) === Number || calculationSteps[i] === operators) {
    //   calculationSteps.splice(i, 1)
    // } I'm fresh out of ideas

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
}

module.exports = calculate
