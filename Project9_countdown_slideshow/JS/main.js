
//==========================================CREATING A JAVASCRIPT PROGRAM===================================================================// 
//------------------------------------------JAVASCRIPT LINK IN HTML IS AT THE END OF THE BODY TAG-------------------------------------------// 




//------------------------------------------COUNTDOWN---------------------------------------------------------------------------------------// 
function countdown() { //this function has a nested function and an 'if' statement 
    var seconds = document.getElementById("seconds").value; 

    function tick() {
        seconds = seconds - 1; 
        timer.innerHTML = seconds; 
        setTimeout(tick, 1000); //this programs the code to countdown by 1000 milliseconds, which is 1 second 
    if(seconds == -1) {
        alert("Time's up!"); //alert to show up once countdown is over 
    }
        } 
    tick(); 
} 
//--------------------------------------------------- END COUNTDOWN------------------------------------------------------------------------------// 


//------------------------------------------------SLIDESHOW CONTROLS-------------------------------------------------------------------------// 
var slideIndex = 1; //starts slideshow at first picture 
showSlides(slideIndex);

//---------------------------------------------------PREVIOUS AND NEXT FUNCTIONS-----------------------------------------------------------------//
function plusSlides(n) { //this function clicks to the next picture in the slideshow if you click the next button 
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides"); //this calls for HTML to display the slide images 
  var dots = document.getElementsByClassName("dot"); //this calls for HTML to display the dots under the photos 

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length} 

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  } 

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}
//------------------------------------------------END SLIDESHOW CONTROLS--------------------------------------------------------------------------// 


