const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, 'Le titre de la critique est obligatoire'],
    trim: true
  },
  contenu: {
    type: String,
    required: [true, 'Le contenu de la critique est obligatoire'],
    trim: true
  },
  note: {
    type: Number,
    required: [true, 'La note est obligatoire'],
    min: [1, 'La note ne peut pas être inférieure à 1'],
    max: [5, 'La note ne peut pas dépasser 5']
  },
  auteurId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'L\'auteur de la critique est obligatoire']
  },
  livreId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Book',
    required: [true, 'Le livre critiqué est obligatoire']
  },
  datePublication: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
