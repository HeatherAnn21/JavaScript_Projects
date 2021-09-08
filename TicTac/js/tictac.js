// This variable keeps track of whose turn it is 
let activePlayer = 'X'; 
//This array stores an array of moves. We use this to determine win conditions. 
let selectedSquares = []; 

//This function is for placing an X or O in a square 
function placeXOrO(squareNumber) { 
    //This condition ensures a square hasn't been selected already 
    //The .some() method is used to check each element of the selected Square array 
    //to see if it contains the square number clicked on 
    if (!selectedSquares.some(element => element.includes(squareNumber))) { 
        let select = document.getElementById(squareNumber); 
        //This condition checks whos turn it is 
        if (activePlayer === 'X') { 
        //If activePlayer is equal to 'X', the x.png is placed in the HTML
        select.style.backgroundImage = 'url("images/x.png")'; 
        //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O' 
        } else { 
            //If activePlayer is equal to 'O', the o.png is place in HTML 
            select.style.backgroundImage = 'url("images/o.png")'; 
        } 
        //squareNumber and activePlayer are concatenated together and added to array 
        selectedSquares.push(squareNumber + activePlayer); 
        //This calls a function to check for any win conditions 
        checkWinConditions(); 
        //This condition is for changing the active player 
        if (activePlayer === 'X') { 
            //If activePlayer is 'X' change it to 'O' 
            activePlayer = 'O'; 
            //if activePlayer is anything other than 'X' 
        } else { 
            //change the activePlayer to 'X' 
            activePlayer = 'X'; 
        } 




        //This function plays placement sound 
        audio('media/place.mp3'); 
        //this condition checks to see if it is the computers turn 
        if(activePlayer === 'O') { 
            //This function disables clicking for computer choice 
            disableClick(); 
            //This function waits 1 second before computer places image and enables click 
            setTimeout(function () { computersTurn(); }, 1000) 
        } 
        //Returning true is needed for the computersTurn() function to work 
        return true;
    } 

    //This function results in a random square being selected 
    function computersTurn() { 
        //this boolean is needed for our while loop 
        let success = false; 
        //This variable stores a random number 0=8 
        let pickASquare; 
        //This condition allows the qhile loop to keep trying if a square is selected already 
        while(!success) { 
            //A random number between 0 and 8 is selected 
            pickASquare = String(Math.floor(Math.random() * 9)); 
            //If the random number is evaluated returns true, the square hasn't been selected yet 
            if (placeXOrO(pickASquare)) { 
                //This line calls the function 
                placeXOrO(pickASquare); 
                //This changed the boolean and ends the loop 
                success = true; 
            }; 
        }
    }
} 







//This function parses the selectedSquares array to search for win conditions 
//drawWinLine function is called to draw a line if the condition is met 
function checkWinConditions() { 
    //X 0, 1, 2, condition 
    if      (arrayIncludes('OX', '1X', '2X')) { DrawWinLine(50, 100, 558, 100) } 
    // X 3, 4, 5 condition 
    else if (arrayIncludes('3X', '4X', '5X')) { DrawWinLine(50, 304, 558, 304) } 
    // X 6, 7, 8 condition 
    else if (arrayIncludes('6X', '7X', '8X')) { DrawWinLine(50, 508, 558, 508) } 
    // X 0, 3, 6 condition 
    else if (arrayIncludes('0X', '3X', '6X')) { DrawWinLine(100, 50, 100, 558) } 
    // X 1, 4, 7 condition 
    else if (arrayIncludes('1X', '4X', '7X')) { DrawWinLine(304, 50, 304, 558) } 
    // X 2, 5, 8 condition 
    else if (arrayIncludes('2X', '5X', '8X')) { DrawWinLine(508, 50, 508, 558) } 
    // X 6, 4, 2 condition 
    else if (arrayIncludes('6X', '4X', '2X')) { DrawWinLine(100, 508, 510, 90) } 
    // X 0, 4, 8 condition 
    else if (arrayIncludes('0X', '4X', '8X')) { DrawWinLine(100, 100, 520, 520) } 
    // O 0, 1, 2 condition 
    else if (arrayIncludes('0O', '1O', '2O')) { DrawWinLine(50, 100, 558, 100) } 
    // O 3, 4, 5 condition 
    else if (arrayIncludes('3O', '4O', '5O')) { DrawWinLine(50, 304, 558, 304) } 
    // O 6, 7, 8 condition 
    else if (arrayIncludes('6O', '7O', '8O')) { DrawWinLine(50, 508, 558, 508) } 
    // O 0, 3, 6 condition 
    else if (arrayIncludes('0O', '3O', '6O')) { DrawWinLine(100, 50, 100, 558) } 
    // O 1, 4, 7 condition 
    else if (arrayIncludes('1O', '4O', '7O')) { DrawWinLine(304, 50, 304, 558) } 
    // O 2, 5, 8 condition 
    else if (arrayIncludes('2O', '5O', '8O')) { DrawWinLine(508, 50, 508, 558) } 
    // O 6, 4, 2 condition 
    else if (arrayIncludes('6O', '4O', '2O')) { DrawWinLine(100, 508, 510, 90) } 
    // O 0, 4, 8 condition 
    else if (arrayIncludes('0O', '4O', '8O')) { DrawWinLine(100, 100, 520, 520) } 
    else if (selectedSquares.length >= 9) { 
        //This function playes the tie game sound 
        audio('media/tie.mp3'); 
        //This function sets a .3 second timer before resetGame us called 
        setTimeout(function () { resetGame(); }, 1000); 
    } 


    //This function checks if an array includes 3 strings 
    //It is used to check for each win condition 
    function arrayIncludes(squareA, squareB, squareC) { 
        //These 3 variables will be used to check for 3 in a row 
        const a = selectedSquares.includes(squareA) 
        const b = selectedSquares.includes(squareB)  
        const c = selectedSquares.includes(squareC) 
        //If the 3 variables we pass are all included in the array, true is 
        //returned and the else is condition executes the drawWinLine function
        if (a === true && b === true && c === true) { return true }
    }
} 


//This function makes the body element temporarily unclickable 
function disableClick() { 
    //This makes the body unclickable 
    body.style.pointerEvents = 'none'; 
    //This makes the body clickable again after 1 second 
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); 
} 

//This function takes a string parameter of the path you set earlier 
//placement sound ('media/place.mp3') 
function audio(audioURL) { 
    //this creates a new audio object and it passed the path as a parameter 
    let audio = new Audio(audioURL); 
    //play method plays the audio sound 
    audio.play(); 
} 


//This function usilizes the HTML canvas to draw win lines 
function DrawWinLine(coordX1, coordY1, coordX2, coordY2) { 
    //this line accesses the HTML canvas element 
    const canvas = document.getElementById('win-lines') 
    //this lines gives acces to methids and properties to use on canvas 
    const c = canvas.getContext('2d'); 
    let x1 = coordX1,  
        //this line indicates where the start of a lines x axis is 
        y1 = coordY1, 
        //this lines indicates where the start of a lines y axis is 
        x2 = coordX2, 
        //this lines indicates where the end of a lines x axis is  
        y2 = coordY2, 
        //this lines indicates where the end of a lines y axis is 
        x = x1, 
        //this variable stores temporary x axis data we update in the animation loop 
        y = y1; //this variable stores temporary y axis data we update in the animation loop


    //This function interacts with the canvas 
    function animateLineDrawing() { 
        //This variable creates a loop 
        const animationLoop = requestAnimationFrame(animateLineDrawing); 
        //this methid clears contect from last loop iteration 
        c.clearRect(0, 0, 608, 608) 
        //This method starts a new path 
        c.beginPath(); 
        //This method moves to a new starting point for the line 
        c.moveTo(x1, y1) 
        //This method indicates the endpoint in the line 
        c.lineTo(x, y) 
        //This method sets the width of the line 
        c.lineWidth = 10; 
        // This method sets the color of the line 
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; 
        //This method draws everything laid out above 
        c.stroke(); 
        //This condition checks if it has reached the endpoint 
        if (x1 <= x2 &&y1 <= y2) { 
            //this condition adds 10 to the previous end x point 
            if (x <x2) { x += 10;} 
            //This condition adds 10 to the previous end y point 
            if (y < y2) { y += 10;} 
            //This condition cancels the animation loop 
            //if it has reached the endpoints 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } 
        } 
        //This condition is similar to the one above 
        //This is necessary for the 6, 4, 2, win condition 
        if (x1 <= x2 && y1 >= y2) { 
            if (x < x2) {x += 10; } 
            if (y > y2) {y -= 10; } 
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        } 
    } 


//This function clears the canvas after the win line is draws 
function clear() { 
    //This line starts the animation loop 
    const animationLoop = requestAnimationFrame(clear); 
    //This line clears the canvas 
    c.clearRect(0, 0, 608, 608); 
    //This line stops the animation loop 
    cancelAnimationFrame(animationLoop); 
} 
//This line disallows clicking while the win sound is playing 
disableClick(); 
//This line plays the win sound 
audio('media/winGame.mp3'); 
//This line calls the main animation loop 
animateLineDrawing(); 
//This line waits 1 second then clears the canvas, resets the name and allos clicking 
setTimeout(function () { clear(); resetGame(); }, 1000); 
} 

//This function resets the game in the event of a tie or a win 
function resetGame() { 
    //This for loop iterates through each HTML square element 
    for (let i = 0; i < 9; i++) { 
        //this variable gets the html element of i 
        let square = document.getElementById(String(i)) 
        //This removes the elements backgroundImages 
        square.style.backgroundImage = '' 
    } 
//This resets the array so it is empty and the game can start over  
selectedSquares = []; 
}
