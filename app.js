var githubIcon = document.querySelector(".githubIcon");
var gitPreview = document.querySelector(".gitPreview");

githubIcon.addEventListener("mouseover", function () {
  gitPreview.classList.remove("hide");
});

githubIcon.addEventListener("mouseout", function () {
  gitPreview.classList.add("hide");
});
