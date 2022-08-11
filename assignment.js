
window.addEventListener("load", function(){
const homePage = document.getElementById("home-page");

homePage.addEventListener("click", function(event){
    event.target.location("nav-bar")
});

const workoutPage = document.getElementById("workout-page");

homePage.addEventListener("click", function(event){
    event.target.location("workouts-section")
});

});