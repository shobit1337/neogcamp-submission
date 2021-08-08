const baseInput = document.getElementById("base-input");
const heightInput = document.getElementById("height-input");
const calculateBtn = document.getElementById("submit-btn");
const outputField = document.getElementById("output");

calculateBtn.addEventListener("click", () => {
  //
  let base = Number(baseInput.value);
  let height = Number(heightInput.value);

  if (base == 0 || height == 0) {
    showMessage("Please enter a valid base and height...");
  } else {
    let hypotenuse = Math.sqrt(base * base + height * height);
    showMessage(`Hypotenuse: ${hypotenuse}`);
  }
});

const showMessage = (msg) => {
  outputField.innerText = msg;
  outputField.style.display = "block";
};
