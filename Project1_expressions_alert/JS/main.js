document.write("Hello World.<br>") //"document.write" is used to make text show up on a webpage 
var A = "<br>A sentence is a string.<br>"; //creating a variable using "var ____ =" 
document.write(A); // this gets the ttext inside that variable to show up, you can use this in instances where you want to use the 
                   // same variable over and over again 

document.write("<br>If you need to write a quotation mark in JavaScript, you just put a backslash before it like this: \"Hello\" <br> and then the program will show it as an actual quotation mark instead of ending the string."); 
document.write(" Same goes for these symbols: \\  \'<br>"); 
document.write("<br>\"Be who you are and say what you feel,<br>" 
+ " because those who mind don\'t matter and those who matter don\'t mind.\”<br>"
+ "-Dr. Seuss<br>"); 

var B = "<br>\"One day the people that don’t even believe in you"
+ " will tell everyone how they met you.\"<br>" //using the plus sign on the lines below this makes sure this whole quote is all in one varible. 
+ "– Johnny Depp<br>"; 
document.write(B) 

//Example: 
var Family = "The Simpsons", Dad = "Homer", Mom = "Marge", Daughter = "Lisa", Son ="Bart"; 
document.write(Son);
document.write("<br>");
document.write(Mom); 
document.write("<br>"); 
//The above example shows that you can group variables together. 


var blues = "Marge has blue hair<br>"; //this is the text people will see 
var blues = blues.fontcolor("blue"); //this is the font color 
document.write(blues);              //this is the call to invoke the line. The method used to show this line in the webpage

var blue = Mom.fontcolor("blue"); 
document.write(blue); 
document.write("<br>"); 

var purple = Dad.fontcolor("purple"); 
document.write(purple); 
document.write("<br>"); 

var red = Son.fontcolor("red"); 
document.write(red); 
document.write("<br>"); 

var pink = Daughter.fontcolor("pink"); 
document.write(pink); 
document.write("<br>"); 
//this shows how to do the math problem: document.write(3+3);
document.write("3 plus 3 = "); //this line is just so the whole equation shows up on the page otherwise the person would just see "6" as the result. 
document.write(3+3);

