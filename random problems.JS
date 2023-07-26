PALINDROME:-
var arr="malayalam";var out=0;
for(let i=0;i<arr.length/2;i++){
 let j=arr.length-1-i;
        if(arr[i]==arr[j]){
            out++;
        }
    
}
out--;
out==Math.floor(arr.length/2)?console.log("It's a Palindrome"):console.log("Not a Palindrome");

console.log(out);


AMSTRONG:-
var ans = '1634';
var arr = ans.split('');
var out = 0;
var power = arr.length;

for (let i = 0; i < arr.length; i++) {
  var add = Math.pow(Number(arr[i]), power); 
  out += add;
}

var result = out.toString();
if (result === ans) {
  console.log('It is an Armstrong number');
} else {
  console.log("It is not an Armstrong number");
}

console.log(result);
console.log(ans);
