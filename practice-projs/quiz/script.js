const Quiz = () => {
  const message = document.querySelector(".message");
  const timer = document.querySelector(".timer");
  let time = 120;

  const renderTimer = () => {
    timer.innerText = `Timer: ${time}`;
  };

  const startTimer = () => {
    setInterval(() => {
      time --;
      timer.innerText = `Timer: ${time}`;
    }, 1000)
  }

  const startQuiz = (startQuizSection, questionSection) => {
    startQuizSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    message.innerText = "";
    startTimer();
  };

  const answerResponse = event => {
    const isIncorrect = event.target.classList.contains("ncor");
    const isCorrect = event.target.classList.contains("cor");

    message.innerText = isIncorrect ? "Incorrect :(" : (isCorrect ? "Correct!" : "");
    message.classList.toggle("incorrect", isIncorrect);
    message.classList.toggle("correct", isCorrect);

    if (isIncorrect) {
      event.target.classList.add("incorrect-answer");
      time -= 10;
      setTimeout(() => {
        event.target.classList.remove("incorrect-answer");
      }, 500);
    }
  };



  return { answerResponse, renderTimer, startTimer, startQuiz };
};

const quizModule = Quiz();
quizModule.renderTimer();

const startButton  = document.querySelector(".start-button");
const startQuizSection = document.querySelector(".start-quiz-section")
const questionSection = document.querySelector(".question-section")

startButton.addEventListener("click", () => {
  quizModule.startQuiz(startQuizSection, questionSection);
});

const buttonQuestion = document.querySelectorAll(".button-question")
buttonQuestion.forEach((button) => button.addEventListener("click", quizModule.answerResponse))
