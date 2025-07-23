var websitesTitle = document.getElementById('websitesTitle');
//var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var height = websitesTitle.offsetHeight;
//console.log(background.offsetHeight*100/h);



/* When clicked, scrolls window to element */
function scrollWindow(element) {
 const scroll = document.getElementById(element);
 scroll.scrollIntoView({behavior: "smooth", block: "center"});
}

