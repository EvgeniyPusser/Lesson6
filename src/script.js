const detailedImages = document.querySelector(".dImage");

const detailedTitle = document.querySelector(".detailed-title");

const boxesElements = document.querySelectorAll(".gallery--item");


// function setDetails(boxElement) {
//   detailedImages.src = boxElement.querySelector(".gallery--item_image").src;
//   // detailedTitle.innerHTML = boxElement.getAttribute(".data-detailed-text");
//   console.log("Data text:", boxElement.getAttribute(".data-detailed-text"));
//   console.log("Clicked element:", boxElement);
// console.log("Text attribute:", boxElement.getAttribute("data-detailed-text"));
//   detailedTitle.innerHTML = boxElement.getAttribute(".data-detailed-text");
// }

function setDetails(boxElement) {
  detailedImages.src = boxElement.querySelector(".gallery--item_image").src;

  // Find the element that has the data attribute
  const detailsElement = boxElement.querySelector(".details");

  if (detailsElement) {
    detailedTitle.innerHTML = detailsElement.getAttribute("data-detailed-text");
  } else {
    console.error("No element with 'data-detailed-text' found inside", boxElement);
  }

   gsap.fromTo(detailedImages, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(detailedTitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
}





for (let i = 0; i < boxesElements.length; i++) {
  boxesElements[i].addEventListener("click", function () {
    setDetails(boxesElements[i]);
  });

}

// const detailedImages = document.querySelector(".dImage");
// const detailedTitle = document.querySelector(".detailed-title");
// const boxesElements = document.querySelectorAll(".gallery--item");

// function setDetails(boxElement) {
//   const imageElement = boxElement.querySelector(".gallery--item_image");
//   const titleElement = boxElement.querySelector(".gallery--item_title");

//   if (imageElement) {
//     detailedImages.src = imageElement.src;
//   }

//   if (titleElement) {
//     detailedTitle.innerHTML = titleElement.dataset.detailedText;
//   }
// }

// boxesElements.forEach((box) => {
//   box.addEventListener("click", function () {
//     setDetails(box);
//   });
// });
