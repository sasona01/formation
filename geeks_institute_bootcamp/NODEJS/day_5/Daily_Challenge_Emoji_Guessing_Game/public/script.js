let currentAnswer = '';

async function loadQuestion() {
  const res = await fetch('/question');
  const data = await res.json();

  document.getElementById('emoji').textContent = data.emoji;
  currentAnswer = data.answer;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  data.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;

    btn.onclick = () => sendGuess(option);

    optionsDiv.appendChild(btn);
  });
}

async function sendGuess(choice) {
  const res = await fetch('/guess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      guess: choice,
      answer: currentAnswer
    })
  });

  const data = await res.json();

  document.getElementById('score').textContent = data.score;

  if (data.correct) {
    document.getElementById('result').textContent = "✅ Correct!";
  } else {
    document.getElementById('result').textContent = "❌ Wrong!";
  }

  loadQuestion();
}

// charger première question
loadQuestion();