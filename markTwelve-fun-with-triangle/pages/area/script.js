const sideInput = document.getElementsByClassName("input");
const calculateBtn = document.getElementById("submit-btn");
const outputField = document.getElementById("output");

calculateBtn.addEventListener("click", () => {
  let sideA = Number(sideInput[0].value);
  let sideB = Number(sideInput[1].value);
  let sideC = Number(sideInput[2].value);

  if (sideA == 0 || sideB == 0 || sideC == 0) {
    showMessage("Please enter a valid sides...");
  } else {
    let parameter = sideA + sideB + sideC;
    let area = calculateArea(sideA, sideB, sideC, parameter);
    showMessage(`Area: ${area}`);
  }
});

const showMessage = (msg) => {
  outputField.innerText = msg;
  outputField.style.display = "block";
};

const calculateArea = (a, b, c, s) => {
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
