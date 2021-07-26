


//Height Requirement for ride
function Ride_Function() { 
    var Height, Can_Ride; 
    Height = document.getElementById("Height").value;                   //this shows a display box you can type a number into 
    Can_Ride = (Height<52) ? "You are too short":"You are tall enough"; // if your number is higher than 52 the 2nd message shows up
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; // if your number is lower than 52 the 1st message shows up 
} 




//>Age Requirement to vote
function Vote_Age() { //HTML looks for the words "Vote_Age" for the button function, it has a value of 18 that shows in the input box 
    var Age, Can_Vote; //these are the variables that are defines in the next two lines 
    Age = document.getElementById("Age").value; //HTML the input id is "age" 
    Can_Vote = (Age<18) ? "You are too young":"You are old enough"; 
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //HTML uses the word "vote" to show the results if that person is old enough to vote or not 
} 


//-------------KEYWORDS--------------------------------- 
function Vehicle(Make, Model, Year, Color) { //this is the example 
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model;  
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
} 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //dodge matches up with the vehicle make, viper is the model, 2020 is the year and red is the color
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black"); 
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 
function Keyword_Function() {
    document.getElementById("Keywords_and Constructors").innerHTML = //this is the code that HTML will look for to display this function
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model + //text in quotes is added to the variables that will appear on the webpages 
    " manufactured in " + Eric.Vehicle_Year; 
} 

document.write("<br>");

//My practice example of keywords and constructors
function Student(Year, Age, GPA, School) {  
    this.Student_Year = Year; 
    this.Student_Age = Age;  
    this.Student_GPA = GPA; 
    this.Student_School = School; 
} 
var Jake = new Student("Sophmore", 20, 3.5, "Harvard"); 
var Emmy = new Student("Freshman", 19, "4.0", "Yale"); 
var Erin = new Student("Senior", 22, 3.0, "MIT"); 
function Student_Info() {
    document.getElementById("New_and_This").innerHTML = 
    "Emmy is a " + Emmy.Student_Year + " at " + Emmy.Student_School + 
    " with a GPA of " + Emmy.Student_GPA; 
} 




//RESERVED WORDS PRACTICE 
function Pet(Breed, Age, Color, Behavior) { 
    this.Pet_Breed = Breed; 
    this.Pet_Age = Age;  
    this.Pet_Color = Color; 
    this.Pet_Behavior = Behavior; 
} 
var Void = new Pet("Black Lab", 2, "Black", "Volatile"); //this is where I put the reserved words "void" and "volatile"
var Button = new Pet("Boston Terrier", 12, "Black and White", "Girl");
var Zues = new Pet("Pit Bull", 5, "Grey", "Boy"); 
function Pet_Info() {
    document.getElementById("Pets").innerHTML = 
    "Void is a " + Void.Pet_Breed + " that is " + Void.Pet_Age + 
    " years old and has " + Void.Pet_Color + " fur, she is " + Void.Pet_Behavior;
} 


//example of a nesting function 
function count_Function() { 
    document.getElementById("Counting").innerHTML = Count(); 
    function Count() { 
        var Starting_point = 9; 
        function Plus_One() {Starting_point +=1;} 
        Plus_One(); 
        return "9 + 1 = " + Starting_point;
    }
} 



//my practice nesting function 
function nested_Function() { 
    document.getElementById("multiply").innerHTML = multiply(); 
    function multiply() { //this is the nested function, multiplying 22*11 
        var Starting_point = 22; 
        function X_Eleven() {Starting_point *=11;} 
        X_Eleven(); 
        return "22 * 11 = " + Starting_point;
    }
}
