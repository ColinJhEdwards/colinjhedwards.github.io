//Selectors
var githubIcon = document.querySelector(".githubIcon");
var gitPreview = document.querySelector(".gitPreview");
let controller;

//Event Listeners
// githubIcon.addEventListener("mouseover", function () {
//   gitPreview.classList.remove("hide");
//   gitPreview.classList.add("anim");
// });

// githubIcon.addEventListener("mouseout", function () {
//   gitPreview.classList.add("hide");
// });

//Functions

function animateHome() {
  controller = new ScrollMagic.Controller();
  const revealHome = document.querySelector(".revealHome");
  const meImg = document.querySelector(".about-me-image");
  const aboutText = document.querySelector(".about-me-text");

  const slideSetting = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });
  slideSetting.fromTo(revealHome, { x: "0%" }, { x: "-100%" });
  slideSetting.fromTo(meImg, { x: "110%" }, { x: "0%" }, "-=0.9");
  slideSetting.fromTo(aboutText, { y: "80%" }, { y: "0%" }, "-=0.9");
}

animateHome();
