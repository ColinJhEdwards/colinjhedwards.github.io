//Selectors
var githubIcon = document.querySelector(".githubIcon");
var gitPreview = document.querySelector(".gitPreview");

//Event Listeners
// githubIcon.addEventListener("mouseover", function () {
//   gitPreview.classList.remove("hide");
//   gitPreview.classList.add("anim");
// });

// githubIcon.addEventListener("mouseout", function () {
//   gitPreview.classList.add("hide");
// });

//Functions

//Animations

let controller;

function animateHome() {
  controller = new ScrollMagic.Controller();
  const revealHome = document.querySelector(".revealHome");
  const slideSetting = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });
  slideSetting.fromTo(revealHome, { x: "0%" }, { x: "-100%" });
}

animateHome();
