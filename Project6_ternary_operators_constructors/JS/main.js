


//Height Requirement for ride
function Ride_Function() { 
    var Height, Can_Ride; 
    Height = document.getElementById("Height").value; 
    Can_Ride = (Height<52) ? "You are too short":"You are tall enough"; 
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
} 




//>Age Requirement to vote
function Vote_Age() { 
    var Age, Can_Vote; 
    Age = document.getElementById("Age").value; 
    Can_Vote = (Age<18) ? "You are too young":"You are old enough"; 
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
} 


//-------------KEYWORDS--------------------------------- 
function Vehicle(Make, Model, Year, Color) { //this is the example 
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model;  
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
} 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black"); 
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 
function Keyword() {
    document.getElementById("Keywords_and Constructors").innerHTML = 
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model + 
    " manufactured in " + Eric.Vehicle_Year; 
}

function Student(Year, Age, GPA, School) { //My practice example of keywords and constructors 
    this.Student_Year = Year; 
    this.Student_Age = Age;  
    this.Student_GPA = GPA; 
    this.Student_School = School; 
} 
var Jack = new Student("Sophmore", 20, 3.5, "Harvard"); 
var Emily = new Student("Freshman", 19, "4.0", "Yale"); 
var Eric = new Student("Senior", 22, 3.0, "MIT"); 
function Student_Info() {
    document.getElementById("New_and_This").innerHTML = 
    "Emily is a " + Emily.Student_Year + " at " + Emily.Student_School + 
    " with a GPA of " + Emily.Student_GPA; 
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


