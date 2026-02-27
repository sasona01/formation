const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Book 1", author: "Author 1", publishedYear: 2000 },
  { id: 2, title: "Book 2", author: "Author 2", publishedYear: 2010 }
];

// ✅ GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// ✅ GET book by ID
app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id == req.params.bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// ✅ CREATE book
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log("Server running on port 5000 📚");
});