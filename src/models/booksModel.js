const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, 'Le titre du livre est obligatoire'],
    trim: true
  },
  auteur: {
    type: String,
    required: [true, 'L\'auteur du livre est obligatoire'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  categorie: {
    type: String,
    trim: true
  },
  datePublication: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
