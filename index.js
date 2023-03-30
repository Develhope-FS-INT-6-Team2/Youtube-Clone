var dotsMenuButton = document.getElementById("dots");
var dotsContent = document.getElementById("dots-content");

dotsContent.style.color = "white";

dotsMenuButton.addEventListener("click", function() {


  if (dotsContent.style.display === "none") {
    
    dotsContent.style.display = "block";
  } else {
    dotsContent.style.display = "none";
  }
});



