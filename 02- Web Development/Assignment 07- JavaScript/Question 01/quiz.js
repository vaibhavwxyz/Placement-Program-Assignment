// Constants
const quizContainer = document.getElementById("quiz");
const popupContainer = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupButton = document.getElementById("popup-button");
const leaderboardContainer = document.getElementById("leaderboard");
const leaderboardBody = document.getElementById("leaderboard-body");
const overallResult = document.getElementById("overall-result");

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to initialize the quiz
function initQuiz() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  leaderboardContainer.classList.add("hidden");
  renderQuestion();
}

// Function to render a question
function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const questionHtml = `
    <h2>${question.question}</h2>
    <div class="options">
      ${question.options
        .map(
          (option, index) =>
            `<button onclick="checkAnswer(${index})">${option}</button>`
        )
        .join("")}
    </div>
  `;
  quizContainer.innerHTML = questionHtml;
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const selectedOption = question.options[selectedIndex];
  const correctOption = question.answer;

  if (selectedOption === correctOption) {
    showPopupMessage("Correct!", true);
    correctAnswers++;
  } else {
    showPopupMessage(`Wrong! The correct answer is ${correctOption}.`, false);
    incorrectAnswers++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    showLeaderboard();
  } else {
    renderQuestion();
  }
}

// Function to display the popup message
function showPopupMessage(message, isCorrect) {
  popupMessage.textContent = message;
  popupContainer.classList.remove("hidden");
  popupContainer.style.backgroundColor = isCorrect ? "#a3ff9e" : "#ff9e9e";
}

// Function to hide the popup and continue to the next question
function hidePopup() {
  popupContainer.classList.add("hidden");
}

// Function to show the leaderboard
function showLeaderboard() {
  quizContainer.classList.add("hidden");
  leaderboardContainer.classList.remove("hidden");
  renderLeaderboard();
}

// Function to render the leaderboard
function renderLeaderboard() {
  leaderboardBody.innerHTML = "";

  const playerRow = document.createElement("tr");
  const playerName = document.createElement("td");
  playerName.textContent = "Player";
  playerRow.appendChild(playerName);

  const correctRow = document.createElement("tr");
  const correctCount = document.createElement("td");
  correctCount.textContent = "Correct";
  correctRow.appendChild(correctCount);

  const incorrectRow = document.createElement("tr");
  const incorrectCount = document.createElement("td");
  incorrectCount.textContent = "Incorrect";
  incorrectRow.appendChild(incorrectCount);

  playerRow.appendChild(playerName);
  correctRow.appendChild(correctCount);
  incorrectRow.appendChild(incorrectCount);

  leaderboardBody.appendChild(playerRow);
  leaderboardBody.appendChild(correctRow);
  leaderboardBody.appendChild(incorrectRow);

  const userRow = document.createElement("tr");
  const userName = document.createElement("td");
  userName.textContent = "You";
  userRow.appendChild(userName);

  const userCorrect = document.createElement("td");
  userCorrect.textContent = correctAnswers;
  userRow.appendChild(userCorrect);

  const userIncorrect = document.createElement("td");
  userIncorrect.textContent = incorrectAnswers;
  userRow.appendChild(userIncorrect);

  leaderboardBody.appendChild(userRow);

  overallResult.textContent = `Overall Result: ${correctAnswers} correct out of ${questions.length}`;
}

// Event listener for the popup button
popupButton.addEventListener("click", function () {
  hidePopup();
});

// Initialize the quiz
initQuiz();
