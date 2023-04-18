// Change the color of the text "This is an Umbrella" to blue color by using javascript
document.getElementById("sid").style.color="blue";

//Display the length of input field value with id 'myLength' in paragraph tag with id 'sid' using JS. Note: Values are assigned dynamically during validation.
function calculateLength(){
    //Write your code here
    const input = document.getElementById("myLength");
    const sid = document.getElementById("sid");
    const length = input.value.length;
    sid.textContent=length;
}

//Add values in Input 1 and input 2 fields with id 'in1', 'in2' and Display the resultant in the paragraph tag with id "result"
//Note: Values are assigned dynamically for evaluation
function calculateSum(){
    //Start Your code here
    var inp1=document.getElementById("in1").value;
    var inp2=document.getElementById("in2").value;
    var calc= Number(inp1) + Number(inp2);
    var result = document.getElementById("result");
    result.textContent=calc;
}

//Change the content of the paragraph tag with id name as hello from "Hello by HTML" to "Hello by JavaScript"
document.getElementById("hello").innerHTML ="Hello by JavaScript";

//Hide the elements with id name as hello from "Hello by HTML" using JavaScript with display property
document.getElementById("hello").style.display="none";

//Display "Hello World!" by using a p tag which is already present with id 'demo' in JavaScript
document.getElementById("demo").innerHTML="Hello World!";

//Display "Hello from Guvian!" in a paragraph tag, using Javascript
var text=document.createElement("p");
text.textContent="Hello from Guvian!";
document.body.appendChild(text);

// Getting Value Of Select Tag
//Display the value of selected option in paragraph tag with id 'selectedOption' using Javascript. Note: Values are changed dynamically for evaluation
function getSelectedOption(){
var tag = document.getElementsByTagName("select");
var grab = tag[0].value;
var para=document.getElementById("selectedOption");
para.innerText=grab;
    
}
getSelectedOption();

// Getting Value Of Radio Button
//Display the value of selected radio button in paragraph tag with id 'selectedOption' using Javascript. Note: Values are changed dynamically for evaluation
// function displaySelectedOption(){
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//   const selectedOptionText = selectedOption ? selectedOption.value : '';
//   document.getElementById('selectedOption').textContent = selectedOptionText;
// }
// displaySelectedOption();

function displaySelectedOption(){
    const option = document.querySelector('input[name="option"]:checked');
    const into= option ? option.value : '';
    var para=document.getElementById("selectedOption");
    para.textContent=into;
}
displaySelectedOption();

// Calculator - Multiplication
// Multiply given two inputs with id 'in1' and 'in2' and display the values in paragraph tag with id 'result' using Javascript.
function multiply(){
    var input1=document.getElementById("in1").value;
    var input2=document.getElementById("in2").value;
    var multiply= input1 * input2;
    document.getElementById("result").textContent=multiply;
    
}
// String Comparison
// Check whether the given input string with id 'in1' includes 'Java'. if so, display true otherwise false in the paragraph tag with id 'result'.
function checkString(){
    //Start Your code here
    var input1=document.getElementById("in1").value;
    var para = document.getElementById("result");
    if (input1.includes("Java") || input1.includes("java") || input1.includes("JAVA")){
        para.innerText="true";
    }else{
        para.innerText="false";
    }
    
// }
// join
// Join all the given array elements to form a comma seperated string ["Red","Green","White","Black"].Display the resultant in the paragraph with id "demo"
var array =["Red","Green","White","Black"];
document.getElementById("demo").innerText=array;
    
// Condition
// Raju is 13 years old. Display in the given paragraph with id 'demo' as 'Eligible to vote' if he is eligible otherwise 'Not eligible'
var array=13;
if (array>18){
document.getElementById("demo").innerText="eligible";
}else{
  document.getElementById("demo").innerText="Not eligible";  
}
    
// Ceil Of A Number
// Given a number 4.4, Find the nearest greater number and display it in paragraph with id 'demo'
const array =4.4;
const calc = Math.round(array+1);
document.getElementById('demo').innerText=calc;

// Boolean
// Given two numbers in input 1 and input 2 of id 'in1' and 'in2' input fields .if input1 < input2, 
//     display 'true' otherwise 'false' in the given paragraph with id 'result'.
function compare(){
    //Start Your code here
    var input1=Number(document.getElementById("in1").value);
    var input2=Number(document.getElementById("in2").value);
    if (input1<input2){
       document.getElementById("result").innerText=Boolean(1);
    }else{
        document.getElementById("result").innerText=Boolean(0);
    }
    
}

// Color It
// Change the colour of the element with id name as "changeMeToBlue" to blue colour by using Java Script.
    document.getElementById("changeMeToBlue").style.color="blue";
// increase size
//Increase the font size of all the elements with class name as "increase" to 30px using JavaScript.
var classi = document.querySelectorAll(".increase");

classi.forEach(function(classi){
    classi.style.fontSize="30px";
})
// background color
// Change the background colour of all the elements with class name as "changeMeToBlue" to blue colour by using Java Script.
var classic=document.querySelectorAll(".changeMeToBlue");

classic.forEach(function(classic){
    classic.style.backgroundColor="blue";
})

// text-align
// Align the contents to center with id_name as "alignToCenter" using JavaScript
document.getElementById("alignToCenter").style.textAlign="center";
    
// Align the contents to right with id_name as "alignToRight" using JavaScript
document.getElementById("alignToRight").style.textAlign="right";

// backgroundColor
// Change the background colour of the given rectangle to blue color using JavaScript
var color = document.querySelector(".blue-rectangle").style.backgroundColor="blue";

// display
// In the display, "Hello by HTML" is hidden using JavaScript. Show the hidden elements using JavaScript.
document.getElementById("hello").style.display="";

// Insert Content
// Insert "I am JavaScript" to the paragraph tag with id name as insert
document.getElementById("insert").innerHTML="I am JavaScript";

// Addition
// Display addition of 5 and 6 with a paragraph element with id name as "addition" using JavaScript
document.body.innerHTML='<p id="addition"></p>';
var calc = 5+6;
document.getElementById("addition").innerText=calc;

// Arithmetic Operation
// Declare three variables a, b, and c and assign a with 10 and b with 20 and give addition of a and b to c. Display the result in paragraph tag as "C = 30".
var a =10;
var b =20;
var c =a + b;
document.body.innerHTML='<p id="result"></p>';
document.getElementById("result").innerText="C = "+c;

// Create Two Variables
// Assign "Hello" to a string variable, 1 to a variable, print both in same line using Java Script
var string ="Hello ";
var string2=1;
document.getElementById("demo").innerText= string + string2;

// Javascript For Loop
// Print the numbers from 1 to 5 using Javascript using for loop(give space between each number))
var para = document.getElementById("demo");
var space =" ";
for (let i = 1; i <= 5; i++) {
 space += i +" ";
}
para.innerText=space;

    
Display Date of the timestamp from the input field use only IST result should be in p tag (example: timestamp of 1382086394000 must have a output --> Tue Jul 29 45766 12:43:20 GMT+0530 (India Standard Time)
    function showDate(){
//Start Your code here
var code = Number(document.getElementById("in1").value);
var datecalc = new Date(code*1000).toString();
document.getElementById("result").innerText=datecalc;
}

    
    
Given a array, sort the array in Ascending order and print, using Javascript array=[40, 100, 1, 5, 25, 10]; Example(array=[5,4,3,2,1] sorted array 1,2,3,4,5 in p tag)
    
    function quickSort(array){
    if(array.length<=1){
        return array
    }
    var pivot=array[0];
    var right =[];
    var left=[];
    
    for(let i=1;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    
    return quickSort(left).concat(pivot,quickSort(right));
}

var unsorted=[40, 100, 1, 5, 25, 10];
var sorted = quickSort(unsorted);
var string ="array =["+ unsorted +']';
var ansString = " sorted array = [" + sorted +']';
var answer = string + ansString ;
document.getElementById("demo").innerHTML = sorted;
    
//     another Solution using inbbuild function
    var unsorted = [40, 100, 1, 5, 25, 10].sort(function(a,b){return a-b});
document.getElementById("demo").innerText=unsorted;
    

Given an array, Print the elements which are greater than 5 in acending order from that numbers using javascript. if input is 45, 4, 9, 16, 25 Use ',' to separate numbers and Print use the fun() function to process !
    function fun() {
var input=document.getElementById('in1').value;
var split=input.split(',').map(Number);
var filter=split.filter(function(num){return num>=5}).sort(function(a,b){return a-b});
document.getElementById('result').textContent=filter;
      }

//  Sorting function in javascript
    var unsorted=[10,5,7,8,9,4,6,1]
    var sorted=unsorted.sort(function(a,b){return a-b});
 
 
 
