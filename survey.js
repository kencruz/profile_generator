const readline = require("readline");

const questions = [
  ["name", "What's your name? Nicknames are also acceptable :)"],
  ["activity", "What's an activity you like doing?"],
  ["music", "What do you listen to while doing that?"],
  ["meal", "Which meal is your favourite (eg: dinner, brunch, etc.)"],
  ["food", "What's your favourite thing to eat for that meal?"],
  ["sport", "Which sport is your absolute favourite?"],
  [
    "superpower",
    "What is your superpower? In a few words, tell us what you are amazing at!",
  ],
];

const answers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nextLine = (questions, num) => {
  rl.question(questions[num][1] + " ", (answer) => {
    answers[questions[num][0]] = answer;
    if (num === questions.length - 1) {
      rl.close();
      console.log(
        `${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}. `
      );
    } else {
      nextLine(questions, num + 1);
    }
  });
};

nextLine(questions, 0);
