function First_Function() { 
    var str ="This text should be blue"; //this is the text that the user can see on the webpage 
    var result = str.fontcolor("blue"); // this is the code to change the font color 
    document.getElementById("Blue_Text").innerHTML = result; //this is what HTML will call to 
} 


function Practice() { 
    var sentence = "This is the second function for this HTML<br>"; //this line and the next are the ones the user can see on the webpage 
    sentence += "This function uses concatenate"; 
    document.getElementById("Concatenate").innerHTML = sentence; //this is the call to javascript 
}  

function Red() { 
    var str = "This sentence should be red<br>"; //this line and the next are the ones the user can see on the webpage 
    str += "This sentence should also be red"; 
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result; //this is the call to javascript 
}  


function Alert_Box() { 
    window.alert("This is an alert box").innerHTML = result; 
}  

//-------------------MATH PROBLEM-------------------// 

function addition_Function() { 
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 +2 =" + addition;
} 




//-------------------END MATH PROBLEM--------------// 