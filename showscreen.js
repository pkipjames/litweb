function showScreen(id){
var screens=document.querySelectorAll(".screen");
screens.forEach(function (screen){
screen.style.display="none";
});
var screenToShow=document.getElementById(id);
screenToShow.style.display="block";
}
