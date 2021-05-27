"use strict";
//======================           BURGER           ==========================================
$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
  });
});
//======================          TABS            ==========================================
// function openTab(tabName) {
//   const tab = document.getElementById(tabName);
//   const tabs = document.getElementsByClassName(`tabs__block`);
//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].classList.remove(`active`);
//   }
//   tab.classList.add(`active`);
// }
// //======================           ACORDION          =======================================
// let acc = document.getElementsByClassName("accordion");
// let i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// //======================      SMOOTH SCROLL ARROW       ==========================================

// $("a.scroll-to").on("click", function (e) {
//   e.preventDefault();
//   let anchor = $(this).attr("href");
//   $("html, body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(anchor).offset().top,
//       },
//       800
//     );
// });
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
