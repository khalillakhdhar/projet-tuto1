const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook, findBy } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);
router.get('/search', findBy);

module.exports = router;
