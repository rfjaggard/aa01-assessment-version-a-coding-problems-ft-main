/*
First, create a function called getAverage(nums) which takes a single array of
numbers and returns the average.

Then, write a function highestAverage(numsList) that takes in a
2-dimensional array of numbers and returns THE INDEX of the sub-array with the
highest average value.

Constraint: Use the getAverage function as a helper function in the
highestAverage function to solve the problem.
*/
/*
  1. create a function that returns an average of arrays
    a. create a for loop to add all numbers in an array together
    b. divide the result by 2
  2. iterate through the 2d array with a for loop
    a. find average for each subarray using previous function
    b. pull the index from the highest average
  3. make an if clause to make sure the highest average is printed
    a. return the index of the sub array
*/
function getAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

function highestAverage(numsList) {
  let maxAv = -Infinity;
  let maxIn = -1;

  for (let i = 0; i < numsList.length; i++) {
    let subArr = numsList[i];
    let avg = getAverage(subArr);

    if (avg > maxAv) {
      maxAv = avg;
      maxIn = i
    }
  }
  return maxIn;
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

console.log(getAverage(arrayA)); // 3
console.log(getAverage(arrayB)); // 1
console.log(getAverage(arrayC)); // 44
console.log(getAverage(arrayD)); // 8

console.log(highestAverage([arrayA, arrayB, arrayC, arrayD])); // 2
console.log(highestAverage([arrayA, arrayB])); // 0
console.log(highestAverage([arrayA, arrayD])); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  getAverage,
  highestAverage,
};
