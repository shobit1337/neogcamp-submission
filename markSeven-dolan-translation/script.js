var inputTxt = document.getElementById("translate-input");
var translateBtn = document.getElementById("translate-button");
var outputTxt = document.getElementById("translate-output");

const fetchingTranslator = () => {
  let fetchURL = "https://api.funtranslations.com/translate/dolan.json?text=";
  fetch(fetchURL + inputTxt.value)
    .then((res) => res.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      console.log(translatedTxt);
      outputTxt.innerText = translatedTxt;
    })
    .catch((e) => {
      console.error("Sorry! You can only use this only 5 times in one hour...");
      alert("Limit Exceeds! Please, try again after one hour.");
    });
};

translateBtn.addEventListener("click", fetchingTranslator);
