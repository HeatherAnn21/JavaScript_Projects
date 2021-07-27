//======================CONCAT METHOD==========================// 


//------------------------EXAMPLE------------------------------// 
function full_Sentence() { //this mwthod changes parts of a sentence into one full string 
    var part_1 = "I have "; 
    var part_2 = "made this "; 
    var part_3 = "into a "; 
    var part_4 = "complete sentence.";  
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //the parts in the "" coinside with the variablez
    document.getElementById("Concatenate").innerHTML = whole_sentence; 
} 

//------------------------PRACTICE----------------------------// 
function practice_sentence() { 
    var p_1 = "This part "; 
    var p_2 = "should be "; 
    var p_3 = "shown as "; 
    var p_4 = "one full sentence.";  
    var whole_sentence = p_1.concat(p_2, p_3, p_4); 
    document.getElementById("Concat").innerHTML = whole_sentence; 
} 





//=====================SLICE METHOD==========================// 

//------------------------EXAMPLE------------------------------// 
function slice_Method() { 
    var Sentence = "Don’t count the days, make the days count."; //this is a full sentence that this function will 'slace' characters out of to display
    var Section = Sentence.slice(31,35); //this will make the word "days" appear, the numbers correlate with each letter in the sentence 
    document.getElementById("Slice").innerHTML = Section; 
} 

//------------------------PRACTICE----------------------------//   
function sentence_slice() { 
    var S_1 = "Whether you think you can or think you can’t, you’re right."; 
    var S_2 = S_1.slice(39,44); //this will make the word "cant" appear 
    document.getElementById("slice_practice").innerHTML = S_2; 
}


//======================toUpperCase===========================// 
function upper_case() { 
    var A = "This sentence is uppercase"; //this method changes the string to uppercase letters 
    var B = A.toUpperCase(); 
    document.getElementById("upper").innerHTML = B; 
} 


//======================search()===========================// 
//this function searches for the place of the first letter of the word I told it to look for 
//the word I told it to search for is "practicing" so the number that shows up is 18 
function search() { 
    var C = "Hello there, just practicing"; 
    document.getElementById("search_1").innerHTML = C.search("practicing");
} 

//=====================NUMBERS METHOD EXAMPLE========================// 
function string_Method() { //this changes the numbers into a string
    var X = 182; 
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); 
} 
//-------------------------PRACTICE-------------------------------// 
function number_string() { 
    var Y = 100; 
    document.getElementById("Numbers_1").innerHTML = Y.toString(); 
} 

//====================PRECISION METHOD==========================//
function precision_Method() { 
    var X =12938.3012987376112; //this method changes the length of the number to 10 digits 
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //change the "10" and the length of the number will change 
}

//-----------------------PRACTICE--------------------------------// 
function pre_11() { 
    var X =98684.2948653896984234; //this number should only show as one digit longer than the example
    document.getElementById("pre_1").innerHTML = X.toPrecision(11); 
} 

//=======================toFixed method============================// 
function to_Fixed() { 
    var X =98684.2948653896984234; //used same numebr for comparison 
    var Y = X.toFixed(2); //this method changes the number to a string and because I asigned the value of '2' it only goes two decimal points 
    document.getElementById("Fix").innerHTML = Y; 
} 

//=======================VALUE OF METHOD============================// 
function val() { //this method displays the value of a string
    var S = "This string should display as a sentence."; 
    document.getElementById("value_of").innerHTML = S.valueOf(); 
}