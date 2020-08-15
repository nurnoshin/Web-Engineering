async function init() {
  const defaultQuizes = [
    {
      question: "What's the captial of Missouri?",
      potentialAnswers: ["Kansas City", "Jefferson City", "St. Louis"],
      correctAnswer: "Jefferson City",
    },
    {
      question: "How many ounces in a pound?",
      potentialAnswers: ["12", "16", "40"],
      correctAnswer: "16",
    },
    {
      question: "Who was the first person to set foot on the moon?",
      potentialAnswers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin"],
      correctAnswer: "Neil Armstrong",
    },
    {
      question:
        "Who holds the Major League Baseball record for the most home runs in a season?",
      potentialAnswers: ["Mike Trout", "Barry Bonds", "Cody Bellinger"],
      correctAnswer: "Barry Bonds",
    },
    {
      question: "In what year was University of Liverpool founded?",
      potentialAnswers: ["1250", "1881", "1950"],
      correctAnswer: "1881",
    },
  ];

  const template = await fetch("quiz-element.html")
    .then((res) => res.text())
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (!template) {
    alert("There is an error. Please check the code.");
  }

  const randomizedQuizes = shuffle(defaultQuizes);

  renderQuiz(template, randomizedQuizes, 0, 0);
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function renderQuiz(template, quizes, index, currectlyGuessed) {
  const div = document.querySelector(".quiz-container");

  div.style.display = "none";

  div.innerHTML = template;

  let quiz = quizes[index];

  if (!quiz) {
    div.querySelector(
      ".final-progress"
    ).textContent = `You answered ${currectlyGuessed} out of ${
      quizes.length
    } questions correctly (${(currectlyGuessed / quizes.length) * 100}%)`;

    const elements = div.querySelector(".quiz").children;

    for (const element of elements) {
      if (!element.classList.contains("final-progress")) {
        element.style.visibility = "hidden";
      }
    }

    div.style.display = "block";

    return;
  } else {
    div.querySelector(".final-progress").style.display = "none";
  }

  quiz.potentialAnswers = shuffle(quiz.potentialAnswers);

  div.querySelector(".guess").textContent = "";
  div.querySelector(".result").textContent = "";
  div.querySelector(".correct-answer").textContent = "";

  div.querySelector(".next-question").style.display = "none";
  div.querySelector(".progress").style.display = "none";

  div.querySelector(".question").textContent = quiz.question;

  const answerElements = div.querySelectorAll(".answer");

  let i = 0;

  for (const element of answerElements) {
    element.textContent = quiz.potentialAnswers[i];

    element.addEventListener("click", (event) => {
      event.preventDefault();

      const index = Array.from(answerElements).findIndex(
        (el) => el.textContent === event.target.textContent
      );

      div.querySelector(
        ".guess"
      ).textContent = `You guessed ${String.fromCharCode(65 + index)}) ${
        event.target.textContent
      }`;

      if (event.target.textContent === quiz.correctAnswer) {
        div.querySelector(".result").textContent = "CORRECT";
        div.querySelector(".result").style.color = "green";

        currectlyGuessed++;
      } else {
        div.querySelector(".result").textContent = "INCORRECT";
        div.querySelector(".result").style.color = "red";

        const correctAnswerIndex = Array.from(answerElements).findIndex(
          (el) => el.textContent === quiz.correctAnswer
        );

        div.querySelector(
          ".correct-answer"
        ).textContent = `The correct answer is ${String.fromCharCode(
          65 + correctAnswerIndex
        )}) ${quiz.correctAnswer}`;
      }

      div.querySelector(".next-question").style.display = "block";

      div.querySelector(
        ".progress"
      ).textContent = `You answered ${currectlyGuessed} out of ${
        quizes.length
      } questions correctly (${(currectlyGuessed / quizes.length) * 100}%)`;

      div.querySelector(".progress").style.display = "block";
    });

    i++;
  }

  div.querySelector(".next-question").addEventListener("click", (event) => {
    event.preventDefault();

    renderQuiz(template, quizes, index + 1, currectlyGuessed);
  });

  div.style.display = "block";
}

init();
