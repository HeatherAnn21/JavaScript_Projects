
//------------------------GLOBAL VARIABLE-------------------------------// 

//example 
var X = 10; // the variable is written outside of the function so it can be used in any function in this document 
function example_1() {
    document.write("example_1: ")
    document.write(+ 20 + X + "<br>"); 
} 
function example_2() { 
    document.write("example_2: ")
    document.write(X + 100); 
} 
example_1(); 
example_2(); 

document.write("<br>"); 

//-------------------------LOCAL VARIABLE----------------------------- //
function example_3() {
    var Y = 10; //this variable is local aka can only be used inside this specific funtion 
    document.write("example_3: ")
    document.write(20 + Y + "<br>"); 
} 
function example_4() { //the variable of "Y" does not exist in this function or anywhere globally in the code so the answer does not exist 
    document.write("example_4: ")
    document.write(Y + 100); 
} 
example_3();  
// when 'example_4' is not writen as a note examples 5&6 disappear, look up again to fisugre out why, might need to wrap? 


document.write("<br>"); 

//------------------------PRACTICE GLOBAL VARIABLE--------------------// 
var Z = 22; 
function example_5() { 
    document.write("example_5: ")
    document.write(22 + Z + "<br>"); 
} 
function example_6() { 
    document.write("example_6: ")
    document.write(Z + 100); 
} 
example_5(); 
example_6(); 

document.write("<br>"); 

//----------------------PRACTICE LOCAL VARIABLE----------------------// 
function example_7() {
    var Q = 15; //practice local variable, only works in this function not the next one 
    document.write("example_7: ")
    document.write(15 + Q + "<br>"); //can replace "document.write" with "console.log" to see in the console log of web browswer
} 
function example_8() {
    document.write("example_8: ")
    console.log(Q + 100); //this is where I wrote the code to see the error in the console log 
} 
example_7(); 
//example_8(); see notes for example 4 

//-----------------EXAMPLE IF STATEMENT----------------------------// 
function get_Date() { 
    if (new Date().getHours() <18) { // if the time is less than 6:00pm the message will appear 
        document.getElementById("Hello").innerHTML = "How are you today?";
    } 
    else { 
        document.getElementById("Hello").innerHTML = "Did you have a good day?";

    }
} 

//---------------------PRACTICE IF STATEMENT----------------------// 

function get_Date_2() { //switch the "<" to ">" if time is greater than 6:00pm to check code 
    if (new Date().getHours() >18) { // if the time is greater than 6:00 pm the message will appear
        document.getElementById("Hello_2").innerHTML = "We hope you had a great day!";
    } 
    else { 
        document.getElementById("Hello_2").innerHTML = "We hope you have a great day!";

    }
} 

function if_statement () { 
    if (new Date().getDate() >20) { // if the date is greater than 20 the message will appear when the button is clicked 
        document.getElementById("End_Month").innerHTML = "How was your month?";
    }
} 

function if_statement_2 () { //switch the "<" to ">" if date is greater than 20th to check code 
    if (new Date().getDate() <20) { // if the date is less than the 20th of the month the message will appear when the button is clicked 
        document.getElementById("End_Month_2").innerHTML = "We hope you have a great month";
    } 
    else { 
        document.getElementById("End_Month_2").innerHTML = "We hope your month was good.";
    }
} 

document.write("<br>");  

function else_statement () { 
    Pets = document.getElementById("Pets").value; 
    if (Pets >=3) { //if you have more than 3 pets the first message will appear
        Vet = "You qualify for a 20% discount at our pet clinic if you bring in three or more of your pets for your next visit!"; 
    } 
    else { 
        Vet = "You qualify for 10% off your next visit!"; //if you have less than 3 pets this second message will appear 
    } 
    document.getElementById("Quantity_of_pets").innerHTML = Vet; 
} 

//--------------------EXAMPLE OF ELSE IF STATEMENTS------------------------// 
function Time_Function() { 
    var Time = new Date().getHours(); 
    var Reply; 
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!"; 
    } 
    else if (Time >= 12 == Time < 18) { 
        Reply = "It is afternoon."; 
    } 
    else { 
        Reply = "It is evening time."; 
    } 
    document.getElementById("Time_1").innerHTML = Reply; 
}

//--------------------PRACTICE OF ELSE IF STATEMENTS-----------------------// 
function Practice_Fun() { 
    var Date_1 = new Date().getMonth(); 
    var Reply; 
    if (Date_1 < 3 && Date_1 > 11) { 
        Reply = "It is Winter."; 
    } 
    else if (Date_1 < 6 && Date_1 > 2) { 
        Reply = "It is Spring."; 
    } 
    else if (Date_1 < 8 && Date_1 > 5) { 
        Reply = "It is Summer."; 
    } 
    else { 
        Reply = "It is Fall."; 
    } 
    document.getElementById("Date_11").innerHTML = Reply; 
} 





