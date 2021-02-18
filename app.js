//Selectors
var githubIcon = document.querySelector(".githubIcon");
var gitPreview = document.querySelector(".gitPreview");

//Event Listeners
githubIcon.addEventListener("mouseover", function () {
  gitPreview.classList.remove("hide");
  gitPreview.classList.add("anim");
});

githubIcon.addEventListener("mouseout", function () {
  gitPreview.classList.add("hide");
});

//Functions
