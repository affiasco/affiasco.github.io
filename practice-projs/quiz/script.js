const highScoreButton = document.querySelector(".high-score-button");

highScoreButton.addEventListener("click", (event) => {
  console.log(event.target);
})

const startButton  = document.querySelector(".start-button");
const startQuizSection = document.querySelector(".start-quiz-section")

const questionSection = document.querySelector(".question-section")
const message = document.querySelector(".message")

startButton.addEventListener("click", (event) => {
  console.log(event.target);
  startQuizSection.classList.add("hidden");
  questionSection.classList.remove("hidden")
  message.innerText = ""
  startTimer();
})

let time = 120;
const timer = document.querySelector(".timer");
timer.innerText = `Timer: ${time}`;

// question buttons
questionSection.addEventListener("click", (event) => {
  message.innerText = "";
  if (event.target.classList.contains("ncor")) {
    event.target.style.border = "2px solid red"
    event.target.style.color = "red"
    message.innerText = "Incorrect :("
    time -= 10;
    setTimeout(() => {
      event.target.style.border = "2px solid #218380"
      event.target.style.color = "white"
    } , 500)
  } 

  if (event.target.classList.contains("cor")) {
    message.innerText = "Correct!"
  }
})

// time
const startTimer = () => {
  setInterval(() => {
    time --;
    timer.innerText = `Timer: ${time}`;
  }, 1000)
}