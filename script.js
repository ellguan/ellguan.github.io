var pathname = window.location.pathname;
var isVisible = new Array();

if (pathname.includes("index.html")) {
  window.addEventListener("scroll", fadein);
  window.onload = fadein();
  window.addEventListener("scroll", hide);
} else if (pathname.includes("art.html")){

}

/* When clicked, scrolls window to element */
function scrollWindow(element) {
 const scroll = document.getElementById(element);
 scroll.scrollIntoView({behavior: "smooth"});
}


/*fades in elements upon scroll (only once)*/
function fadein() {
  var reveals = document.querySelectorAll(".fade");
  var windowHeight = window.innerHeight;

  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementBottom = reveals[i].getBoundingClientRect().bottom;
    var elementVisible = 80;
    if ((elementTop < windowHeight - elementVisible) && isVisible[i] !== true) {
      reveals[i].classList.add("active");
    }
    else if (windowHeight > elementBottom + screen.height ) {
      isVisible[i] = true;
      reveals[i].classList.remove("active");
      reveals[i].classList.add("visible");
    }
  }
}


function hide(){
    var windowHeight = window.innerHeight;

    // hides that one pesky heading
    var webTitle = document.getElementById("websitesTitle");
    var card3 = document.getElementById("card3");
    var cardBottom = card3.getBoundingClientRect().bottom;
    var elementVisible = 150; // how far from the bottom of the screen the element should be visible
    if (cardBottom < windowHeight - elementVisible) {
        webTitle.style.visibility = "hidden";
    }
    else {
        webTitle.style.visibility = "visible";
    }

    //stops the animation of the down arrow on scroll 
    var downArrow = document.getElementById("downArrowContent");
    var downArrowBottom = downArrow.getBoundingClientRect().bottom;
    if (downArrowBottom < windowHeight - screen.height) {
        downArrow.classList.add("paused");
    }
    
}

//These functions open and close the menu overlay & credits overlay
var menuOverlay = document.getElementById("menuOverlay");
function openMenu() {
  menuOverlay.classList.add("show");
}
function closeMenu() {
  menuOverlay.classList.remove("show");
}
var creditsOverlay = document.getElementById("creditsOverlay");
function openCredits() {
  creditsOverlay.classList.add("show");
}
function closeCredits() {
  creditsOverlay.classList.remove("show");
}
window.onclick = function(event) {
  if (event.target == menuOverlay) {
    closeMenu();
  }
  if (event.target == creditsOverlay) {
    closeCredits();
  }
}

// When a link in the menu is clicked, scrolls to the element and closes the menu
function linkClick(element) {
  scrollWindow(element);
  closeMenu();
}

var clickedPaused = false;
//Pauses all animations (including fading in)
function pauseAnimations(){

  const stars = document.getElementsByClassName("star");
  const shootingStars = document.getElementsByClassName("shootingStar");
  const reveals = document.querySelectorAll(".fade");
  const highlights = document.getElementsByClassName("highlight")
  const downArrow = document.getElementById("downArrowContent");

  if (clickedPaused == false) {
    for (var star of stars) {
    star.classList.add("inactive");
    }
    for (var shootingStar of shootingStars) {
      shootingStar.classList.add("inactive");
    }
    for (var highlight of highlights) {
      highlight.classList.add("inactive");
    }
    for (var reveal of reveals) {
      reveal.classList.add("visible");
    }
    for (let i = 0; i < reveals.length; i++) {
      isVisible[i] = true;
    }
    downArrow.classList.add("paused");
    document.getElementById('pauseButton').innerHTML = '<i class="bi bi-play-circle"></i>';
    document.getElementById('toggleOnOff').innerHTML = 'on';

    clickedPaused = true;
  } else {
    for (var star of stars) {
      star.classList.remove("inactive");
    }
    for (var shootingStar of shootingStars) {
      shootingStar.classList.remove("inactive");
    }
    for (var highlight of highlights) {
      highlight.classList.remove("inactive");
    }
    for (var reveal of reveals) {
      reveal.classList.remove("visible");
    }
    for (let i = 0; i < reveals.length; i++) {
      isVisible[i] = false;
    }
    fadein();
    downArrow.classList.remove("paused");
    document.getElementById('pauseButton').innerHTML = '<i class="bi bi-pause-circle"></i>';
    document.getElementById('toggleOnOff').innerHTML = 'off';
    clickedPaused = false;
  }
  
}

var artOverlay = document.getElementById("artOverlay");
function openOverlay(image) {
  artOverlay.classList.add("show");
  document.getElementById("artOverlayContent").innerHTML = '<img src="' + image + '" class="overlayImage">';
}
function closeOverlay() {
  artOverlay.classList.remove("show");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStars(numStars) {
  let result = "";
  for(let i = 0; i < numStars; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh #7785ac,`;
  }
  console.log(result.substring(0, result.length - 1));
}

for (let i = 0; i < 10; i++) {
  //generateStars(10);
}

