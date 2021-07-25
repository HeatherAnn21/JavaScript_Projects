function Dictionary() { //this function sets KVP's: Key Value Pairs
    var Animal = { 
        Species:"Cat", //The key is Species, the value is Cat
        Color:"Orange", 
        Breed:"American Short Hair",
        Age:1, 
        Sound:"Meow"
    }; 
    document.getElementById("Dictionary").innerHTML = Animal.Color;
} 

function Dictionary2() { //same function as the last one 
    var Animal = { 
        Species:"Cat", 
        Color:"Orange", 
        Breed:"American Short Hair",
        Age:1, 
        Sound:"Meow"
    }; 
    delete Animal.Color; //this section changes it to delete the value 
    document.getElementById("Dictionary2").innerHTML = Animal.Color;
} 

function Dictionary3() { 
    var Car = { 
       Make:"Honda", 
       Model:"Civic", 
       Color:"Black", 
       Year:"2012", 
       Fuel_Type:"Gas"
    }; 
    document.getElementById("Dictionary3").innerHTML = Car.Color;
} 


function Dictionary4() { //same function as the last one 
    var Car = { 
       Make:"Honda", 
       Model:"Civic", 
       Color:"Black", 
       Year:"2012", 
       Fuel_Type:"Gas"
    }; 
    delete Car.Color; //this section changes it to delete the value 
    document.getElementById("Dictionary4").innerHTML = Car.Color;
}