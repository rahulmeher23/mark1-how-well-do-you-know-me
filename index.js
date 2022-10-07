// var chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

// high score
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Which year was I born in? ",
  answer: "2000"
}, {
  question: "Where do I live? ",
  answer: "Mumbai"
},
{
  question: "Do I work? ",
  answer: "no"
}, {
  question: "Which college did I graduate from? ",
  answer: "vcet"
}, {
  question: "Which field did I graduate from? ",
  answer: "extc"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Rahul?");
  console.log("\n");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(("right!"));
    score = score + 1;

  } else {
    console.log(("wrong!"));
  }

  console.log("Current score: ", score);
  console.log("-------------")
  console.log("\n");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();