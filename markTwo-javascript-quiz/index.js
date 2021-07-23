var read = require("readline-sync");
const chalk = require("chalk");

const questions = [
  {
    question: "When was the JavaScript was first release?",
    answer: "1995",
  },
  {
    question: "How developed the JavaScript Language?",
    answer: "Brendan Eich",
  },
  {
    question: "What is the real name of JavaScript?",
    answer: "Mocha",
  },
  {
    question: "What is this [[[]]]?",
    answer: "three dimensional array",
  },
  {
    question: "Are Java and JavaScript same?",
    answer: "No",
  },
  {
    question: "Is JavaScript faster than ASP script?",
    answer: "Yes",
  },
  {
    question: "Does JavaScript support multithreading?",
    answer: "No",
  },
  {
    question: "Can an anonymous function be assigned to a variable?",
    answer: "yes",
  },
  {
    question: "Which tag we use to use external javascript file?",
    answer: "script",
  },
  {
    question: "Is JavaScript case sensitive language?",
    answer: "Yes",
  },
];

function check(ans, n) {
  if (ans === questions[n].answer) {
    console.log(chalk.green.bold("Correct!"));
    score++;
  } else {
    console.log(
      chalk.red.bold("Incorrect!") +
        " " +
        chalk.underline("Correct answer is: " + questions[n].answer)
    );
    score--;
  }
  console.log("New Score is " + score);
}
var score = 0;

console.log(chalk.inverse("Welcome to the Javascript Quiz! Good Luck :D"));
for (let i = 0; i < questions.length; i++) {
  let ans = read.question(questions[i].question);
  check(ans, i);
}
console.log(
  chalk.bold(
    chalk.magenta("\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665") +
      "You have completed the quiz" +
      chalk.magenta("\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665")
  )
);
console.log(chalk.black.bold.bgYellow("Final score is: " + score));
