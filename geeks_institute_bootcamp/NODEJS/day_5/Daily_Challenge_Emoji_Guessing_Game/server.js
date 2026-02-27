const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let score = 0;

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🍎', name: 'Apple' },
  { emoji: '🚗', name: 'Car' }
];

// 🎯 Fonction pour mélanger un tableau
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// 🎯 Route pour obtenir une question
app.get('/question', (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  const options = shuffle([
    correct.name,
    ...shuffle(emojis.filter(e => e.name !== correct.name))
      .slice(0, 3)
      .map(e => e.name)
  ]);

  res.json({
    emoji: correct.emoji,
    options,
    answer: correct.name
  });
});

// 🎯 Vérifier la réponse
app.post('/guess', (req, res) => {
  const { guess, answer } = req.body;

  if (guess === answer) {
    score++;
    return res.json({ correct: true, score });
  } else {
    return res.json({ correct: false, score });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000 🎮');
});