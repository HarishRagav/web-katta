// sum of two numbers
function myFunction(a, b) {
   return a + b;
}
// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function myFunction(a, b) {
  return a === b;
}

// Write a function that takes a value as argument. Return the type of the value.
function myFunction(a) {
   return typeof a;
}

// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myfunction(a,n){
   return a.charAt(n-1)
}
// another solution
function myFunction(a, n) {
   return a[n - 1];
}

// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function myFunction(a){
   return a.slice(3)
}
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function myFunction(str) {
   return str.slice(-3);
}
// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
function myFunction(a) {
   return a.slice(0, 3);
}
// remove last n elements in an array
// write a javascript function to remove last three elements in a string
function myFunction(a) {
   return a.slice(0, -3);
}
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
function myFunction(a) {
   return a.indexOf('is');
}
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result
function myFunction(a) {
   return a.slice(0, a.length / 2);
}
// Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
let num = 1;
num = 2;
console.log(num);

// Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code.
let num;
num = 2;
console.log(num);

// Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code.
let numOne = 5;
let numTwo = numOne;
console.log(numTwo);

// Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne and run the code.
let numOne = 5;
let numTwo = numOne;
console.log(numTwo);

// In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method.
// But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message.
// Fix the mistake and run the code again.
const num = 5;
console.log(num);

// This exercise is very similar to the previous one. We declare a variable called num, assign it a value of 5, and try to log it. But again, we introduced a small mistake.
// Fix the code and run it.
const num = 5;
console.log(num);

// In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num.
// Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.
const num = 5;

// The code below first declares a variable named num with a string value hello. Then, a new value bye is assigned. Finally, the variable is logged.
// But, the code will not work like that. Find the mistake and fix it. Execute the corrected code.
let num = 1;
num = 2;
console.log(num);
console.log('The value of num is: ' + num);

// Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.
let isTrue;
isTrue = true;
console.log(isTrue);

// Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.
// Extend the code such that the console.log() statement logs false.
let num = 5;
num = 0;
const bool = Boolean(bool);
console.log(bool);

// In the console.log() 
// statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true.
const numOne = 5;
const numTwo = 5;
console.log(numOne == numTwo);

// In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. Change the code so that the console.log()
// statement logs true.
const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo);

// greater than challenge 
const numOne = 6;
const numTwo = 5;
console.log(numOne > numTwo);

// In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() 
// statement logs true.
const numOne = 1;
const numTwo = 2;
console.log(numOne < numTwo);

// greater than or equal to challenge
const numOne = 3;
const numTwo = 2;
const numThree = 2;
console.log(numOne >= numTwo, numTwo >= numThree);

// lesser than or wequal to challenge 
const numOne = 1;
const numTwo = 1;
const numThree = 2;
console.log(numOne <= numTwo, numTwo <= numThree);

// In this scenario, the existing code adds an eventListener for a click event on a variable buttonElem. It expects buttonElem to be the button element in the example UI. But, that element is not selected yet.
// Assign the button element to the variable buttonElem. Click the button to verify that the code is working.
// Hint: Make use of the unique id of the button element.
  const buttonElem = document.getElementById("button");
  
  buttonElem.addEventListener('click', () => {
    const oldText = buttonElem.innerText;
    return button.innerText = oldText === "ON" ? "OFF" : "ON";
  });
