

let car = { 
    m: "d", 
    mo: "v", 
    y: "2020", 
    c: "r", 
    description : function () { 
        return "This car is a " + this.m + this.mo; 
    }
}; 
document.getElementById("Car_Object").innerHTML = car.description();
