var pathname = window.location.pathname;
var isVisible = new Array();

//These actions only happen if page is index.html (and not art.html)
if (!pathname.includes("art.html")) {
  window.addEventListener("scroll", hide);
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
window.addEventListener("scroll", fadein);
window.onload = fadein();

//Hides two things on the index.html page when scrolled
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

window.addEventListener("scroll", goHomeArrowShow);
//shows the go home arrow upon scroll
function goHomeArrowShow() {
  var goHomeArrow = document.getElementById("goHomeArrow");
  var windowHeight = window.innerHeight;
  var bio = document.getElementById("bio");
  var bioTop = bio.getBoundingClientRect().top;

  if (bioTop < windowHeight - 300) {
    goHomeArrow.classList.add("active");
  } else {
    goHomeArrow.classList.remove("active");
  }
}

//These functions open and close overlays
function openOverlay(overlay) {
  document.getElementById(overlay).classList.add("show");
}
function openOverlay(overlay, image) {
  document.getElementById(overlay).classList.add("show");
  if (overlay == "artOverlay") {
    document.getElementById("artOverlayContent").innerHTML = '<img src="' + image + '" class="overlayImage">';
  }
}
function closeOverlay(overlay) {
  document.getElementById(overlay).classList.remove("show");
}
var menuOverlay = document.getElementById('menuOverlay');
var creditsOverlay = document.getElementById('creditsOverlay');
window.onclick = function(event) {
  if (event.target == menuOverlay) {
    closeOverlay('menuOverlay');
  }
  if (event.target == creditsOverlay) {
    closeOverlay('creditsOverlay');
  }
}

// When a link in the menu is clicked, scrolls to the element and closes the menu
function linkClick(element) {
  scrollWindow(element);
  closeOverlay('menuOverlay');
}

function goTo(element) {
  window.location.href = element;
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
    if (!pathname.includes("art.html")) {
      for (var shootingStar of shootingStars) {
        shootingStar.classList.add("inactive");
      }
      for (var highlight of highlights) {
        highlight.classList.add("inactive");
      }
      downArrow.classList.add("paused");
      //document.getElementById('toggleOnOff').innerHTML = 'on';
    }
    for (var reveal of reveals) {
      reveal.classList.add("visible");
    }
    for (let i = 0; i < reveals.length; i++) {
      isVisible[i] = true;
    }
    document.getElementById('pauseButton').innerHTML = '<i class="bi bi-play-circle"></i>';
    clickedPaused = true;
  } else {
    for (var star of stars) {
      star.classList.remove("inactive");
    }
    if (!pathname.includes("art.html")) {
      for (var shootingStar of shootingStars) {
        shootingStar.classList.remove("inactive");
      }
      for (var highlight of highlights) {
        highlight.classList.remove("inactive");
      }
      downArrow.classList.remove("paused");
      //document.getElementById('toggleOnOff').innerHTML = 'off';
    }
    for (var reveal of reveals) {
      reveal.classList.remove("visible");
    }
    for (let i = 0; i < reveals.length; i++) {
      isVisible[i] = false;
    }
    fadein();
    document.getElementById('pauseButton').innerHTML = '<i class="bi bi-pause-circle"></i>';
    clickedPaused = false;
  }
  
}

//This is for creating the stars background
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

