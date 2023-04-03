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
