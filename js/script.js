"use strict";
//======================           BURGER           ==========================================
$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
  });
});
//======================           LAZY LOADING           ==========================================
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
//======================          SMOOTH SCROLL            ==========================================
const menuLinks = document.querySelectorAll(".menu__item[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//======================             SWIPER SLIDER         ==========================================
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
//======================           SCROLL ANIMATION            ==========================================
const animItems = document.querySelectorAll(".anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active", "no-anim");
      } else {
        if (!animItem.classList.contains("no-anim")) {
          animItem.classList.remove("_active");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
