/*
Build a calculator function that takes in three arguments: `num1`, `operator`,
and `num2`. Each number will be an integer and the operator will be `+`, `-`,
`*` or `/`. Your function will perform the calculations between the two
numbers and return the answer.

If the operator is invalid, return the string "Invalid Operator".
*/

function calculator(num1, operator, num2) {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '/') {
    return num1 / num2;
  } else {
    return "Invalid Operator";
    }
  }

// console.log(calculator(123, "+", 456)); // 579
// console.log(calculator(987, "-", 654)); // 333
// console.log(calculator( 99, "*",   3)); // 297
// console.log(calculator(111, "/",   3)); //  37
// console.log(calculator( 42, "?",  42)); // "Invalid Operator"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = calculator;
