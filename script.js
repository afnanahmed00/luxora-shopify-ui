/*  NAVBAR ACTIVE STATE */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });

    item.classList.add("active");

  });

});

/*  HERO SLIDER*/

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dots span");

let currentSlide = 0;

function updateSlider(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

}

if (slides.length > 0) {

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateSlider(currentSlide);

  }, 4000);

}

/* WISHLIST */

const wishlistButtons =
  document.querySelectorAll(".wishlist");

wishlistButtons.forEach((button) => {

  button.addEventListener("click", (e) => {

    e.preventDefault();
    e.stopPropagation();

    const icon = button.querySelector("i");

    icon.classList.toggle("ri-heart-line");
    icon.classList.toggle("ri-heart-fill");

  });

});

/*  SEARCH PRODUCTS */

const searchInput =
  document.querySelector(".search-left input");

const productCards =
  document.querySelectorAll(".product-card");

if (searchInput) {

  searchInput.addEventListener("keyup", () => {

    const searchValue =
      searchInput.value.toLowerCase();

    productCards.forEach((card) => {

      const text =
        card.innerText.toLowerCase();

      if (text.includes(searchValue)) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}

/* PRODUCT BUTTONS */

const shopButtons =
  document.querySelectorAll(".product-info button");

shopButtons.forEach((button) => {

  button.addEventListener("click", (e) => {

    e.preventDefault();

    button.innerText = "Added to Cart";
    button.style.background = "#222";

  });

});

/* PRODUCT IMAGE GALLERY */

const mainImage =
  document.getElementById("mainImage");

const galleryThumbs =
  document.querySelectorAll(".gallery-thumb");

galleryThumbs.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    galleryThumbs.forEach((item) => {
      item.classList.remove("active-thumb");
    });

    thumb.classList.add("active-thumb");

    if (mainImage) {
      mainImage.src = thumb.src;
    }

  });

});

/* SIZE VARIANTS */

const sizeButtons =
  document.querySelectorAll(".variant");

sizeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const parent =
      button.parentElement;

    parent.querySelectorAll(".variant")
      .forEach((item) => {
        item.classList.remove("active");
      });

    button.classList.add("active");

  });

});

/* COLOR VARIANTS */

const colorButtons =
  document.querySelectorAll(".color");

colorButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const parent =
      button.parentElement;

    parent.querySelectorAll(".color")
      .forEach((item) => {
        item.classList.remove("active-color");
      });

    button.classList.add("active-color");

  });

});

/* MAIN CART BUTTON*/

const mainCartButton =
  document.querySelector(".main-cart-btn");

if (mainCartButton) {

  mainCartButton.addEventListener("click", () => {

    mainCartButton.innerText =
      "Added to Cart";

    mainCartButton.style.background =
      "#222";

  });

}