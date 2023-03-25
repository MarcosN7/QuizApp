const quizData = [
    {
      question: "Qual é a capital da França?",
      answers: ["Paris", "Berlin", "Madrid", "Roma"],
      correctAnswer: "Paris"
    },
    {
      question: "Quem é fundador da Microsoft?",
      answers: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"],
      correctAnswer: "Bill Gates"
    },
    {
      question: "Qual é o maior planeta do nosso planeta solar?",
      answers: ["Marte", "Vênus", "Júpiter", "Saturno"],
      correctAnswer: "Júpiter"
    },
    {
      question: "Qual é a moeda do Japão?",
      answers: ["Yen", "Euro", "Dolár", "Real"],
      correctAnswer: "Yen"
    },
    {
      question: "Qual é o menor país do mundo?",
      answers: ["Itália", "Vaticano", "Mônaco", "Liechtenstein"],
      correctAnswer: "Vaticano"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("next-btn");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = quizData[currentQuestion].question;
    const answers = quizData[currentQuestion].answers;
  
    questionEl.innerText = question;
  
    answersEl.innerHTML = "";
  
    for (let i = 0; i < answers.length; i++) {
      const answerEl = document.createElement("button");
      answerEl.innerText = answers[i];
      answerEl.classList.add("answer-btn");
      answerEl.addEventListener("click", checkAnswer);
      answersEl.appendChild(answerEl);
    }
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = quizData[currentQuestion].correctAnswer;
  
    if (selectedAnswer === correctAnswer) {
      event.target.classList.add("correct");
      feedbackEl.innerText = "Correto!";
      score++;
    } else {
      event.target.classList.add("incorrect");
      feedbackEl.innerText = "Incorreto!";
    }
  
    for (let i = 0; i < answersEl.children.length; i++) {
      answersEl.children[i].disabled = true;
      if (answersEl.children[i].innerText === correctAnswer) {
        answersEl.children[i].classList.add("correct");
      }
    }
  
    scoreEl.innerText = `Pontuação: ${score}`;
    nextBtn.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      feedbackEl.innerText = "";
      nextBtn.disabled = true;
    } else {
      endQuiz();
    }
  }  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      // show score
      questionEl.innerText = "Quiz completado!";
      answersEl.innerHTML = "";
      feedbackEl.innerText = "";
      scoreEl.innerText = `Você marcou ${score} de ${quizData.length}!`;
    }
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      loadQuestion();
      feedbackEl.innerText = "";
      scoreEl.innerText = "";
      restartBtn.style.display = "none";
      nextBtn.style.display = "block";
    })
    function restartQuiz() {
      currentQuestion = 0;
      score = 0;
      loadQuestion();
      feedbackEl.innerText = "";
      scoreEl.innerText = "";
  
      nextBtn.style.display = "block";
      restartBtn.style.display = "block";
      window.location.reload();
    }
    
    function endQuiz() {
      questionEl.innerText = "Fim do Quiz!";
      answersEl.innerHTML = "";
      feedbackEl.innerText = `Você marcou ${score} de ${quizData.length}.`;
      scoreEl.innerText = "";
      nextBtn.style.display = "none";
    
      const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  feedbackEl.innerText = "";
  scoreEl.innerText = "";
  restartBtn.style.display = "none";
  nextBtn.style.display = "block";
  const restartBtn = document.createElement("button");
restartBtn.innerText = "Recomeçar Quiz";
restartBtn.addEventListener("click", restartQuiz);
answersEl.appendChild(restartBtn);

});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  feedbackEl.innerText = "";
  scoreEl.innerText = "";

  nextBtn.style.display = "block";
  restartBtn.style.display = "block";
  window.location.reload();
}

    }
    

  });
  
  loadQuestion();
  