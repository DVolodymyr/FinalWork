"use strict";
//======================           BURGER           ==========================================
$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
  });
});
//======================           LAZU LOADING           ==========================================
const lazyImages = document.querySelectorAll(
  "img[data-src],source[data-srcset]"
);
const loadMapBlock = document.querySelector("_load-map");
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPosition = [];
if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheck();
    }
  });
}
window.addEventListener("scroll", lazyScroll);
function lazyScroll() {
  if (
    document.querySelectorAll("img[data-src],source[data-srcset]").length > 0
  ) {
    lazyScrollCheck();
  }
}
function lazyScrollCheck() {
  let imgIndex = lazyImagesPosition.findIndex(
    (item) => pageYOffset > item - windowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute("data-srcset");
    }
    delete lazyImagesPosition[imgIndex];
  }
}
//======================      SMOOTH SCROLL ARROW       ==========================================

$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  let anchor = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor).offset().top,
      },
      1200
    );
});
// //======================          SMOOTH SCROLL            ==========================================
// const menuLinks = document.querySelectorAll(".menu__item[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top +
//         pageYOffset -
//         document.querySelector("header").offsetHeight;
//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth",
//       });
//       e.preventDefault();
//     }
//   }
// }
// //======================           SLIDER SHOP      ==========================================
// let offset = 0;
// const shopCarts = document.querySelector(".shopCarts");
// document
//   .querySelector(".icon-Arrow-rightB")
//   .addEventListener("click", function () {
//     offset += 1284;
//     if (offset > 2568) {
//       offset = 0;
//     }
//     shopCarts.style.left = -offset + "px";
//   });
// document
//   .querySelector(".icon-Arrow-left")
//   .addEventListener("click", function () {
//     offset -= 1284;
//     if (offset < 0) {
//       offset = 2568;
//     }
//     shopCarts.style.left = -offset + "px";
//   });

// //======================           SLIDER COMENT           ==========================================
// let offsett = 0;
// const commentSlide = document.querySelector(".container__content-slider");
// document.querySelector(".coment-arrowR").addEventListener("click", function () {
//   offset += 745;
//   if (offset > 2235) {
//     offset = 0;
//   }
//   commentSlide.style.top = -offset + "px";
// });
// document.querySelector(".coment-arrowL").addEventListener("click", function () {
//   offset -= 745;
//   if (offset < 0) {
//     offset = 2235;
//   }
//   commentSlide.style.top = -offset + "px";
// });
//======================             slick slider         ==========================================
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
