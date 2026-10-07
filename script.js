const quiz = {
  1: {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  2: {
    question: "Which CSS property is used to change the text color?",
    options: ["background-color", "font-color", "color", "text-color"],
    correctAnswer: "color",
  },
  3: {
    question: "Which JavaScript keyword is used to declare a constant?",
    options: ["let", "var", "constant", "const"],
    correctAnswer: "const",
  },
  4: {
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<paragraph>", "<text>", "<p>", "<para>"],
    correctAnswer: "<p>",
  },
  5: {
    question:
      "Which JavaScript method is used to print a message to the console?",
    options: ["console.print()", "console.log()", "print.console()", "log.console()"],
    correctAnswer: "console.log()",
  },
};

const startBtn = document.querySelector(".start");
const scoreDisplay = document.querySelector(".score");

let score;

startBtn.addEventListener("click", () => {
    score = 0;
    for (a = 1; a <= Object.keys(quiz).length; a++) {
        const quizData = quiz?.[a];
        const question = [quizData.question, " "];

        let count = 1;
        quizData.options.forEach(e => {
            question.push(`${count}) ${e}` + " ");
            count++;
        });

        let answer = prompt(question.join("\n"));

        if (quizData.options[answer - 1] == quizData.correctAnswer) {
            score++;
        };
    };

    alert(`You scored ${score} / 5!`);
    scoreDisplay.textContent = `Score: ${score} / 5`;
});