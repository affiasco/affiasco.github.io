const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img");
let currentSelected = 0;

prevBtn.addEventListener("click", function() {
  galleryImgs[currentSelected].classList.remove("active");
  currentSelected--;
  galleryImgs[currentSelected].classList.add("active");
  nextBtn.disabled = false;
  if (currentSelected === 0) prevBtn.disabled = true;
})

nextBtn.addEventListener("click", function() {
  galleryImgs[currentSelected].classList.remove("active");
  currentSelected++;
  galleryImgs[currentSelected].classList.add("active");
  prevBtn.disabled = false;
  if (galleryImgs.length - 1 === currentSelected) nextBtn.disabled = true;
})