// document.addEventListener("DOMContentLoaded", function () {
//   function toggleContent() {
//     let content = document.querySelector(".body-content-left");
//     content.classList.toggle("show");
//   }

//   let clickableText = document.querySelector(".body-top p");
//   if (clickableText) {
//     clickableText.addEventListener("click", toggleContent);
//   }
// });

let content = document.querySelector(".crypto-scam-content");
let scamContent = document.querySelector(".right");

function showContent() {
  if (content) {
    content.classList.toggle("show");
  } else {
    console.log("Element '.crypto-scam-content' not found");
  }

  if (scamContent) {
    console.log("Element '.right'  found", scamContent.classList);
    scamContent.classList.toggle("show");
  } else {
    console.log("Element '.right' not found");
  }
}
