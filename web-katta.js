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
