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

//-----------------------------------------------Booleen logic--------------------------------------------------------------------------- 
document.write("<br>"); 
document.write(10>2); //this will show the word "true" because 10 is greater than 2
document.write("<br>"); 
document.write(10<2); //this will show the word "false" because 10 is not less than 2 
document.write("<br>"); 

console.log(2+2); //this displays the answer in the console section of the developer tools in the web browser 
document.write("<br>"); 
console.log(2>3); //this displays 'false' in the console section of the developer tools in the web browser 
document.write("<br>");  

document.write((10+5) == 15); //the double equal sign checks to see if the data on each side are equal to each other, this shows 'true'
document.write("<br>"); 
document.write(10==10); //this also shows 'true'
document.write("<br>"); 
document.write(5==11); //this shows 'false' 
document.write("<br>");  

//triple equal signs check to see if the data type and value match on each side 
X = 10; //one equal sign is used to asign a variable 
Y = 10; 
document.write(X===Y); //10 does equal 10 so this will show as true 

document.write("<br>");  

X = 82; 
Y = "82"; //the quotation marks in this make it a string and not a number
document.write(X===Y); //this will show as 'false' because the data types, numbers and strings are not equal to each other 

document.write("<br>");  

X = "Blue"; //dont have to use X and Y as the varibles can use any letter 
Y = "Blue"; 
document.write(X===Y); //this shows as true because the data type and value are the same 

document.write("<br>");  

X = "Blue"; 
Y = "Red"; 
document.write(X===Y); //this shows as 'false' because even though the data types are the same, the values are different 

document.write("<br>");   

document.write(5>2 && 10>4); //this checks if both are true, which they are in this case 

document.write("<br>");  

document.write(1>2 && 10>4); //this checks if both are true, in this case they are not  

document.write("<br>");  

document.write(5>10 || 10>4); //this symbol: || is the 'or' function 
//this will show as 'true' because one of them is true 

document.write("<br>");  

document.write(5>10 || 10>20); //this will show as false because neither of them are true 



//--------------------------------function section-------------------------------------------------------------
function Test() { //this function show when a number is not considered one
    document.getElementById("Test").innerHTML =0/0;
} 


function Test2() { //this will show "true" because a string is not a number
    document.getElementById("Test2").innerHTML =isNaN('This is a string');
} 


function Test3() { // this will show false because 105 is a number 
    document.getElementById("Test3").innerHTML =isNaN('105');
} 

// not operator checks to see if something is false used the exclamation point symbol: ! 
//if something is false it displays in the browser as 'true' 
//if something is true it displays in the browser as 'false' 

function Not_Operator() { // this will show 'false' because it is true
    document.getElementById("Not_Operator").innerHTML =!(20>10); 
} 

function Not_Operator2() { // this will show 'true' because it is false
    document.getElementById("Not_Operator2").innerHTML =!(20<10); 
} 

