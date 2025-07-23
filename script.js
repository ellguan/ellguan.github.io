/* When clicked, scrolls window to element */
function scrollWindow(element) {
 const scroll = document.getElementById(element);
 scroll.scrollIntoView({behavior: "smooth", block: "center"});
}