const Quiz = () => {
  const message = document.querySelector(".message");
  const timer = document.querySelector(".timer");
  let intervalId;
  let time = 0;
  let score = 0;

  const renderTimer = () => {
    timer.innerText = `Timer: ${time}`;
  };

  const startTimer = () => {
    intervalId = setInterval(() => timeStart(), 1000);
  };

  const timeStart = () => {
    time++;
    timer.innerText = `Timer: ${time}`;
  };

  const startQuiz = (startQuizSection, questionSection) => {
    startQuizSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    message.innerText = "";
    startTimer();
  };

  const answerResponse = (event) => {
    const isIncorrect = event.target.classList.contains("ncor");
    const isCorrect = event.target.classList.contains("cor");

    message.innerText = isIncorrect
      ? "Incorrect :("
      : isCorrect
      ? "Correct!"
      : "";
    message.classList.toggle("incorrect", isIncorrect);
    message.classList.toggle("correct", isCorrect);

    if (isIncorrect) {
      event.target.classList.add("incorrect-answer");
      time += 10;
      setTimeout(() => {
        event.target.classList.remove("incorrect-answer");
      }, 500);
    }

    if (isCorrect) {
      score += 10;
      showNextQuestion(event.target);
    }
  };

  const showNextQuestion = (eventTarget) => {
    const questionNum = eventTarget.parentElement.dataset.question;
    setTimeout(() => {
      message.innerText = "";
    }, 1000);

    const currentQuestion = document.querySelector(
      `[data-question="${questionNum}"]`
    );

    currentQuestion.classList.add("hidden");
    const nextQuestionNum = parseInt(questionNum) + 1;
    const nextQuestion = document.querySelector(
      `[data-question="${nextQuestionNum}"]`
    );

    nextQuestionNum > 5
      ? showFinalResultSection()
      : nextQuestion.classList.remove("hidden");
  };

  const getScore = () => score;

  const renderFinalScore = () => {
    const scoreEle = document.querySelector(".show-final-score");
    scoreEle.innerText = `Your Final Score is: ${getScore()}`;
  };

  const stopTimer = () => {
    const currentTime = timer.innerText;
    clearInterval(intervalId);
    return currentTime.split(":")[1];
  };

  const renderFinalTime = () => {
    const finalTime = parseInt(stopTimer());
    const showFinalTime = document.querySelector(".show-final-time");
    showFinalTime.innerText = `You completed the quiz in: ${finalTime} seconds`;
  };

  const showFinalResultSection = () => {
    const finalScoreSection = document.querySelector(".final-score-section");
    finalScoreSection.classList.remove("hidden");
    renderFinalScore();
    renderFinalTime();
  };

  return {
    answerResponse,
    renderTimer,
    startTimer,
    startQuiz,
    getScore,
  };
};

const quizModule = Quiz();
quizModule.renderTimer();

const startButton = document.querySelector(".start-button");
const startQuizSection = document.querySelector(".start-quiz-section");
const questionSection = document.querySelector(".question-section");

startButton.addEventListener("click", () =>
  quizModule.startQuiz(startQuizSection, questionSection)
);

const buttonQuestion = document.querySelectorAll(".button-question");
buttonQuestion.forEach((button) =>
  button.addEventListener("click", quizModule.answerResponse)
);
