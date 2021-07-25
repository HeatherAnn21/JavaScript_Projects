

function addition_Function() { 
    var addition = 2 + 2; //this is the code to be used 
    document.getElementById("Math").innerHTML = "2 +2 =" + addition; //this makes the code run in HTML 
} 

function subtraction_Function() { 
    var subtraction = 5 - 2;  
    document.getElementById("Math_2").innerHTML = "5 - 2 =" + subtraction; 
} 

function multiplication_Function() { 
    var simple_Math = 6 * 6;  
    document.getElementById("Math_3").innerHTML = "6 * 6 =" + simple_Math; 
} 

function division_Function() { 
    var simple_Math = 48 / 12;  
    document.getElementById("Math_4").innerHTML = "48 / 12 =" + simple_Math; 
} 

function more_Math() { 
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math_5").innerHTML = "(1 + 2) * 10 / 2 -5=" + simple_Math;
} 

function modulus_Operator() { //use this code to find the remainder of a number that has been divided
    var simple_Math = 25 % 6;
    document.getElementById("Math_6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
} 

function negation_Operator() { //this is the code to fine the opposide of a number
    var x = 10;  
    document.getElementById("Math_7").innerHTML = -x; 
} 

var X = 5; 
X++; //the ++ counts up by one step 
document.write(X + "<--This is 5 incremented by 1"); 

document.write("<br>"); 

var X = 5.25; 
X--; //the ++ counts down by one step 
document.write(X+ "<--This is 5.25 decremented by 1"); 

window.alert(Math.random()+ "<--This is a random number between 0 and 1"); //this is now to get a random number from 0-1

window.alert(Math.random() * 100 +"<--This is a random number between 0 and 100"); //this is how to get a random number from 0-100 


//this is a math method, can be used without creating a math object
window.alert(Math.round(3.14)+ "<--This is 3.14 rounded to the nearest integer"); //this brings the number to the closest whole number 

window.alert(Math.PI + "<--This is PI"); //this displays PI 



