// let cImg = document.querySelector("#c-mi-img");

// function cMoveImg() {
//   let curImg = cImg.scrollTop
//   console.log(curImg)
//   cImg.style.top = curImg + 100 + "px";
// }

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 776) {
//     cMoveImg()
//   } else if (window.scrollY < 776) {
//     cMoveImg()
//   }
// });

// let cImg = document.querySelector("#c-mi-img");

// function cMoveImg() {
//   let scrollY = window.scrollY;
//   if (scrollY >= 300) {
//     cImg.style.top = scrollY + 10 + "px";
//   } else {
//     cImg.style.top = 0;
//   }
// }

// window.addEventListener("scroll", cMoveImg);

let cImg = document.querySelector("#c-mi-img");

function cMoveImg() {
  let curScroll = window.scrollY; // Get scroll position of the document
  console.log(curScroll);
  cImg.style.top = curScroll / 4 + "px"; // Update image position based on scroll position (divided by 4 for a smoother effect)
}

window.addEventListener("scroll", () => {
  cMoveImg(); // Call cMoveImg on every scroll event
});
