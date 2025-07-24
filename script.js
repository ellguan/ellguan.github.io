/* When clicked, scrolls window to element */
function scrollWindow(element) {
 const scroll = document.getElementById(element);
 scroll.scrollIntoView({behavior: "smooth", block: "center"});
}

var isVisible = new Array();

/*fades in elements upon scroll (only once)*/
function fadein() {
  var reveals = document.querySelectorAll(".fade");
  var windowHeight = window.innerHeight;

  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementBottom = reveals[i].getBoundingClientRect().bottom;
    var elementVisible = 10;
    if (windowHeight > elementBottom ) {
        isVisible[i] = true;
    } else if ((elementTop < windowHeight - elementVisible) && isVisible[i] !== true) {
        reveals[i].classList.add("active");
    }
    else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadein);

// hides that one pesky heading 
function hide(){
    var windowHeight = window.innerHeight;
    var webTitle = document.getElementById("websitesTitle");
    var card3 = document.getElementById("card3");
    var cardBottom = card3.getBoundingClientRect().bottom;
    var elementVisible = 150; // how far from the bottom of the screen the element should be visible
    if (cardBottom < windowHeight - elementVisible) {
        webTitle.style.display = "none";
    }
    else {
        webTitle.style.display = "block";
    }
}

window.addEventListener("scroll", hide);
