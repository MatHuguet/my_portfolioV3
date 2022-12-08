//---HAMBURGER TOGGLE MENU
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-item");
const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line");

hamburger.addEventListener("click", () => {
  topLine.classList.toggle("top-line-anim");
  bottomLine.classList.toggle("bottom-line-anim");
});

//---STICKY-NAV

const navBar = document.getElementById("navigationMenu");
const picture = document.querySelector(".work-room");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "66px",
};
// const topNav = window.addEventListener("scroll", (e) => {});
// console.log(window.scrollY);
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry.isIntersecting);
    // entry.target.classList.toggle("fixedNav");
    if (!entry.isIntersecting) {
      navBar.classList.toggle("navTopAnimation");
    } else {
      navBar.classList.remove("navTopAnimation");
    }
  });
}, options);

observer.observe(picture);
