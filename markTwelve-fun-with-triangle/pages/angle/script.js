const angleInput = document.getElementsByClassName("input");
const submitBtn = document.getElementById("submit-btn");
const outputContainer = document.getElementById("output-container");

submitBtn.addEventListener("click", () => {
  //
  if (angleInput[0].value && angleInput[1].value && angleInput[2].value) {
    if (
      Number(angleInput[0].value) +
        Number(angleInput[1].value) +
        Number(angleInput[2].value) ==
      180
    ) {
      showMessage("It's a Triangle!!");
    } else {
      showMessage("This will not form a Triangle.");
    }
  } else {
    showMessage("Please enter all angles...");
  }
});

const showMessage = (msg) => {
  outputContainer.innerText = msg;
  outputContainer.style.display = "block";
};
