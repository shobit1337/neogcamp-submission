var billAmt = document.getElementById("bill-amt");
var cashAmt = document.getElementById("cash-given");
var nextBtn = document.getElementById("next-btn");
var checkBtn = document.getElementById("check-btn");
var cashContainer = document.getElementById("cash-container");
var changeContainer = document.getElementById("change-container");
var messageElement = document.getElementById("message-container");
var notesToReturn = document.getElementsByClassName("notes-to-return");

// var billValue= 0

const notes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", () => {
  if (billAmt.value > 0) {
    removeWarning();
    cashContainer.style.display = "flex";
    nextBtn.style.display = "none";
  } else {
    showWarning("Bill Amount should be more then 0");
  }
});

checkBtn.addEventListener("click", () => {
  let bill = Number(billAmt.value);
  let cash = Number(cashAmt.value);
  changeContainer.style.display = "none";
  if (bill > 0 && cash > bill) {
    removeWarning();
    calculateChange(cash - bill);
    changeContainer.style.display = "block";
  } else if (cash < bill) {
    showWarning("Cash provied is less");
  } else if (cash == bill) {
    showWarning("No change is required!");
  }
});

const showWarning = (msg) => {
  messageElement.innerText = msg;
  messageElement.style.display = "block";
};

const removeWarning = () => {
  messageElement.innerText = "";
  messageElement.style.display = "none";
};

const calculateChange = (bill) => {
  for (i = 0; i < notes.length; i++) {
    let notesRequired = Math.trunc(bill / notes[i]);
    notesToReturn[i].innerText = notesRequired;
    bill = bill % notes[i];
  }
};
