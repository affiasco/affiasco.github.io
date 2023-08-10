const highScoreButton = document.querySelector(".high-score-button");

highScoreButton.addEventListener("click", (event) => {
  console.log(event.target)
})

const startButton  = document.querySelector(".start-button");
const startQuizSection = document.querySelector(".start-quiz-section")

startButton.addEventListener("click", (event) => {
  console.log(event.target)
  startQuizSection.classList.add("hidden");
})