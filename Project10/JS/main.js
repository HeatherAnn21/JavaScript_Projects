

//---------------------------------------------------LOOP------------------------------------------// 
function call_loop() {
    var Digit = ""; 
    var X = 1; 
    while (X < 21) { //the numbers listed will only go up to 20, x is less than 20 
        Digit += "<br>" + X; //this displays the number and a line break  
        X++; 
    } 
    document.getElementById("loop").innerHTML = Digit; 
} 


document.write("<br>"); 

//____________________________________________________Word loop____________________________________________________________// 

var Instruments =["Guitar", "Drums", "Piano", "Violin", "Viola", "Flute"]; //these are the strings that will show in the browser 
var Content =""; 
var Y; 
function for_Loop() { 
    for (Y = 0; Y < Instruments.length; Y++) { 
        Content += Instruments[Y] + "<br>"; 
    } 
    document.getElementById("List_of_Instruments").innerHTML = Content; 
} 

document.write("<br>"); 
//___________________________________________________Pet loop_____________________________________________________________// 

var Pets =["Dog", "Cat", "Bird", "Rabbit", "Snake"]; //these are the strings that will show in the browser 
var Content_2 =""; 
var X; 
function pets() { 
    for (X = 0; X < Pets.length; X++) { //if the number zero is less than the number in the 'Pets' array then the loop will execute 
        Content_2 += Pets[X] + "<br>"; //this displays the type of pet and a line break before the next item in the list 
    } 
    document.getElementById("List_of_Pets").innerHTML = Content_2; 
} 

document.write("<br>"); 

//________________________________________________Array Practice_________________________________________________________// 

function Cat_Array() { 
    var cat_pic = [];  
    cat_pic[0] = "sleeping"; 
    cat_pic[1] = "playing"; 
    cat_pic[2] = "eating"; 
    cat_pic[3] = "puring"; 
    document.getElementById("Cat Array").innerHTML = "The cat is " + cat_pic[2] + "."; 
    //the '2' in the last bracket calls for html to show the variable "cat_pic[2]" 
} 

//_______________________________________________Array Example__________________________________________________________// 

function weather() { 
    var weather = [];  
    weather[0] = "freezing"; 
    weather[1] = "warm"; 
    weather[2] = "cold"; 
    weather[3] = "hot"; 
    document.getElementById("The_Weather").innerHTML = "Today the weather is " + weather[3] + "."; 
    //the '3' in the last bracket calls for html to show the variable "cat_pic[2]" 
} 

//______________________________________________Const_____________________________________________// 

function const_function() { 
    const m_s = {type:"symbol", brand:"zildjian", color:"blue", condition: "new"}; 
    m_s.color = "brass"; 
    m_s.price = "$149.99"; 
    document.getElementById("const").innerHTML = "The cost of the " + m_s. condition + " " + m_s.type + " was " + m_s.price + " and the color was " + m_s.color;
} 



//______________________________________________Var/Let block scope  _____________________________________________// 

//variables outside of a function: an be used elsewhere in the code =global 
//variables inside of a function can only be used with in that function =not global 
//variables using 'var' in curly brackets CAN be used outside of that set of code =global 
//variables using 'let' in curly brackets can NOT be used outside of that set of code = not global 
document.write("<br>" + "Block Scope" + "<br>"); 
var H = 20; 
document.write(H); 
{ 
    let H = 50; 
    document.write("<br>" + H); 
} 
document.write("<br>" + H); 

//this shows: 
//20 
//50 
//20 
//this is because the last 'document.write' is not inside that block(set) of code 
//therefore it only see's 'H' as the number 20 

document.write("<br>"); 

//the next example/practice: 

var G = 11; 
document.write(G); 
{ 
    var G = 22; 
    document.write("<br>" + G); 
} 
document.write("<br>" + G); 

//this will show as: 
//11 
//22 
//22 
//because 'var' can be read outside of the curly brackets 


//___________________________________________________Objects___________________________________________________________// 


 let mypet = { //for this code to work I had to move the <script> tag in the html file to the bottom of the body tag
    breed: "lab ", //doing so makes this statement and the block scope section show at the bottom of the webpage because the html 
    age: "5 ", //<p> tags that reference the rest of the code in this file are now above the script tag 
    color: "black ", 
    gender: "female ", 
    name: "Gypsy ", 
    description : function() { 
        return "This dog is a " + this.age + "year old " + this.gender + this.breed + "with " + this.color + "fur, named " + this.name; 
    } 
}; 
document.getElementById("pet").innerHTML = mypet.description(); 



//____________________________________________________Break Statement___________________________________________________// 


document.write("<br>");  

function break_statement() { 
    let text = "";
        for (let r = 20; r < 41; r++) {
            if (r === 30) { break; }
            text += "The number is " + r + "<br>";
    } 
    document.getElementById("break").innerHTML = text; 
} 
document.write("<br>"); 

//____________________________________________________Continue Statement___________________________________________________// 


document.write("<br>"); 

function continue_1() { 
    let text = "";
        for (let r = 20; r < 41; r++) {
            if (r === 30) { continue; }
            text += "The number is " + r + "<br>";
    } 
    document.getElementById("continue").innerHTML = text; 
} 
document.write("<br>"); 