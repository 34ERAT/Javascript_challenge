// no.1 return sum of two numbers
const addition = (num1, num2) => num1 + num2;

//no.2 convert minutes into seconds
const convert = (num) => num * 60;

// no.3  premeter of Rectangle
const findPerimeter = (length, width) => (length + width) * 2;

// no.4 check negative
const isNegative = (num) => (num < 0 ? true : false);

//no.5 Can I Drive
const canDrive = (name, num) =>
  num >= 18
    ? `${name} is old enough to drive`
    : `${name} is not old enough to drive`;

//no.6 Largest Number
const findLargest = (num1, num2, num3) => {
  const list = [num1, num2, num3];
  let largest = list[0];

  for (k in list) {
    if (list[k] > largest) largest = list[k];
  }
  return largest;
};

//no.7 BMI calculator
const calculateBMI = (weight, height) => {
  const BMI = (height * height) / weight;
  let message = `your BMI is ${BMI} - `;
  if (BMI >= 30) {
    message = message + "Obese";
  } else if (BMI >= 25 && BMI <= 29.9) {
    message = message + "Overweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    message = message + "Normal Weight";
  } else {
    message = message + "Underweight";
  }
  return message;
};

//no.8 Greeting Base on Time
function greetUser(name, hour) {
  let message = "Good ";
  if (hour >= 5 && hour <= 11) {
    message += ` morning, ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    message += ` afternoon, ${name}`;
  } else if (hour >= 18 && hour <= 21) {
    message += ` evening, ${name}`;
  } else {
    message += ` night ,${name}`;
  }
  return message;
}

//no.9 fizzBuzz
function fizzBuzzCheck(num) {
  if (num % 3 > 0 && num % 5 > 0) return num.toString();
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
}

//no.10 perimeter
function perimeter2(symbole, num) {
  let perimeter = {
    s: (num) => (num + num) * 2,
    c: (num) => num * 2 * 3.142,
  };

  return perimeter[symbole](num);
}

//no.11 Sum of Even Number
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

//no.12 Multipy by itself
const powerUp = (num, times) => num ** times;

//no.13 Factorial Calculator
const factorial = (num) => (num == 0 ? 1 : num * factorial(num - 1));

//no.14 multiple sum
const sumMultiples = (num, divisor) => {
  sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % divisor == 0) sum += i;
  }
  return sum;
};

//no.15 sum of Drugs
const sumDigits = (num) => {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + sumDigits(Math.floor(num / 10));
};
