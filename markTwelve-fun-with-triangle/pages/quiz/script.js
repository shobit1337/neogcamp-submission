const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const resultContainer = document.querySelector("#result-container");

const ans = ["yes", "no", "5", "scalene", "isosceles"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === ans[index]) {
      score++;
    }
    index++;
  }
  showResult(score);
};

const showResult = (score) => {
  resultContainer.innerHTML = `Score: ${score}/5`;
};

submitBtn.addEventListener("click", calculateScore);
