

//---------------------------------------------------LOOP------------------------------------------// 
function counter() { //this is the example for how to create a loop 
    var Digit = ""; 
    var X = 1; 
    while (X < 11) { 
        Digit += "<br>" + X; 
        X++; 
    } 
    document.getElementById("Counting_to_Ten").innerHTML = Digit; 
} 

function string_length() { //this is a string counter, it tells you how many characters are in a string 
var x = "Hello World!";
document.getElementById("string").innerHTML = x.length;
} 