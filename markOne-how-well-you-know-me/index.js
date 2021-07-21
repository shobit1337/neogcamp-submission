var read = require("readline-sync");
const chalk = require("chalk");

const correctF = chalk.green.bold;
const incorrectF = chalk.red.bold;
const scoreF = chalk.black.bold.bgYellow;
const questionF = chalk.magenta.bold;
score = 0;

console.log(chalk.blue.bold("Hello Everyone!"));
console.log(chalk.blue.bold('Welcome to "How well you know me?" game'));

function ques(question, answer) {
  var givenAns = read.question(question);
  if (givenAns.toUpperCase() === answer.toUpperCase()) {
    console.log(correctF("YOU Answered right!!"));
    score = score + 1;
  } else {
    console.log(incorrectF("You answered wrong!!"));
  }
  console.log(scoreF("Your Score is: " + score));
}

ques("What is my age?", "23");
ques("What course I am pursuing right now?", "MCA");
ques("My pets name?", "Max");
ques("Hours I sleep?", "8");
ques("My Favorate Language?", "javascript");
ques("Do I like gardening?", "yes");
ques("Where I slept post of my day?", "8");
ques("My most played video game?", "csgo");
ques("Person I talk to most?", "mithie");
ques("what username I use on my most of handles?", "shobit1337");

console.log(
  chalk.bold(
    chalk.magenta("\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665") +
      "Thank you for playing this game" +
      chalk.magenta("\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665") +
      "\n              Your Final score is:" +
      score
  )
);
