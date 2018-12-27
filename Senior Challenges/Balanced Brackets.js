// Given a string, return true if its arrangement of parenthesis (),vcurly-brackets {}, and 
// square-brackets [] would be considered valid in code and mathematics (is balanced).

// Strategy: 
// Traverse through string from left to right 
// If characater is an open bracket/parenthesis push onto stack 
// If current character is a closing bracket/parenthesis, check for matches in the last item on stack
// True, pop off that last character and continue onto the next element 
// If stack is empty at the end return true 

const isBalanced = (str) => {
  let symbols = '[]{}()';
  const stack = [];
  let character;
  let bracePosition;

  for (let i = 0; character = str[i]; i++) {
    bracePosition = symbols.indexOf(character);
    console.log(character);
    if (bracePosition === -1) continue;

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if (stack.length === 0 || stack.pop() !== bracePosition) return false;
    }
  }
  return stack.length === 0;
}



console.log(isBalanced("(x + y) - (4)"));
// console.log(isBalanced("([)]")) // false
// console.log(isBalanced("()")) // true
// console.log(isBalanced("{}[]()")) // true
// console.log(isBalanced("{[}]")) // false
// console.log(isBalanced("{[}]")) // false
// console.log(isBalanced("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"))