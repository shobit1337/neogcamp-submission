const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const resultContainer = document.querySelector("#output-container");

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
  console.log(score);
  showResult(score);
};

const showResult = (score) => {
  resultContainer.innerText = `Score: ${score}/5`;
  resultContainer.style.display = "block";
};

submitBtn.addEventListener("click", calculateScore);
