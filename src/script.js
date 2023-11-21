let swiper = new Swiper(".mySwiper", {
  spaceBetween: 25,
  centerSlide: "true",
  pagination: {
    el: ".swiper-pagination",
    color: "black",
    bulletActiveClass: "swiper-pagination-bullet-active",
    bulletClass: "swiper-pagination-bullet",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    780: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});

function dropDownMenuMobile() {
  let menuLinks = document.querySelector(".mobile-menu-dropdown-content");

  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }

  // menuLinks.style.display =
  //   menuLinks.style.display === "block" ? "none" : "block";
}

const menuToggle = document.querySelector(".menu-toggle");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

menuToggle.addEventListener("click", () => {
  hamburgerIcon.style.display =
    hamburgerIcon.style.display === "none" ? "block" : "none";
  closeIcon.style.display =
    closeIcon.style.display === "block" ? "none" : "block";
});
