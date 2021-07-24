function First_Function() { 
    var str ="This text should be blue"; //this is the text that the user can see on the webpage 
    var result = str.fontcolor("blue"); // this is the code to change the font color 
    document.getElementById("Blue_Text").innerHTML = result; //this is what HTML will call to 
} 


function Practice() { 
    var sentence = "This is the second function for this HTML<br>"; //this line and the next are the cones the user can see on the webpage 
    sentence += "This function uses concatenate"; 
    document.getElementById("Concatenate").innerHTML = sentence; //this is the call to javascript 
}  




