// Solve 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const stringReversed = str => {
  const string = str.split("");
  let reversed = [];
  for (let i = string.length - 1; i >= 0; i--) {
    const char = string[i];
    reversed.push(char);
  }
  return reversed.join("");
};

const reversedString = stringReversed("hello world");
console.log(reversedString);

// Solve 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const handlePositiveSum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
};
const totalPositiveSum = handlePositiveSum([2, -5, 10, -3, 7]);
console.log(totalPositiveSum);

// Solve 3 : Write a JavaScript program to find the most frequent element in an array and return it. 

const frequentElement = arr => {
  let maxCount = 0;
  let mostFreq;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        mostFreq = arr[i];
      }
    }
  }
  return mostFreq;
};
console.log(frequentElement([3, 5, 2, 5, 3, 3, 3, 1, 4, 5]))

// Solve 4 : Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const indices = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(indices([1, 3, 6, 8, 11, 15], 9))

// Solve 5 : Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (num1, opr, num2) => {
  switch (opr) {
    case '+':
     return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2

    default:
      return 'invalid operator'
}}
console.log(simpleCalculator(34, "+", 25))

//Solve 6 : Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const passwordGenerator = () => {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*";
  const passLength = 8;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}

console.log(passwordGenerator());
console.log(passwordGenerator());

// Solve 8 : Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest=(arr)=>{
  let smallest=arr[0];
  let secondSmallest=arr[1]
  for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
      smallest=arr[i]
    }else if(arr[i]>smallest && arr[i]<secondSmallest){
      secondSmallest=arr[i]
    }
  }
  return secondSmallest;
}
console.log(secondSmallest([1, 3, 6, 8, 11, 15]))