// Mobile Menu

// slide menu bar

const mobileContent = document.querySelector("#mobile-content");
const openIconBtn = document.querySelector("#open-icon-btn");
const closeIconBtn = document.querySelector("#close-icon-btn");

openIconBtn.addEventListener("click", () => {
  mobileContent.style.top = "0px";
});

closeIconBtn.addEventListener("click", () => {
  mobileContent.style.top = "-100%";
});

const amazing = document.querySelectorAll('.amazing')
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
// const showMmobildMenuBox = document.querySelector('.show-mobild-menu-box')
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee,index) => {
  ee.addEventListener("click", () => {
    amazingItem[index].classList.toggle("hidden");
    amazingItem[index].classList.toggle("opacity-0");
    ee.classList.toggle('bg-slate-100')
    icons[index].classList.toggle("rotate-180");
  });
})

// const menuIcon = () => {
//   showMmobildMenuBox.classList.toggle("hidden");
// }

// waypoints
const navControl = document.querySelector(".nav-control");
var waypoint = new Waypoint({
  element: document.getElementById("nav"),
  handler: function (direction) {
    if (direction === "down") {
      navControl.classList.add(
        "fixed",
        "w-full",
        "animate__fadeInDown",
        "shadow"
      );
    } else {
      navControl.classList.remove(
        "fixed",
        "w-full",
        "animate__fadeInDown",
        "shadow"
      );
    }
  },
  offset: "75%",
});

// // mobile-slide-close

// let mobileSlideClosed = document.querySelectorAll(".mobile-slide-closed");

// for (i = 0; i < mobileSlideClosed.length; i++) {
//   console.log(mobileSlideClosed[i]);
//   mobileSlideClosed[i].addEventListener("click", () => {
//     mobileSlide.style.left = "-100%";
//   });
// }


// Dark Mode

const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.classList.add(
    "translate-x-full",
    "rotate-[360deg]",
    "bg-slate-900"
  );
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`;
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove("bg-slate-800");
  darkSwitch.classList.add("bg-slate-100");
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkSwitchIcon.classList.remove("translate-x-full", "bg-slate-900");
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove("bg-slate-100");
  darkSwitch.classList.add("bg-slate-800");
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkText.classList.remove("-translate-x-7");
  darkText.innerText = "FF";
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();
  // or
  // if (isDarkMode) {
  //     toDark()
  // } else {
  //     toLight()
  // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem("data-theme");

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }

// Active

const iosIcon = document.querySelector("#ios-icon");
const androidIcon = document.querySelector("#android-icon");
const customIcon = document.querySelector("#custom-icon");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

iosIcon.style.background = "#0f172a";
card1.style.display = "inherit";

iosIcon.addEventListener("click", () => {
  card2.style.display = "none";
  card3.style.display = "none";
  card1.style.display = "inherit";
  iosIcon.style.background = "#0f172a";
  androidIcon.style.background = "#cbd5e1";
  customIcon.style.background = "#cbd5e1";
});

androidIcon.addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "inherit";
  card3.style.display = "none";
  iosIcon.style.background = "#cbd5e1";
  androidIcon.style.background = "#0f172a";
  customIcon.style.background = "#cbd5e1";
});

customIcon.addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "inherit";
  iosIcon.style.background = "#cbd5e1";
  androidIcon.style.background = "#cbd5e1";
  customIcon.style.background = "#0f172a";
});
// react,angular,vue and js control code
const reactIcon = document.querySelector("#react-icon");
const angularIcon = document.querySelector("#angular-icon");
const vueIcon = document.querySelector("#vue-icon");
const jsIcon = document.querySelector("#js-icon");

const reactCode = document.querySelector("#react-code");
const angularCode = document.querySelector("#angular-code");
const vueCode = document.querySelector("#vue-code");
const jsCode = document.querySelector("#js-code");

angularCode.style.display = "none";
vueCode.style.display = "none";
jsCode.style.display = "none";

reactIcon.style.background = "#475569";

reactIcon.addEventListener("click", () => {
  reactIcon.style.background = "#475569";
  angularIcon.style.background = "#0f172a";
  vueIcon.style.background = "#0f172a";
  jsIcon.style.background = "#0f172a";

  reactCode.style.display = "inherit";
  angularCode.style.display = "none";
  vueCode.style.display = "none";
  jsCode.style.display = "none";
});

angularIcon.addEventListener("click", () => {
  angularIcon.style.background = "#475569";
  reactIcon.style.background = "#0f172a";
  vueIcon.style.background = "#0f172a";
  jsIcon.style.background = "#0f172a";

  reactCode.style.display = "none";
  angularCode.style.display = "inherit";
  vueCode.style.display = "none";
  jsCode.style.display = "none";
});

vueIcon.addEventListener("click", () => {
  vueIcon.style.background = "#475569";
  angularIcon.style.background = "#0f172a";
  reactIcon.style.background = "#0f172a";
  jsIcon.style.background = "#0f172a";

  reactCode.style.display = "none";
  angularCode.style.display = "none";
  vueCode.style.display = "inherit";
  jsCode.style.display = "none";
});

jsIcon.addEventListener("click", () => {
  jsIcon.style.background = "#475569";
  angularIcon.style.background = "#0f172a";
  reactIcon.style.background = "#0f172a";
  vueIcon.style.background = "#0f172a";

  reactCode.style.display = "none";
  angularCode.style.display = "none";
  vueCode.style.display = "none";
  jsCode.style.display = "inherit";
});

// demo code
const codeIcon = document.querySelector("#code-icon");
const demoIcon = document.querySelector("#demo-icon");

const code = document.querySelector("#code");
const demo = document.querySelector("#demo");

codeIcon.style.background = "#64748b";

demo.style.display = "none";

codeIcon.addEventListener("click", () => {
  code.style.display = "inherit";
  demo.style.display = "none";

  codeIcon.style.background = "#64748b";
  demoIcon.style.background = "#1e293b";
});

demoIcon.addEventListener("click", () => {
  code.style.display = "none";
  demo.style.display = "inherit";

  codeIcon.style.background = "#1e293b";
  demoIcon.style.background = "#64748b";
});

// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,


  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // autoplay: {
  //   delay: 3000,
  // }
});

// Scroll reval

ScrollReveal().reveal('.headline',{ 
  delay: 250,
  origin: 'left',
  distance: '30px',
  interval: 200,
  scale: 0.85 ,
  reset: true 
});
