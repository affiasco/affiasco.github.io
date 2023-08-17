const Quiz = () => {
  const message = document.querySelector(".message");
  const timer = document.querySelector(".timer");
  const showFinalTime = document.querySelector(".show-final-time");
  const showFinalScore = document.querySelector(".show-final-score");
  const highScoreSection = document.querySelector(".show-high-scores");
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
    youLose();
    time++;
    timer.innerText = `Timer: ${time}`;
  };

  const youLose = () => {
    if (time >= 120) {
      // can add a little you lose pop-up
      resetQuiz();
    }
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
      score -= 1;
      setTimeout(() => {
        event.target.classList.remove("incorrect-answer");
      }, 500);
    }

    if (isCorrect) {
      score += 10;
      showNextQuestion(event.target);
    }
  };

  const getQuestionNum = (eventTarget) => {
    return eventTarget.parentElement.dataset.question;
  };

  const showNextQuestion = (eventTarget) => {
    const questionNum = getQuestionNum(eventTarget);
    setTimeout(() => {
      message.innerText = "";
    }, 1000);

    hideCurrentQuestion(questionNum);
    const nextQuestionNum = parseInt(questionNum) + 1;
    const nextQuestion = document.querySelector(
      `[data-question="${nextQuestionNum}"]`
    );

    nextQuestionNum > 5
      ? showFinalResultSection()
      : nextQuestion.classList.remove("hidden");
  };

  const hideCurrentQuestion = (questionNum) => {
    const currentQuestion = document.querySelector(
      `[data-question="${questionNum}"]`
    );

    currentQuestion.classList.add("hidden");
  };

  const renderFinalScore = () => {
    const userScore = getScore();
    showFinalScore.setAttribute("data-score", `${userScore}`);
    showFinalScore.innerText = `Your Final Score is: ${userScore}`;
  };

  const stopTimer = () => {
    const currentTime = timer.innerText;
    clearInterval(intervalId);
    return currentTime.split(":")[1];
  };

  const renderFinalTime = () => {
    const finalTime = parseInt(stopTimer());
    showFinalTime.setAttribute("data-time", `${finalTime}`);
    showFinalTime.innerText = `You completed the quiz in: ${finalTime} seconds`;
  };

  const showFinalResultSection = () => {
    finalScoreSection.classList.remove("hidden");
    renderFinalScore();
    renderFinalTime();
  };

  const finalScoreTime = (eventTarget) => {
    const input = document.querySelector("#name");
    if (eventTarget.className === "add-to-hs") {
      const userObj = {
        userName: input.value,
        finalTime: showFinalTime.getAttribute("data-time"),
        finalScore: showFinalScore.getAttribute("data-score"),
      };
      addFinalScoreToLocal(userObj);
    } else {
      return;
    }
  };

  const addFinalScoreToLocal = (userObject) => {
    const localStorageItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      localStorageItems.push(localStorage.key(i));
    }

    localStorage.setItem(
      `hsData-${localStorageItems.length}`,
      JSON.stringify(userObject)
    );
  };

  const sortLocalStorage = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("hsData-")) {
        const itemData = JSON.parse(localStorage.getItem(key));
        items.push(itemData);
      }
    }

    return items.sort(
      (a, b) => parseFloat(a.finalTime) - parseFloat(b.finalTime)
    );
  };

  const hideCurrentQuestionHS = () => {
    const questions = document.querySelectorAll(".question-section");
    startQuizSection.classList.add("hidden");

    Array.from(questions).forEach((c) => {
      if (c.classList[1] === undefined) {
        c.classList.add("hidden");
      }
    });
  };

  const renderHighScores = () => {
    hideCurrentQuestionHS();
    showHs();
    addItemsToHS();
  };

  const showHs = () => {
    highScoreSection.classList.remove("hidden");
  };

  const addItemsToHS = () => {
    const highScoresList = document.querySelector(".high-scores-list");
    const sortedStorage = sortLocalStorage();

    if (localStorage.length === getHighScoreItems().length) return;
    for (let i = 0; i < localStorage.length; i++) {
      let sortedItem = sortedStorage[i];
      let newListItem = document.createElement("li");
      newListItem.classList.add("hs-item");
      highScoresList.appendChild(newListItem);
      newListItem.innerText = `Name: ${sortedItem.userName} Time:${sortedItem.finalTime} Score: ${sortedItem.finalScore}`;
    }
  };

  const getHighScoreItems = () => {
    const hsItems = document.querySelectorAll(".hs-item");
    return Array.from(hsItems);
  };

  const resetQuiz = () => {
    stopTimer();
    time = 0;
    score = 0;
    hideCurrentQuestionHS();
    message.innerText = "";
    startQuizSection.classList.remove("hidden");
    highScoreSection.classList.add("hidden");
    renderTimer();
  };

  const getScore = () => score;

  return {
    resetQuiz,
    finalScoreTime,
    answerResponse,
    renderHighScores,
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

const finalScoreSection = document.querySelector(".final-score-section");
finalScoreSection.addEventListener("click", (event) =>
  quizModule.finalScoreTime(event.target)
);

const highScoreButton = document.querySelector(".high-score-button");
highScoreButton.addEventListener("click", quizModule.renderHighScores);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", quizModule.resetQuiz);

// change the code to show the high scores as a modal
// need to fix you the youLose method
