// Solve 1:
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

// Solve 2
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

// Solve 3
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

// Solve 4
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

// Solve 5
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

//Solve 6
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

// Solve 8
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