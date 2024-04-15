const express = require('express');
const router = express.Router();
const { createReview, getAllReviews, findReviewsByContent, findReviewsSortedByNote, findReviewsByUserId, findReviewsByLivreId } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createReview);
router.get('/', getAllReviews);
router.get('/content', findReviewsByContent);
router.get('/sorted', findReviewsSortedByNote);
router.get('/user/:userId', findReviewsByUserId);
router.get('/book/:livreId', findReviewsByLivreId);

module.exports = router;
