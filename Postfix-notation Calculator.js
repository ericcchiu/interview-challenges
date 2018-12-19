// Approach
// Iterate over input 
// If token is an operator 
// Pop operand 2 from the stack 
// Pop operand 1 from the stack 
// Evaluate the token with operand 1 and operand 2 
// Push result back to stack 
// Else if token is an operand 
// Push token onto the stack 
// Pop the result from stack 
const calculate = (inputs) => {

  const stack = [];
  inputs = inputs.split(' ');
  console.log(inputs);

  const evaluator = (operand1, operand2, operator) => {
    if (operator === '+') {
      return operand2 + operand1;
    } else if (operator === '-') {
      return operand2 - operand1;
    } else if (operator === '*') {
      return operand2 * operand1;
    } else if (operator === '/') {
      return operand2 / operand1;
    }
  }

  for (let item of inputs) {
    if (Number(item)) {
      stack.push(item);
    } else {
      let operand1 = Number(stack.pop());
      let operand2 = Number(stack.pop());
      let evaluatedResult = evaluator(operand1, operand2, item);
      stack.push(Number(evaluatedResult));
    }
  }
  return stack.pop();
}





console.log(calculate("100 2 / 25 +")); 