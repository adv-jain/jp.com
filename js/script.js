var cursor = new MouseFollower();
// Get all elements with the class .insta-trigger
var instaTriggers = document.querySelectorAll(".insta-trigger");

// Loop through each element and add event listeners
instaTriggers.forEach(function (trigger) {
  trigger.addEventListener("mouseover", function (e) {
    var spanElement = e.target.querySelector("span");

    if (spanElement) {
      spanElement.classList.remove("visually-hidden");
      // spanElement.classList.add("your-class-name"); // Replace "your-class-name" with the actual class you want to add
    }
  });

  trigger.addEventListener("mouseleave", function () {
    var spanElement = trigger.querySelector("span");

    if (spanElement) {
      spanElement.classList.add("visually-hidden");
      // spanElement.classList.remove("your-class-name"); // Replace "your-class-name" with the actual class you want to remove
    }
  });
});

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   dots: true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:4
//       }
//   }
// })

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// typing animation

// new TypeIt("#type_write", {
//   lifeLike: false,
//   breakLines: false,
//   loop: true,
//   speed: 0,
// })
//   .type("c")
//   .pause(150)
//   .type("h")
//   .pause(150)
//   .type("a")
//   .pause(150)
//   .type("o")
//   .pause(150)
//   .type("s")
//   .pause(150)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .go();

// new TypeIt("#blog-typeit", {
//   lifeLike: false,
//   breakLines: false,
//   loop: true,
//   speed: 0,
// })
//   .type("B")
//   .pause(150)
//   .type("l")
//   .pause(150)
//   .type("o")
//   .pause(150)
//   .type("g")
//   .pause(150)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .delete(1)
//   .pause(70)
//   .go();

