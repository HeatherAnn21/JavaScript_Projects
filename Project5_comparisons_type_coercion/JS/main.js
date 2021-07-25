document.write(typeof "Dog"); //"document.write tells HTML to write whats in the ()" 
//"type of" is where you write the type of operator, which in this case 
//is a word

document.write("<br>"); //this puts a break in the HTML code to made it 
//more organized

document.write(typeof 5); //this is a number operator 

document.write("<br>"); 

//this shows type coercion which is two different data types 
//being added together 
//javascript shows this as 105 and not 10+5 which because its not seing 
//these numbers as a math problem 
//other programing languages would show this as an error 
document.write("10" + 5); 

document.write("<br>"); 

document. write(2E310); // this shows "infinity" because it is larger than 
//the number that javascript considers to be infinity/the largest number 
//it can calculate 

document.write("<br>"); 

document. write(-2E310);//this shows the number in the negative 

function Test() { //this function show when a number is not considered one
    document.getElementById("Test").innerHTML =0/0;
} 


function Test2() { //this will show "true" because a string is not a number
    document.getElementById("Test2").innerHTML =isNaN('This is a string');
} 


function Test3() { // this will show false because 105 is a number 
    document.getElementById("Test3").innerHTML =isNaN('105');
} 

